import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DessertListComponent } from './components/dessert-list/dessert-list.component';
import { CartComponent } from './components/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DessertListComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'shopping-cart';
}
