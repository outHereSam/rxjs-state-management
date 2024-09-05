import { Component, inject, Input } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartService } from '../../services/cart.service';
import { DessertsService } from '../../services/desserts.service';
import { Dessert } from '../../interfaces/IDessert';
import { CurrencyPipe } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  imports: [CartItemComponent, CurrencyPipe],
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.sass',
})
export class ConfirmationModalComponent {
  cartService: CartService = inject(CartService);
  dessertsService: DessertsService = inject(DessertsService);
  modalService: ModalService = inject(ModalService);
  protected dessertList: Dessert[] = [];

  ngOnInit() {
    // this.dessertsService.getAllDesserts().then((desserts: Dessert[]) => {
    //   this.dessertList = desserts;
    // });
    this.dessertsService.getAllDesserts().subscribe(
      (data) => (this.dessertList = data),
      (error) => console.error('Error fetching data:', error)
    );
  }

  getTotalPrice(): number {
    return this.cartService.cartItems.reduce((total, cartItem) => {
      const item = this.dessertList.find((i) => i.name === cartItem.name);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0);
  }

  startNewOrder() {
    this.modalService.closeModal();
  }
}
