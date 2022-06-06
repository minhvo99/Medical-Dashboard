import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart, Plugin, registerables } from 'chart.js';

import { randomData } from '../functions/app.function';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  private chartInstance?: Chart;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    const me = this;
    me.initChart();
  }

  private initChart(): void {
    const me = this;
    const interval = setInterval(() => {
      const chartEl = document.getElementById('chartId') as HTMLCanvasElement;
      if (!!chartEl) {
        const ctx = chartEl.getContext('2d');
        if (ctx) {
          const options = me.getConfigOptionsChart();
          const data = me.getDataChart();
          me.chartInstance = new Chart(ctx, {
            type: 'line',
            data,
            options: {
              responsive: true,
              plugins: {
                tooltip : {
                  // callbacks: {
                  //   label: function(tooltipItem, data) {
                  //   let label = "Line 1";
                  //   let label2 = "Line 2";
                  //   return [label, label2];
                  //         }
                  //     /* afterBody: function(tooltipItem, chart) {
                  //       return tooltipItem.yLabel+"\n"+"secondLine"
                  //     } */
                  // }
                },
                title: {
                  display: true,
                  text: 'Hospital Survey', 
                  align: 'start',    
                  padding:{
                    top:10,
                    bottom: 20
                  },      
                  font:{
                    weight : 'bold',
                    size : 26,

                  },
                  color: '#FFFFFF',
                },
              },
            },
          });
          clearInterval(interval);
        }
      }
    }, 10);
  }

  private updateDatasetsChart(): void {}

  private getDataChart() {
    const me = this;
    const datasets = me.getDatasetsChart();
    const labels = me.getLabelsChart();
    return {
      labels,
      datasets,
    };
  }

  private getDatasetsChart() {
    const fakeDatasets = [
      {
        label: 'New Patients ',
        data: [
          ...Array(20)
            .fill(1)
            .map((item) => randomData(0, 10)),
        ],
        background:
          'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 26%, rgba(255,255,255,1) 100%)',
        borderColor: '#8146FF',
        tension: 0.5,
        fill: true,
        pointRadius: [5, 5, 5, 5],
        pointBackgroundColor: ['#8146FF', '#8146FF', '#8146FF', '#8146FF'],
        pointBorderColor: '#fff',
      },
      {
        label: 'Old Patients',
        data: [
          ...Array(20)
            .fill(1)
            .map((item) => randomData(0, 10)),
        ],
        background:
          'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 26%, rgba(255,255,255,1) 100%)',
        borderColor: '#0075FF',
        tension: 0.5,
        fill: true,
        pointRadius: [5, 5, 5, 5],
        pointBackgroundColor: ['#0075FF', '#0075FF', '#0075FF', '#f0075FFff'],
        pointBorderColor: '#fff',
      },
    ];
    return fakeDatasets;
  }

  private getLabelsChart() {
    const labels: string[] = [];
    Array(12)
      .fill(0)
      .map((_, index: number) => {
        const monthName = new Date();
        monthName.setMonth(index);
        labels.push(
          monthName.toLocaleDateString('default', { month: 'short' })
        );
      });
    return labels;
  }

  private getConfigOptionsChart() {
    const me = this;
    const plugins = me.getConfigPluginsChart();
    return {
      responsive: true,
      plugins,
      scales: {
        x: {},
        y: {
          grid: {
            display: false,
          },
        },
      },
    };
  }

  private getConfigPluginsChart() {
    return {
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: 'dash',
        },
      },
    };
  }
}
