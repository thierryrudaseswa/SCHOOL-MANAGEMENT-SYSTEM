import React from 'react';
import { Line } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js/auto';
import 'chartjs-adapter-date-fns';

import 'chartjs-plugin-annotation';

const MyLineChart = () => {
  const labels = Array.from({ length: 7 }, (_, i) => (i + 1).toString());

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    scales: {
      x: {
        type: 'category',
        labels: labels,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default MyLineChart;
