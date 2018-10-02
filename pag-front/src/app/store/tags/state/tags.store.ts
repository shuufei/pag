import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { NavTag } from 'src/app/components/molecules/nav-tag/nav-tag.component';

export interface TagsState {
  navTags: NavTag[];
  selectedTags: string[];
}

export function createInitialState(): TagsState {
  return {
    navTags: [],
    selectedTags: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'tags' })
export class TagsStore extends Store<TagsState> {

  constructor() {
    super(createInitialState());
  }

}

