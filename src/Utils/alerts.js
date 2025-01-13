import Swal from "sweetalert2";
import '../swal.css'
import { toast } from "react-toastify";


//toastify
export const  showToast = (message, type = "info") => {
  toast[type](message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};


//sweet alert single button
export const showAlert = ({ title, text, icon="success", confirmButtonText = "OK" }) => {
    return Swal.fire({
      title: title || "Alert!",
      text: text || "",
      icon: icon || "info ",
      confirmButtonText,
      customClass: {
        popup: "popup",
        title: `text-2xl font-semibold ${icon === "error"?"text-red-600": "text-green-600"}`,
        content: "text-gray-600",
        confirmButton:`${icon === "error"?"alert-button-error": "alert-button-success"}`
      },
    });
  };


//   confirm confirmButton
// Swal.fire({
//     title: "Are you sure?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonText: "Yes, delete it!",
//     width:"400px",
//     customClass: {
//       popup: "popup",
//       title: "text-2xl font-semibold text-orange-600",
//       content: "text-gray-600",
//       confirmButton:"alert-button-success",
//       cancelButton:"alert-button-error"
//     },
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire({
//         title: "Deleted!",
//         text: "Your file has been deleted.",
//         icon: "success",
//         customClass: {
//             popup: "popup",
//             title: "text-2xl font-semibold text-green-600",
//             content: "text-gray-600",
//             confirmButton:"alert-button-success",
//           },
//       });
//     }
//   });
