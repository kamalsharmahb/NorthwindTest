import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerViewComponent } from './Customer/customer-view/customer-view.component';
import { CustomerListComponent } from './Customer/customer-list/customer-list.component';
import { OrderListComponent } from './Order/order-list/order-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'customers',
    pathMatch: 'prefix'
  },{
    path: 'customers',
    component: CustomerListComponent
  }, {
    path: 'customer/:id',
    component: CustomerViewComponent
  }, {
    path: 'orders',
    component: OrderListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
