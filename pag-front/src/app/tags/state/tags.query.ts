import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { TagsStore, TagState } from './tags.store';

@Injectable({ providedIn: 'root' })
export class TagsQuery extends Query<TagState> {

  constructor(protected store: TagsStore) {
    super(store);
  }

}
