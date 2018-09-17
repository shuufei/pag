import { ID, guid } from '@datorama/akita';

export interface Account {
  id: ID;
  twitterId: string;
  name: string;
  imgUrl?: string;
}

export function createAccount({ id, twitterId, name, imgUrl }: Partial<Account>) {
  return {
    id, twitterId, name, imgUrl
  } as Account;
}
