import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { TagsStore } from './tags.store';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TagsService {

  constructor(private tagsStore: TagsStore,
              private http: HttpClient) {
  }

  get() {
    // this.http.get().subscribe((entities: ServerResponse) => {
      // this.tagsStore.set(entities);
    // });
  }

  add() {
    // this.http.post().subscribe((entity: ServerResponse) => {
      // this.tagsStore.add(entity);
    // });
  }

}
