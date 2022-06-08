import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart, Plugin, registerables } from 'chart.js';

import { randomData } from '../functions/app.function';

Chart.register(...registerables);

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss']
})
export class ChartBarComponent implements OnInit {

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
      const chartEl = document.getElementById('chartbarId') as HTMLCanvasElement;
      if (!!chartEl) {
        const ctx = chartEl.getContext('2d');
        if (ctx) {
          const options = me.getConfigOptionsChart();
          const data = me.getDataChart();
          me.chartInstance = new Chart(ctx, {
            type: 'bar',
            data,
            options,
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
        label : 'Avarage Patient Visit',
        data: [
          ...Array(40)
            .fill(0)
            .map((item) => randomData(0, 40)),
        ],
        backgroundColor: ['#E5E5E5'],
        borderColor: '#8146FF',
        hoverBackgroundColor: "#8146FF",
      }
    ];
    return fakeDatasets;
  }

  private getLabelsChart() {
    const labels: string[] = [];
    Array(7)
      .fill(0)
      .map((_, index: number) => {
        const dateName = new Date();
        dateName.setDate(index);
        labels.push(
          dateName.toLocaleDateString('default', { weekday: 'short' })
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
          beginAtZero: true,
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
          pointStyle: 'rectRounded',
        },
      },
    };
  }

}
