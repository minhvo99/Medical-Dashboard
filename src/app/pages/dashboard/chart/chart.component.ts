import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Chart, ChartOptions, Plugin, registerables } from "chart.js";

import { randomData } from "../functions/app.function";

Chart.register(...registerables);

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"],
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
      const chartEl = document.getElementById("chartId") as HTMLCanvasElement;
      if (!!chartEl) {
        const ctx = chartEl.getContext("2d");
        if (ctx) {
          const options: ChartOptions<any> = me.getConfigOptionsChart();
          const data = me.getDataChart();
          me.chartInstance = new Chart(ctx, {
            type: "line",
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
    const canvas = document.getElementById(
      "chartId"
    ) as HTMLCanvasElement | null;

    const ctx = canvas!.getContext("2d");
    const gradient = ctx!.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(121,136,163,100)");
    gradient.addColorStop(1, "rgba(121,136,163,0)");
    const fakeDatasets = [
      {
        label: "New Patients",
        data: [
          ...Array(20)
            .fill(1)
            .map((item) => randomData(0, 10)),
        ],
        backgroundColor: gradient,
        borderColor: "#8146FF",
        tension: 0.5,
        fill: true,
        pointRadius: [5, 5, 5, 5],
        pointBackgroundColor: ["#8146FF", "#8146FF", "#8146FF", "#8146FF"],
        pointBorderColor: "#fff",
      },
      {
        label: "Old Patients",
        data: [
          ...Array(20)
            .fill(1)
            .map((item) => randomData(0, 10)),
        ],
        backgroundColor: gradient,
        borderColor: "#0075FF",
        tension: 0.5,
        fill: true,
        pointRadius: [5, 5, 5, 5],
        pointBackgroundColor: ["#0075FF", "#0075FF", "#0075FF", "#f0075FFff"],
        pointBorderColor: "#fff",
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
          monthName.toLocaleDateString("default", { month: "short" })
        );
      });
    return labels;
  }

  private getConfigOptionsChart() {
    const me = this;
    const plugins = me.getConfigPluginsChart(); //options.plugins
    return {
      responsive: true,
      plugins,
      interaction: {
        mode: "index",
        intersect: false,
        position: "nearest",
      },
      scales: {
        x: {},
        y: {
          grid: {
            display: true,
          },
        },
      },
    };
  }

  private getConfigPluginsChart() {
    const me = this;
    const title = me.getTitlePluginsChart();
    return {
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: "rectRounded",
        },
      },
      title,
      tooltip: {
        yAlign: "top",
        boxHeight: 25,
        padding: 12,
        displayColors: false,
        bodySpacing: 5,
        callbacks: {
          title: function (context: any) {
            return "";
          },
        },
      },
    };
  }
  private getTitlePluginsChart() {
    return {
      display: true,
      text: "Hospital Survey",
      align: "start",
      padding: {
        top: 10,
        bottom: 10,
      },
      font: {
        weight: "bold",
        size: 26,
      },
      color: "#FFFFFF",
    };
  }
}
