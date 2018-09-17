import { ID, guid } from '@datorama/akita';

export interface Account {
  id: ID;
  // twitterId: string;
  name: string;
  imgUrl?: string;
}

export function createAccount({ id, name, imgUrl }: Partial<Account>) {
  return {
    id, name, imgUrl
  } as Account;
}
