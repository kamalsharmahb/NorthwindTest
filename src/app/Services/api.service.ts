import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DataTablesResponse, Customer, Order } from './api.model';
import { ClrDatagridStateInterface } from '@clr/angular';

const BASE_API_URL = environment.baseApiURL

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public calculateOrderBy(params: ClrDatagridStateInterface) {
    if (params.sort) {
      if (params.sort.reverse) {
        return `&orderBy=${params.sort.by}`;
      } else {
        return `&OrderByDesc=${params.sort.by}`;
      }
    }
    return '';
  }

  public calculateFilterForCustomer(params: ClrDatagridStateInterface) {
    let queryParams = '';
    if (params.filters && params.filters.length > 0) {
      params.filters.forEach(f => {
        queryParams += `&${f.property}Contains=${f.value}`;
      })
    }
    return queryParams;
  }

  public getAllCustomers(params: ClrDatagridStateInterface): Observable<DataTablesResponse<Customer>> {
    let queryParams = '';
    queryParams += this.calculateOrderBy(params);
    queryParams += this.calculateFilterForCustomer(params);

    return this.http.get<DataTablesResponse<Customer>>(
      BASE_API_URL + `QueryCustomers?include=Total&take=${params.page.size}&skip=${params.page.current - 1}` + queryParams
    )
  }

  public getAllOrders(params): Observable<DataTablesResponse<Order>> {
    let queryParams = '';
    queryParams += this.calculateOrderBy(params);
    queryParams += this.calculateFilterForCustomer(params);

    return this.http.get<DataTablesResponse<Order>>(
      BASE_API_URL + `QueryOrders?include=Total&take=${params.page.size}&skip=${params.page.current - 1}&&jsconfig=DateHandler:ISO8601DateOnly,TimeSpanHandler:StandardFormat` + queryParams
    )
  }

  public getCustomerDetails(customerId) {
    return this.http.post<Customer>(
      BASE_API_URL + `QueryCustomers/${customerId}`,
      { id: customerId }
    )
  }
}
