import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { showAlert } from "../../Utils/alerts";

const Invoice = () => {
  const location = useLocation();
  const invoiceRef = useRef();
  const navigate = useNavigate();
  const { cart, paymentInfo } = location.state || {};

  const handleDownload = async () => {
    try {
      const invoiceElement = invoiceRef.current;

      const canvas = await html2canvas(invoiceElement, {
        useCORS: true,
        scale: 2,
        onclone: (document) => {
          // Remove any unsupported color formats dynamically
          document.querySelectorAll("*").forEach((element) => {
            const computedStyle = getComputedStyle(element);
            if (computedStyle.color.startsWith("oklch")) {
              element.style.color = "#000";
            }
            if (computedStyle.backgroundColor.startsWith("oklch")) {
              element.style.backgroundColor = "#fff";
            }
          });
        },
      });

      // Convert canvas to image
      const imgData = canvas.toDataURL("image/png");

      // create jsPDF
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      // add the image to the PDF
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      // save the pdf
      pdf.save("invoice-medi-nest.pdf");
    } catch (error) {
      showAlert({
        title: "Something went wrong!",
        text: error.message,
        icon: "error",
        confirmButtonText: "Try Again",
      });
      console.error("Error downloading the PDF:", error);
    }
  };


  if (!location.state?.paymentInfo?.amount) {
    return <Navigate to="/"></Navigate>
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div ref={invoiceRef} className="bg-white border rounded-lg p-6 px-10">
        {/* Logo */}
        <div className="flex flex-col justify-start">
          <img src="/logo.png" alt="Company Logo" className="h-16 w-fit" />

          <p>
            Care Delivered, Health Restored – MediNest, <br /> Your Trusted
            Medicine Hub!
          </p>
        </div>
        <section className="flex flex-col md:flex-row justify-between gap-6">
          {/* Billing Details */}
          <div className="mt-6">
            <h3 className="text-lg font-bold">Billing Details:</h3>
            <p>{paymentInfo?.name}</p>
            <p>Email: {paymentInfo?.buyerEmail}</p>
          </div>

          {/* Invoice Header */}
          <div className="mt-4  md:self-center">
            <h2 className="text-xl font-semibold">Invoice</h2>
            <p className="text-sm">
              Date: {new Date().toLocaleDateString("en-GB")}
            </p>
            <p className="text-sm">
              Invoice #: {Math.floor(Math.random() * 900000)}
            </p>
            <p className="text-sm">
              Transaction ID : {paymentInfo?.transactionId}
            </p>
          </div>
        </section>

        {/* Order Summary */}
        <h3 className="mt-6 text-lg font-bold mb-4">Order Summary:</h3>
        <div className=" overflow-auto">
          <table className="table-auto w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Item</th>
                <th className="px-4 py-2 text-right">Quantity</th>
                <th className="px-4 py-2 text-right">Price</th>
                <th className="px-4 py-2 text-right">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {cart && cart.map((item) => (
                <tr key={item._id}>
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2 text-right">{item.quantity}</td>
                  <td className="px-4 py-2 text-right">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="px-4 py-2 text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total */}
        <div className="mt-6 flex justify-end gap-4 items-center">
          <h3 className="text-lg font-bold">Subtotal:</h3>
          <p className="text-lg font-bold">${paymentInfo?.amount.toFixed(2)}</p>
        </div>
      </div>

      {/* Download Button */}
      <div className="mt-6">
        <button onClick={handleDownload} className="green-button">
          Print Invoice
        </button>
      </div>
    </div>
  );
};

export default Invoice;
