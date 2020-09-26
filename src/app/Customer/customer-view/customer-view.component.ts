import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/Services/api.model';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  customerId;
  customer: Customer;
  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.customerId = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.customerId);
    this.getCustomerDetails();
  }

  getCustomerDetails() {
    this.apiService.getCustomerDetails(this.customerId)
    .subscribe(data=>{
      console.log(data, "data");
      
    })
  }

}
