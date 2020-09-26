import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { Order } from 'src/app/Services/api.model';
import { ClrDatagridStateInterface } from '@clr/angular';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders: Order[];
  total: number;
  loading: boolean = true;
  perPageArr = [10, 20, 50, 100];
  ordersFilter: Order;
  
  constructor(
    private apiService: ApiService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {}
  
  refresh(state: ClrDatagridStateInterface) {
    this.cdRef.detectChanges();
    this.apiService.getAllOrders(state)
      .subscribe(data => {
        this.loading = false;
        this.orders = data.results;
        this.total = data.total;
        this.cdRef.detectChanges();
      })
  }
}
