import { Component, OnInit } from '@angular/core';
import { MeasurementBinding,CommoninfoBinding } from './../model/binding';
import {SparqlService} from '../sparql.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-quality-metrics-wfs',
  templateUrl: './quality-metrics-wfs.component.html',
  styleUrls: ['./quality-metrics-wfs.component.css']
})
export class QualityMetricsWfsComponent implements OnInit {
  mWfsResult$: Subject<MeasurementBinding>;
  commoninfoResult$: Subject<CommoninfoBinding>;

  constructor(public sparql: SparqlService) {
    this.mWfsResult$ = this.sparql.measurementWfs$;
    this.commoninfoResult$=this.sparql.commonInfo$;
   }

  ngOnInit(): void {
    this.sparql.getMeasurement();
    this.sparql.getCommoninfo();
  }

}
