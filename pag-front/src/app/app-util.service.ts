import { Injectable } from '@angular/core';

import { Item } from 'src/app/components/organisms/item/item.component';
import { NavTag } from 'src/app/components/molecules/nav-tag/nav-tag.component';

@Injectable({
  providedIn: 'root'
})
export class AppUtilService {

  constructor() { }

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
    const sorted = [ ...navTags ];
    sorted.sort((navtag1, navtag2) => {
      if (navtag1.count > navtag2.count) { return -1; }
      if (navtag1.count < navtag2.count) { return 1; }
      return 0;
    });
    return sorted;
  }
}
