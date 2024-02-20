import { Component } from '@angular/core';
import { Order } from '../../orders.model';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-orders',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink],
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.css',
})
export class ViewOrdersComponent {
  // orders!: Order[];
  private apiUrl = 'http://localhost:3000/orders';
  orderData: any;
  constructor(private http: HttpClient) {}

  getOrders() {
    this.http
      .get('http://localhost:3000/orders')
      .subscribe((res) => (this.orderData = res));
    console.log(this.orderData);
  }

  ngOnInit() {
    this.http
      .get('http://localhost:3000/orders')
      .subscribe((res) => (this.orderData = res));
  }
}
