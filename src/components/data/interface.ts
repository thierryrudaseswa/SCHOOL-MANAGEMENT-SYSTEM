// interfaces.ts
export interface ChartDataItem {
  name: string;
  y: number;
  drilldown?: string | null;
}

export interface DrilldownData {
  [key: string]: [string, number][];
}

export interface HighchartsConfig {
  chart: {
    type: string;
  };
  title: {
    align: string;
    text: string;
  };
  subtitle: {
    align: string;
    text: string;
  };
  accessibility: {
    announceNewData: {
      enabled: boolean;
    };
  };
  xAxis: {
    type: string;
  };
  yAxis: {
    title: {
      text: string;
    };
  };
  legend: {
    enabled: boolean;
  };
  plotOptions: {
    series: {
      borderWidth: number;
      dataLabels: {
        enabled: boolean;
        format: string;
      };
    };
  };
  tooltip: {
    headerFormat: string;
    pointFormat: string;
  };
  series: {
    name: string;
    colorByPoint: boolean;
    data: ChartDataItem[];
  }[];
  drilldown: {
    breadcrumbs: {
      position: {
        align: string;
      };
    };
    series: {
      name: string;
      id: string;
      data: [string, number][];
    }[];
  };
}
