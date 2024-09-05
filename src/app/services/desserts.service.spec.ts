import { DessertsService } from './desserts.service';

describe('DessertsService', () => {
  let service: DessertsService;

  beforeEach(() => {
    service = new DessertsService();
  });

  it('should fetch Dessert List with 9 dessert items', (done: DoneFn) => {
    service.getAllDesserts().then((desserts) => {
      expect(desserts.length).toBe(9);
      done();
    });
  });
});
