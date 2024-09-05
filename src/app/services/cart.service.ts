import { Injectable } from '@angular/core';

export interface CartItem {
  name: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: CartItem[] = [];

  constructor() {
    const localStorageData = localStorage.getItem('cartItems');
    if (localStorageData) {
      this.cartItems = JSON.parse(localStorageData) as CartItem[];
      console.log('Local Storage Data: ', localStorageData);
    }
  }

  get cartQuantity() {
    return this.cartItems.reduce(
      (quantity, item) => item.quantity + quantity,
      0
    );
  }

  getItemQuantity(name: string) {
    const item = this.cartItems.find((item) => item.name === name);

    return item ? item.quantity : 0;
  }

  increaseCartQuantity(name: string) {
    // Find the item in the cartItems array, if it's there increase by 1
    // if not, add it and make the quantity 1
    const item = this.cartItems.find((item) => item.name === name);

    if (item == null) {
      // the item doesn't exists, add it
      this.cartItems.push({ name, quantity: 1 });
    } else {
      // the item exists, increase the quantity
      item.quantity += 1;
      // console.log(this.cartQuantity);
    }

    // Save updated cart data to localStorage
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  decreaseCartQuantity(name: string) {
    // Find the item in the cartItems array, if it's there decrease by 1
    // if not, add it and make the quantity 1
    // Find the index of the item in the cartItems array
    const itemIndex = this.cartItems.findIndex((item) => item.name === name);

    if (itemIndex !== -1) {
      const item = this.cartItems[itemIndex];

      if (item.quantity === 1) {
        // If the quantity is 1, remove the item from the cart
        this.cartItems.splice(itemIndex, 1);
      } else {
        // Otherwise, decrease the quantity by 1
        item.quantity -= 1;

        // console.log(this.cartQuantity);
      }

      // Save updated cart data to localStorage
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  }

  removeFromCart(name: string) {
    this.cartItems = this.cartItems.filter((item) => item.name !== name);
  }

  clearCart() {
    this.cartItems = [];
    localStorage.setItem('cartItems', '[]');
  }
}
