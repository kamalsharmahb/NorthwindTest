export class DataTablesResponse<T> {
  results: T[];
  total: number;
  offset: number;
}

export class Customer {
  address: string;
  city: string;
  companyName: string;
  contactName: string;
  contactTitle: string;
  country: string;
  fax: string;
  id: string;
  phone: string;
  postalCode: string;
}

export class Order {
  customerId: string;
  employeeId: number;
  freight: number;
  id: number;
  orderDate: string;
  requiredDate: string;
  shipAddress: string;
  shipCity: string;
  shipCountry: string;
  shipName: string;
  shipPostalCode: string;
  shipVia: number;
  shippedDate: string;
}