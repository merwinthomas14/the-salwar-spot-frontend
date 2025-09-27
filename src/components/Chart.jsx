import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const Chart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.product),
    datasets: [
      {
        label: 'Sales Quantity',
        data: data.map(d => d.quantity),
        backgroundColor: '#1E3A8A',
      },
    ],
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-2">Sales Chart</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default Chart;
