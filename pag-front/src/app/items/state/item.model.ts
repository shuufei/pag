import { ID } from '@datorama/akita';

import { Item } from 'src/app/components/organisms/item/item.component';

export interface Item {
  id: ID;
}

export function createItem({ id, title, comment, url, thumbUrl, labels, star  }: Partial<Item>) {
  return {
    id,
    title,
    comment,
    url,
    thumbUrl,
    labels,
    star
  } as Item;
}
