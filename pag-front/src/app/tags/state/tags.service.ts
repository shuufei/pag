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
    const tmpNavTags: NavTag[] = this.getTags();
    this.tagsStore.setState(state => ({ ...state, tmpNavTags }));
  }

  setSelectedTags(tags: string[]): void {
    this.tagsStore.setState(state => ({ ...state, selectedTags: tags }));
  }

  // mock
  private getTags(): NavTag[] {
    return [
      { tag: 'Development', count: 42 },
      { tag: 'Design', count: 40 },
      { tag: 'Angular', count: 28 },
      { tag: 'UI', count: 27 },
      { tag: 'Design System', count: 20 },
      { tag: 'Service Worker', count: 11 },
      { tag: 'Typogpraphy', count: 5 },
      { tag: 'Long long to long tag name super long', count: 1 }
    ];
  }

}
