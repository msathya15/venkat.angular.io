import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicCarConfiguratorComponent } from './components/basic-car-configurator/basic-car-configurator.component';
import { AdvancedCarConfiguratorComponent } from './components/advanced-car-configurator/advanced-car-configurator.component';
import { SummaryReportComponent } from './components/summary-report/summary-report.component';
import { ConfigGuard } from './guards/config.guard';
import { SummaryGuard } from './guards/summary.guard';

const routes: Routes = [
  { path: 'model', component: BasicCarConfiguratorComponent },
  { path: 'options', component: AdvancedCarConfiguratorComponent, canActivate: [ConfigGuard]},
  { path: 'summary', component: SummaryReportComponent,canActivate: [SummaryGuard]},
  { path: '', redirectTo: '/model', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
