import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from '../components/Chart';
import ExportButtons from '../components/ExportButtons';

const Dashboard = () => {
  const [sales, setSales] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchSales = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get('/api/sales', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSales(res.data);
        setFiltered(res.data);
      } catch {
        alert('Unauthorized or error fetching data');
      }
    };
    fetchSales();
  }, []);

  const handleFilter = () => {
    const result = sales.filter(s => s.deliveryStatus.toLowerCase().includes(filter.toLowerCase()));
    setFiltered(result);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Filter by delivery status"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="p-2 border"
        />
        <button onClick={handleFilter} className="bg-blue-900 text-white px-4 py-2">Apply</button>
      </div>

      <ExportButtons data={filtered} />

      <table className="w-full border mt-4">
        <thead className="bg-gray-200">
          <tr>
            <th>Sale Code</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Delivery</th>
            <th>Tracking</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((s, i) => (
            <tr key={i} className="text-center border-t">
              <td>{s.saleCode}</td>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.phone}</td>
              <td>{s.product}</td>
              <td>{s.quantity}</td>
              <td>{s.price}</td>
              <td>{s.deliveryStatus}</td>
              <td>{s.trackingId}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Chart data={filtered} />
    </div>
  );
};

export default Dashboard;
