import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ViewOrdersComponent } from "./orders/components/view-orders/view-orders.component";
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ComponentsComponent } from "./orders/components/components.component";
import { MenuComponent } from './orders/components/menu/menu.component';
import { SharedComponent } from './orders/shared/shared.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ViewOrdersComponent, HttpClientModule, HeaderComponent, FooterComponent, ComponentsComponent , MenuComponent,SharedComponent]
})
export class AppComponent {
  title = 'Fiery_Restaurant';
}
