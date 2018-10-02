import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { TagsStore, TagsState } from './tags.store';

@Injectable({ providedIn: 'root' })
export class TagsQuery extends Query<TagsState> {

  constructor(protected store: TagsStore) {
    super(store);
  }

}
