import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';
import { CartService } from './cart.service';

describe('ModalService', () => {
  let service: ModalService;
  let cartServiceSpy: jasmine.SpyObj<CartService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CartService', ['clearCart']);
    TestBed.configureTestingModule({
      providers: [ModalService, { provide: CartService, useValue: spy }],
    });
    service = TestBed.inject(ModalService);
    cartServiceSpy = TestBed.inject(CartService) as jasmine.SpyObj<CartService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open modal', () => {
    service.openModal();
    expect(service.isOpened).toBe(true);
    expect(document.body.classList.contains('no-scroll')).toBe(true);
  });

  it('should close modal', () => {
    service.closeModal();
    expect(service.isOpened).toBe(false);
    expect(cartServiceSpy.clearCart).toHaveBeenCalled();
    expect(document.body.classList.contains('no-scroll')).toBe(false);
  });
});
