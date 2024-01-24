import React, { useEffect } from 'react';
import { Chart } from 'react-google-charts';

const GoogleLineChart: React.FC = () => {
  useEffect(() => {
    drawChart();
  }, []);

  const drawChart = () => {
    const data = [
      ['Year', 'Sales', 'Expenses'],
      [2021, 1000, 400],
      [2022, 1170, 460],
      [2023, 660, 1120],
      [2024, 1030, 540],
    ];

    const options = {
      curveType: 'function',
      legend: 'none',
      width: 250,
      height: 130,
      backgroundColor: '#000', // Adjust this color as needed
    };

    return (
      <Chart
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={options}
      />
    );
  };

  return (
    <div
      className="dark:bg-dark" 
      style={{
        width: '180px',
        height: '90px',
        backgroundColor: '#fff',
        margin: '0',
      }}
    >
      {drawChart()}
    </div>
  );
};

export default GoogleLineChart;
