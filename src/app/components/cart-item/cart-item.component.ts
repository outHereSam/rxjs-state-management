import { Component, inject, Input } from '@angular/core';
import { CartItem, CartService } from '../../services/cart.service';
import { DessertsService } from '../../services/desserts.service';
import { Dessert } from '../../interfaces/IDessert';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.sass',
})
export class CartItemComponent {
  @Input() cartItemId = '';
  @Input() isCartItem = true;
  item: Dessert = {
    image: {
      thumbnail: '',
      mobile: '',
      tablet: '',
      desktop: '',
    },
    name: '',
    category: '',
    price: 0,
  };

  cartService: CartService = inject(CartService);
  dessertsService = inject(DessertsService);

  ngOnInit(): void {
    this.dessertsService.getAllDesserts().subscribe((desserts) => {
      this.item = desserts.find(
        (dessert: { name: string }) => dessert.name === this.cartItemId
      ) || {
        image: {
          thumbnail: '',
          mobile: '',
          tablet: '',
          desktop: '',
        },
        name: '',
        category: '',
        price: 0,
      };
    });
  }
}
