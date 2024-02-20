// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Order } from './orders.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class OrderService {
//   private apiUrl = 'http://localhost:3000/orders';
//   orderData: any;
//   constructor(private http: HttpClient) {}

//   // getOrders(): Observable<Order[]> {
//   //   return this.http.get<Order[]>(this.apiUrl);
//   // }
//   getOrders(){
//     this.http
//       .get('http://localhost:3000/orders')
//       .subscribe((res) => (this.orderData = res));
//   }

//   // getOrders(): Observable<Order[]> {
//   //   return this.http.get<Order[]>(this.apiUrl);
//   }
//   // saveOrder(orderNo: string,
//   //   contactName: string,
//   //   orderDate: string,    
//   //   orderTotal: number,
//   //   taxTotal: number,
//   //   grandTotal: number) {
//   //   let order1 = new Order(orderNo, contactName, orderDate, orderTotal,taxTotal,grandTotal);

//   //   this.http
//   //     .post('http://localhost:3000/orders', order1)
//   //     .subscribe((d) => (this.orderData = d));
//   //   alert('data added sucessfully');
//   // }
//   // ngOnInit() {
//   //   this.http
//   //     .get('http://localhost:3000/orders')
//   //     .subscribe((res) => (this.orderData = res));
//   // }
// }
