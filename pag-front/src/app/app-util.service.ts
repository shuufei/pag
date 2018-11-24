import { Injectable } from '@angular/core';

import { Item } from 'src/app/components/organisms/item/item.component';
import { NavTag } from 'src/app/components/molecules/nav-tag/nav-tag.component';
import { TagsQuery, TagsService, TagsState } from 'src/app/store/tags/state';

@Injectable({
  providedIn: 'root'
})
export class AppUtilService {

  constructor(
    private tagsService: TagsService,
    private tagsQuery: TagsQuery
  ) { }

  generateNavTagsFromItems(items: Item[]): NavTag[] {
    const navTags: NavTag[] = [];
    const tagCount: { [tag: string]: number; } = {};
    items.forEach(item => {
      item.tags.forEach(tag => {
        let count = tagCount[tag.label];
        if (count) {
          count++;
          tagCount[tag.label] = count;
        } else {
          tagCount[tag.label] = 1;
        }
      });
    });
    for (const key of Object.keys(tagCount)) {
      navTags.push({
        tag: key,
        count: tagCount[key]
      });
    }
    return navTags;
  }

  sortNavTags(navTags: NavTag[]): NavTag[] {
    const arr = [ ...navTags ];
    const selected: NavTag[] = this.tagsQuery.getSnapshot().selectedTags.map(tag => arr.find(t => t.tag === tag));
    const notSelected = arr.filter(navtag => !navtag.selected);
    const orderByCountDesc = (navtag1: NavTag, navtag2: NavTag) => {
      if (navtag1.count > navtag2.count) { return -1; }
      if (navtag1.count < navtag2.count) { return 1; }
      return 0;
    };
    notSelected.sort(orderByCountDesc);
    return [ ...selected, ...notSelected ];
  }

  mergeMasterNavTag(existNavTags: NavTag[]): NavTag[] {
    const tagsSnapshot: TagsState = { ...this.tagsQuery.getSnapshot() };
    const newNavTags: NavTag[] = [];
    tagsSnapshot.navTags.forEach(navTag => {
      const exist = existNavTags.find(t => t.tag === navTag.tag);
      if (!exist) {  // filter後のitemと紐づかないtagの場合は、disableにする
        newNavTags.push({
          ...navTag,
          selected: false,
          disable: true,
          count: 0
        });
        return;
      } else {
        const count = exist.count;
        const selected = tagsSnapshot.selectedTags.find(t => t === navTag.tag);
        if (selected) {  // 選択済みのtagの場合は、selectedにする
          newNavTags.push({
            ...navTag,
            selected: true,
            disable: false,
            count
          });
          return;
        }
        newNavTags.push({
          ...navTag,
          selected: false,
          disable: false,
          count
        });
      }
    });
    // 新しく追加されたtagを追加する
    existNavTags.forEach(navTag => {
      const exist = tagsSnapshot.navTags.find(t => t.tag === navTag.tag);
      if (!exist) {
        let disable = false;
        if (0 < tagsSnapshot.selectedTags.length) {
          disable = true;
        }
        newNavTags.push({
          ...navTag,
          selected: false,
          disable
        });
      }
    });
    return newNavTags;
  }

  sortItemsByCreatedAt(items: Item[], asc: boolean): Item[] {
    const sortedItems = [ ...items ];
    sortedItems.sort((item1, item2) => {
      if (item1.createdAt.valueOf() < item2.createdAt.valueOf()) { return asc ? 1 : -1; }
      if (item1.createdAt.valueOf() > item2.createdAt.valueOf()) { return asc ? -1 : 1; }
      return 0;
    });
    return sortedItems;
  }

  sleepByPromise(ms: number): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
}
