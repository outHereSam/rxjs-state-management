import { Injectable } from '@angular/core';
import { Dessert } from '../interfaces/IDessert';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DessertsService {
  url = `../../assets/data.json`;

  constructor(private http: HttpClient) {}

  // async getAllDesserts(): Promise<Dessert[]> {
  //   const data = await fetch(this.url);
  //   return (await data.json()) ?? [];
  // }

  getAllDesserts(): Observable<any> {
    return this.http.get(this.url);
  }
}
