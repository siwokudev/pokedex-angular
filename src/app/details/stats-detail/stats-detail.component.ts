import { Component, Input, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Stats } from '../../shared/interfaces/pokeApi';

@Component({
  selector: 'app-stats-detail',
  standalone: true,
  imports: [BaseChartDirective ],
  templateUrl: './stats-detail.component.html',
  styleUrl: './stats-detail.component.css'
})
export class StatsDetailComponent implements OnChanges{

  @Input() stats : Stats[] = []

  public radarChartStatsOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: false,
    scales: {
      r: {
          min: 0,
          max: 200,
          ticks:{
            stepSize:50
          },
          pointLabels: {
            font:{
              size:12
            }
          }
      }
    },plugins:{
      legend: {
        display : false
      }
    }
  };

  public radarChartEffortOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: false,
    scales: {
      r: {
          min: 0,
          max: 3,
          ticks:{
            stepSize:1
          },
          pointLabels: {
            font:{
              size:12
            }
          }
      }
    },plugins:{
      legend: {
        display : false
      }
    }
  };

  public radarChartLabels: string[] = [];

  public radarChartStatsDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [];
  public radarChartEffortDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [];

  baseTotal : number = 0;
  effortTotal : number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.stats){
      return;
    }

    this.radarChartLabels = this.stats.map((stat : Stats) => stat.stat.name);
    
    let baseStatsData : number[] =  this.stats.map(stat => stat.base_stat);
    this.baseTotal = baseStatsData.reduce((a,b) => a+b,0);

    let effortData : number[] = this.stats.map(stat => stat.effort);
    this.effortTotal = effortData.reduce((a,b) => a+b,0);
    
    this.radarChartStatsDatasets = [
      { data: baseStatsData, 
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        label: "Base", 
        animation: false,
      },
    ];
    
    this.radarChartEffortDatasets = [
      { data: effortData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)', 
        label: "Effort", 
        animation: false,
      },
    ];
  }

}
