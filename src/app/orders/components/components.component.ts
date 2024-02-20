import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [RouterOutlet,RouterLink, CommonModule],
  templateUrl: './components.component.html',
  styleUrl: './components.component.css',
})
export class ComponentsComponent {
  foodName = '';
  price = 0;
  shipping = '';
  getOrder(foodname: string, quantity: string) {
    this.foodName = foodname;
    this.price = parseInt(quantity) * 12.5;
    if (this.price >= 500) {
      this.shipping = 'Free Shipping';
    } else {
      this.shipping = '10$ Shipping Fee';
    }
  }
}
