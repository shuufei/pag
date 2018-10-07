import { Injectable } from '@angular/core';

import { TagsStore } from './tags.store';
import { TagsQuery } from './tags.query';
import { NavTag } from 'src/app/components/molecules/nav-tag/nav-tag.component';

@Injectable({ providedIn: 'root' })
export class TagsService {

  constructor(
    private tagsStore: TagsStore,
    private tagsQuery: TagsQuery
  ) {}

  get() {
  }

  add() {
  }

  setTags(navTags: NavTag[]): void {
    this.tagsStore.setState(state => ({ ...state, navTags }));
  }

  setSelectedTags(tags: string[]): void {
    this.tagsStore.setState(state => ({ ...state, selectedTags: tags }));
  }

  addSelectedTag(tag: string): void {
    let selectedTags: string[] = this.tagsQuery.getSnapshot().selectedTags;
    selectedTags = [ ...selectedTags, tag ];
    selectedTags = selectedTags.filter((selectedTag, i, self) => self.indexOf(selectedTag) === i);
    this.setSelectedTags(selectedTags);
  }

  removeSelectedTag(tag: string): void {
    const selectedTags = this.tagsQuery.getSnapshot().selectedTags.filter(selectedTag => selectedTag !== tag);
    this.setSelectedTags(selectedTags);
  }

  // // mock
  // private getTags(): NavTag[] {
  //   return [
  //     { tag: 'Development', count: 42, selected: false, disable: false },
  //     { tag: 'Design', count: 40, selected: false, disable: false },
  //     { tag: 'Angular', count: 28, selected: false, disable: false },
  //     { tag: 'UI', count: 27, selected: false, disable: false },
  //     { tag: 'Design System', count: 20, selected: false, disable: false },
  //     { tag: 'Service Worker', count: 11, selected: false, disable: false },
  //     { tag: 'Typogpraphy', count: 5, selected: false, disable: false },
  //     { tag: '1Long long to long tag name super long', count: 1, selected: false, disable: false }
  //   ];
  // }

}
