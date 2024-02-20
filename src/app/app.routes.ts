import { Routes } from '@angular/router';
import { ViewOrdersComponent } from './orders/components/view-orders/view-orders.component';
import { ComponentsComponent } from './orders/components/components.component';
import { SharedComponent } from './orders/shared/shared.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './orders/components/menu/menu.component';
import path from 'path';

export const routes: Routes = [
  {path:'header', component: HeaderComponent},
   {path:'menu', component: MenuComponent},
  { path: 'orders', component: ViewOrdersComponent },
  { path: 'form', component: ComponentsComponent },
  { path: 'home', component: SharedComponent },
  { path: '', component: SharedComponent },
];
