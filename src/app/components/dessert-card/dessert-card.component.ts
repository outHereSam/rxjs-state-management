import { Component, inject, Input } from '@angular/core';
import { Dessert } from '../../interfaces/IDessert';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-dessert-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './dessert-card.component.html',
  styleUrl: './dessert-card.component.sass',
})
export class DessertCardComponent {
  cartService: CartService = inject(CartService);

  @Input() dessertData: Dessert = {
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

  cartBtnClicked = false;

  increaseItemCartQuantity(id: string) {
    this.cartService.increaseCartQuantity(id);
  }

  decreaseItemCartQuantity(id: string) {
    if (this.cartService.getItemQuantity(id) > 0) {
      this.cartService.decreaseCartQuantity(id);
    } else if (this.cartService.getItemQuantity(id) < 1) {
      this.cartBtnClicked = false;
    }
  }

  addToCart(id: string) {
    this.cartBtnClicked = true;
    this.cartService.increaseCartQuantity(id);
  }
}
