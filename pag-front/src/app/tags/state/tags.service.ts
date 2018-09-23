import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';

import { TagsStore } from './tags.store';
import { NavTag } from 'src/app/components/molecules/nav-tag/nav-tag.component';
import { Item } from 'src/app/components/organisms/item/item.component';

@Injectable({ providedIn: 'root' })
export class TagsService {

  constructor(
    private tagsStore: TagsStore
  ) {}

  get() {
  }

  add() {
  }

  setTags(navTags: NavTag[]): void {
    navTags = this.getTags();
    this.tagsStore.setState(state => ({ ...state, navTags }));
  }

  setSelectedTags(tags: string[]): void {
    this.tagsStore.setState(state => ({ ...state, selectedTags: tags }));
  }

  // mock
  private getTags(): NavTag[] {
    return [
      { tag: 'Development', count: 42, selected: false, disable: false },
      { tag: 'Design', count: 40, selected: false, disable: false },
      { tag: 'Angular', count: 28, selected: false, disable: false },
      { tag: 'UI', count: 27, selected: false, disable: false },
      { tag: 'Design System', count: 20, selected: false, disable: false },
      { tag: 'Service Worker', count: 11, selected: false, disable: false },
      { tag: 'Typogpraphy', count: 5, selected: false, disable: false },
      { tag: '1Long long to long tag name super long', count: 1, selected: false, disable: false },
      { tag: '1Development', count: 42, selected: false, disable: false },
      { tag: '1Design', count: 40, selected: false, disable: false },
      { tag: '1Angular', count: 28, selected: false, disable: false },
      { tag: '1UI', count: 27, selected: false, disable: false },
      { tag: '1Design System', count: 20, selected: false, disable: false },
      { tag: '1Service Worker', count: 11, selected: false, disable: false },
      { tag: '1Typogpraphy', count: 5, selected: false, disable: false },
      { tag: '2Development', count: 42, selected: false, disable: false },
      { tag: '2Design', count: 40, selected: false, disable: false },
      { tag: '2Angular', count: 28, selected: false, disable: false },
      { tag: '2UI', count: 27, selected: false, disable: false },
      { tag: '2Design System', count: 20, selected: false, disable: false },
      { tag: '2Service Worker', count: 11, selected: false, disable: false },
      { tag: '2Typogpraphy', count: 5, selected: false, disable: false }
    ];
  }

}
