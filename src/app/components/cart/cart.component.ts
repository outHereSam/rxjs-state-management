import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { Dessert } from '../../interfaces/IDessert';
import { DessertsService } from '../../services/desserts.service';
import { CurrencyPipe } from '@angular/common';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, CurrencyPipe, ConfirmationModalComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.sass',
})
export class CartComponent {
  cartService: CartService = inject(CartService);
  dessertsService: DessertsService = inject(DessertsService);
  modalService: ModalService = inject(ModalService);
  protected dessertList: Dessert[] = [];

  ngOnInit() {
    this.dessertsService.getAllDesserts().subscribe((desserts: Dessert[]) => {
      this.dessertList = desserts;
    });
  }

  getTotalPrice(): number {
    return this.cartService.cartItems.reduce((total, cartItem) => {
      const item = this.dessertList.find((i) => i.name === cartItem.name);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0);
  }
}
