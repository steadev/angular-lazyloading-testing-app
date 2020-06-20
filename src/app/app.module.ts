import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';

@NgModule({
  declarations: [AppComponent],

  // 초기에 전부 로드
  // imports: [BrowserModule, AppRoutingModule, CustomersModule, OrdersModule],

  // 초기에 기능 모듈을 제외하고 로드
  imports: [BrowserModule, AppRoutingModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
