import { Component, inject } from '@angular/core';
import { DessertCardComponent } from '../dessert-card/dessert-card.component';
import { DessertsService } from '../../services/desserts.service';
import { Dessert } from '../../interfaces/IDessert';

@Component({
  selector: 'app-dessert-list',
  standalone: true,
  imports: [DessertCardComponent],
  templateUrl: './dessert-list.component.html',
  styleUrl: './dessert-list.component.sass',
})
export class DessertListComponent {
  private dessertsService: DessertsService = inject(DessertsService);
  protected dessertList: Dessert[] = [];

  constructor() {
    // this.dessertsService.getAllDesserts().then((desserts: Dessert[]) => {
    //   this.dessertList = desserts;
    // });
  }

  ngOnInit() {
    this.dessertsService.getAllDesserts().subscribe(
      (data) => (this.dessertList = data),
      (error) => console.error('Error fetching data:', error)
    );
  }
}
