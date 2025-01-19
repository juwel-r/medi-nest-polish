import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { jsPDF } from "jspdf";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";

const SalesReport = () => {
  const [salesData, setSalesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [dateRange, setDateRange] = useState({ startDate: "", endDate: "" });
  const [loading, setLoading] = useState(false);
  console.log(dateRange)

  // Fetch sales data from backend
  useEffect(() => {
    const fetchSalesData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/sales");
        const data = await response.json();
        setSalesData(data);
        setFilteredData(data); // Default filtered data is all data
      } catch (error) {
        console.error("Error fetching sales data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSalesData();
  }, [dateRange]);

  // Filter data by date range
  const handleFilterByDate = () => {
    if (dateRange.startDate && dateRange.endDate) {
      const filtered = salesData.filter((item) => {
        const saleDate = new Date(item.date);
        return (
          saleDate >= new Date(dateRange.startDate) &&
          saleDate <= new Date(dateRange.endDate)
        );
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(salesData);
    }
  };

  // Export to PDF
  const exportToPDF = () => {
    const pdf = new jsPDF();
    pdf.text("Sales Report", 20, 10);
    let row = 20;

    filteredData.forEach((item, index) => {
      pdf.text(
        `${index + 1}. Name: ${item.name}, Amount: $${item.amount}, Date: ${new Date(
          item.date
        ).toLocaleDateString()}`,
        10,
        row
      );
      row += 10;
    });

    pdf.save("sales-report.pdf");
  };

  // Export to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "SalesReport");
    XLSX.writeFile(workbook, "sales-report.xlsx");
  };

  const columns = [
    { name: "Medicine Name", selector: (row) => row.name, sortable: true },
    { name: "Seller Email", selector: (row) => row.sellerEmail, sortable: true },
    { name: "Buyer Email", selector: (row) => row.email, sortable: true },
    {
      name: "Amount",
      selector: (row) => `$${row.amount.toFixed(2)}`,
      sortable: true,
    },
    { name: "Transaction ID", selector: (row) => row.transactionId },
    {
      name: "Date",
      selector: (row) => new Date(row.date).toLocaleDateString(),
      sortable: true,
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Sales Report</h2>

      {/* Date Range Filter */}
      <div className="flex items-center gap-4">
        <div>
          <label className="block text-sm">Start Date:</label>
          <input
            type="date"
            className="border rounded px-2 py-1"
            onChange={(e) =>
              setDateRange({ ...dateRange, startDate: e.target.value })
            }
          />
        </div>
        <div>
          <label className="block text-sm">End Date:</label>
          <input
            type="date"
            className="border rounded px-2 py-1"
            onChange={(e) =>
              setDateRange({ ...dateRange, endDate: e.target.value })
            }
          />
        </div>
        <button
          onClick={handleFilterByDate}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Filter
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <button
          onClick={exportToPDF}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Export to PDF
        </button>
        <CSVLink
          data={filteredData}
          filename={"sales-report.csv"}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Export to CSV
        </CSVLink>
        <button
          onClick={exportToExcel}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Export to Excel
        </button>
      </div>

      {/* Data Table */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          highlightOnHover
          className="border rounded shadow"
        />
      )}
    </div>
  );
};

export default SalesReport;
