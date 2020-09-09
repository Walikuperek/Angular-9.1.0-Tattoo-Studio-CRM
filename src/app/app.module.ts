import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';

import { LeftFixedNavComponent } from './components/left-fixed-nav/left-fixed-nav.component';
import { ProductsComponent } from './components/products/products.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientOrdersRegularityChartComponent } from './components/customers/client-orders-regularity-chart/client-orders-regularity-chart.component';
import { ClientDataComponent } from './components/customers/client-data/client-data.component';
import { ClientRevenueComponent } from './components/customers/client-revenue/client-revenue.component';
import { ClientUsedItemsComponent } from './components/customers/client-used-items/client-used-items.component';
import { LocationPathComponent } from './location-path/location-path.component';
import { ClientsListComponent } from './components/customers/clients-list/clients-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftFixedNavComponent,
    ProductsComponent,
    CustomersComponent,
    DashboardComponent,
    ClientOrdersRegularityChartComponent,
    ClientDataComponent,
    ClientRevenueComponent,
    ClientUsedItemsComponent,
    LocationPathComponent,
    ClientsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(allIcons),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
