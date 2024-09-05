import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with an empty cart', () => {
    expect(service.cartItems.length).toBe(0);
    expect(service.cartQuantity).toBe(0);
  });

  it('should add an item to the cart', () => {
    service.increaseCartQuantity('1');
    expect(service.cartItems.length).toBe(1);
    expect(service.getItemQuantity('1')).toBe(1);
    expect(service.cartQuantity).toBe(1);
  });

  it('should increase quantity of existing item', () => {
    service.increaseCartQuantity('1');
    service.increaseCartQuantity('1');
    expect(service.cartItems.length).toBe(1);
    expect(service.getItemQuantity('1')).toBe(2);
    expect(service.cartQuantity).toBe(2);
  });

  it('should decrease quantity of existing item', () => {
    service.increaseCartQuantity('1');
    service.increaseCartQuantity('1');
    service.decreaseCartQuantity('1');
    expect(service.cartItems.length).toBe(1);
    expect(service.getItemQuantity('1')).toBe(1);
    expect(service.cartQuantity).toBe(1);
  });

  it('should remove item when quantity becomes 0', () => {
    service.increaseCartQuantity('1');
    service.decreaseCartQuantity('1');
    expect(service.cartItems.length).toBe(0);
    expect(service.getItemQuantity('1')).toBe(0);
    expect(service.cartQuantity).toBe(0);
  });

  it('should remove item from cart', () => {
    service.increaseCartQuantity('1');
    service.removeFromCart('1');
    expect(service.cartItems.length).toBe(0);
    expect(service.getItemQuantity('1')).toBe(0);
    expect(service.cartQuantity).toBe(0);
  });

  it('should clear cart', () => {
    service.increaseCartQuantity('1');
    service.increaseCartQuantity('2');
    service.clearCart();
    expect(service.cartItems.length).toBe(0);
    expect(service.cartQuantity).toBe(0);
  });
});
