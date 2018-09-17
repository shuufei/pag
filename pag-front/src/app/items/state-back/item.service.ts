import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { ItemStore } from './item.store';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ItemService {

  constructor(private itemStore: ItemStore,
              private http: HttpClient) {
  }

  get() {
    // this.http.get().subscribe((entities: ServerResponse) => {
      // this.itemStore.set(entities);
    // });
  }

  add() {
    // this.http.post().subscribe((entity: ServerResponse) => {
      // this.itemStore.add(entity);
    // });
  }

}
