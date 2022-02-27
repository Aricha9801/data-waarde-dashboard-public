import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicenseComponent } from './license/license.component';
import { QualityMetricsWfsComponent } from './quality-metrics-wfs/quality-metrics-wfs.component';
import { QualityMetricsComponent } from './quality-metrics/quality-metrics.component';

const routes: Routes = [
  {path: 'wms', component:QualityMetricsComponent},
  {path:'wfs',component:QualityMetricsWfsComponent},
  {path:'',component:QualityMetricsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
