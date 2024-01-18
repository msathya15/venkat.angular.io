import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicCarConfiguratorComponent } from './components/basic-car-configurator/basic-car-configurator.component';
import { AdvancedCarConfiguratorComponent } from './components/advanced-car-configurator/advanced-car-configurator.component';
import { SummaryReportComponent } from './components/summary-report/summary-report.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicCarConfiguratorComponent,
    AdvancedCarConfiguratorComponent,
    SummaryReportComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
