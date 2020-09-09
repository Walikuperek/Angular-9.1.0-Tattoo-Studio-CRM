import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as Chart  from 'chart.js';

@Component({
  selector: 'app-client-orders-regularity-chart',
  templateUrl: './client-orders-regularity-chart.component.html',
  styleUrls: ['./client-orders-regularity-chart.component.scss']
})
export class ClientOrdersRegularityChartComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit(): void {
    this.runChart();
  }
  
  runChart() {
    
    const ctx = document.querySelector<HTMLCanvasElement>('canvas').getContext('2d');
    Chart.defaults.global.defaultFontColor = '#eef2f7';
    Chart.defaults.global.legend.display = false;
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'Tattoo PLN',
          data: [0, 400, 500, 0, 0, 0, 600, 0, 0, 0, 0, 0, 0],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          labels: {
            // This more specific font property overrides the global property
            fontColor: 'red'
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
