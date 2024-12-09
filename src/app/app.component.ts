import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./common/navbar/navbar.component";
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ProductListComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-reservation-app';
}
