import React from 'react';
import { CSVLink } from 'react-csv';
import * as XLSX from 'xlsx';

const ExportButtons = ({ data }) => {
  const headers = [
    { label: 'Sale Code', key: 'saleCode' },
    { label: 'Name', key: 'name' },
    { label: 'Email', key: 'email' },
    { label: 'Phone', key: 'phone' },
    { label: 'Product', key: 'product' },
    { label: 'Quantity', key: 'quantity' },
    { label: 'Price', key: 'price' },
    { label: 'Delivery Status', key: 'deliveryStatus' },
    { label: 'Tracking ID', key: 'trackingId' },
  ];

  const exportXLSX = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sales');
    XLSX.writeFile(workbook, 'sales_data.xlsx');
  };

  return (
    <div className="flex gap-4 mb-4">
      <CSVLink data={data} headers={headers} filename="sales_data.csv" className="bg-green-600 text-white px-4 py-2">
        Export CSV
      </CSVLink>
      <button onClick={exportXLSX} className="bg-purple-600 text-white px-4 py-2">
        Export XLSX
      </button>
    </div>
  );
};

export default ExportButtons;
