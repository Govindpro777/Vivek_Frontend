import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ProfitChart = ({ activities }) => {
  const data = {
    labels: activities.map(a => new Date(a.date).toLocaleDateString()),
    datasets: [
      {
        label: 'P/L %',
        data: activities.map(a => a.pnlPercent),
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Profit/Loss Over Time'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <Line data={data} options={options} />
    </div>
  );
};

export default ProfitChart;
