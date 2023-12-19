// MaterialChart.tsx

import React from 'react';
import * as Chart from 'react-google-charts';
import './Graph.css';

interface MaterialChartProps {
  chartData: Array<Array<string | number>>;
}

interface CustomChartOptions {
  chart: {
    title: string;
  };
  width: number;
  height: number;
  series: Record<number, { axis: string }>;
  axes: {
    y: Record<string, { label: string }>;
  };
}

const MaterialChart: React.FC<MaterialChartProps> = ({ chartData }) => {
  const materialOptions: CustomChartOptions = {
    chart: {
      title: 'Daily comparison of the income and expenses in the school',
    },
    width: 500,
    height: 200,
  
    series: {
      0: { axis: 'Income' },
      1: { axis: 'Expenses' },
    },
    axes: {
      y: {
        Temps: { label: 'Income' },
        Daylight: { label: 'Expenses' },
      },
    },
  };

  return (
    <div className="chart-container w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex items-center justify-center">
      <Chart.Chart chartType="LineChart" data={chartData} options={materialOptions} />
    </div>
  );
};

export default MaterialChart;
