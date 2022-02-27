import { Component, OnInit } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
//import { scaleOrdinal } from 'd3';
import {SparqlService} from '../sparql.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-api-hits-wfs',
  templateUrl: './api-hits-wfs.component.html',
  styleUrls: ['./api-hits-wfs.component.css']
})
export class ApiHitsWfsComponent implements OnInit {
  results$: Subject<any>;
  view: [number,number] = [330, 320];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Time';
  yAxisLabel: string = 'Value';
  timeline: boolean = true;

  colorScheme:string|Color={
    name: "exampleName",
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#b4520c','','#b547b1c','#ab2218'] };

  constructor(public sparql: SparqlService) {
    this.results$ = this.sparql.apihitsWfs$

   }

  ngOnInit(): void {
    this.sparql.getApihits();
    
  }

}
