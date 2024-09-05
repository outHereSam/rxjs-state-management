import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isOpened: boolean = false;

  constructor(private cartService: CartService) {}

  openModal() {
    this.isOpened = true;
    document.body.classList.add('no-scroll');
  }

  closeModal() {
    this.isOpened = false;
    this.cartService.clearCart();
    document.body.classList.remove('no-scroll');
  }
}
