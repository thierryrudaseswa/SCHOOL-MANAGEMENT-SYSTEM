// Import necessary libraries and types
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import "./perfGraph.css"

// Extend ApexOptions to include zoom property
interface ExtendedApexOptions extends ApexOptions {
  zoom?: {
    enabled?: boolean;
  };
}

// Define component props and state
interface ApexChartProps {}

interface ApexChartState {
  series: {
    name: string;
    data: number[];
  }[];
  options: ExtendedApexOptions; // Use ExtendedApexOptions type
}

// Define the ApexChart component
class ApexChart extends React.Component<ApexChartProps, ApexChartState> {
  constructor(props: ApexChartProps) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Servings',
          data: [44, 55, 41, 67, 22, 43], 
        },
      ],
      options: {
        annotations: {
          points: [
            {
              x: 'Bananas',
              seriesIndex: 0,
              label: {
                borderColor: '#775DD0',
                offsetY: 0,
                style: {
                  color: '#fff',
                  background: '#775DD0',
                },
                text: 'Bananas are good',
              },
            },
          ],
        },
        chart: {
          height: 200, // Reduced height
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
            rotate: -35,
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
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: 'horizontal',
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100],
          },
        },
        // Disable zoom icons
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
          height={250}
        />
      </div>
    );
  }
}

export default ApexChart;
