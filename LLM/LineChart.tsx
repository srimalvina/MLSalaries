import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

const LineChart: React.FC<{ data: { year: number; jobs: number }[] }> = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.year.toString()),
    datasets: [{
      label: 'Number of Jobs',
      data: data.map((item) => item.jobs),
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }],
  };

  return <Line data={chartData} />;
};

export default LineChart;
