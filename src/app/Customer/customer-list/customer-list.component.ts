import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { Customer } from 'src/app/Services/api.model';
import { Router } from '@angular/router';
import { ClrDatagridStateInterface } from '@clr/angular';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];
  total: number;
  loading: boolean = true;
  perPageArr = [10, 20, 50, 100];
  customersFilter: Customer;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.customersFilter = new Customer();
  }

  onRedirectCustomer(customerId) {
    this.router.navigate([`customer/${customerId}`])
  }

  refresh(state: ClrDatagridStateInterface) {
    this.cdRef.detectChanges();
    this.apiService.getAllCustomers(state)
      .subscribe(data => {
        this.loading = false;
        this.customers = data.results;
        this.total = data.total;
        this.cdRef.detectChanges();
      })
  }

}
