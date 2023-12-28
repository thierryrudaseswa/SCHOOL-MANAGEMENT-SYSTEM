import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import "./perfGraph.css";

interface ExtendedApexOptions extends ApexOptions {
  zoom?: {
    enabled?: boolean;
  };
}

interface ApexChartProps {}

interface ApexChartState {
  series: {
    name: string;
    data: number[];
    color?: string; // Individual color for each series
  }[];
  options: ExtendedApexOptions; 
}

class ApexChart extends React.Component<ApexChartProps, ApexChartState> {
  constructor(props: ApexChartProps) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Servings',
          data: [74, 82, 78, 83, 84, 68],
          color: "#2B59FF" // Color for the first data point
        },
      ],
      options: {
        chart: {
          height: 200,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            columnWidth: '50%',
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 2,
        },
        grid: {
          row: {
            colors: ['#fff', '#f2f2f2'],
          },
        },
        xaxis: {
          labels: {
            rotate: -30,
          },
          categories: [
            'MidTerm 1 ',
            'Term 1',
            'MidTerm 2',
            'Term 2',
            'Mid Term 3',
            'Term 3'
          ],
          tickPlacement: 'on',
        },
        yaxis: {
          title: {
            text: 'Servings',
          },
          min: 0, 
          max: 100, 
        },
        
        zoom: {
          enabled: false,
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={228} 
        />
      </div>
    );
  }
}

export default ApexChart;
