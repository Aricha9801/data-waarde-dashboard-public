import { Component, OnInit } from '@angular/core';
import {SparqlService} from '../sparql.service';
import {Subject} from 'rxjs';
import {CommoninfoBinding } from '../model/binding';

@Component({
  selector: 'app-update-frequency',
  templateUrl: './update-frequency.component.html',
  styleUrls: ['./update-frequency.component.css']
})
export class UpdateFrequencyComponent implements OnInit {
  results$: Subject<CommoninfoBinding>;


  constructor(public sparql: SparqlService) {
    this.results$ = this.sparql.commonInfo$

   }

  ngOnInit(): void {
    this.sparql.getCommoninfo();
  }

}
