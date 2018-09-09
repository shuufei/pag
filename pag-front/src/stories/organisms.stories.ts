import { storiesOf, moduleMetadata } from '@storybook/angular';
import { text, number, select, boolean, withKnobs } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';

import { AtomsModule } from 'src/app/components/atoms/atoms.module';
import { MoleculesModule } from 'src/app/components/molecules/molecules.module';
import { OrganismsModule } from 'src/app/components/organisms/organisms.module';
import { Account } from 'src/app/components/molecules/account-name/account-name.component';
import { MAX_ACCOUNT_LENGTH } from 'src/app/components/organisms/account-list-card/account-list-card.component';
import { Item } from 'src/app/components/organisms/item/item.component';

const metadata = {
  declarations: [],
  imports: [
    AtomsModule,
    MoleculesModule,
    OrganismsModule
  ]
};
const storyCategory = 'Organisms';

const accountListCardStories = storiesOf(`${storyCategory}/Account List Card`, module);
accountListCardStories.addDecorator(withKnobs);
accountListCardStories.addDecorator(moduleMetadata(metadata));
const accountListCardTemplate = `
<pag-account-list-card
  [accounts]="accounts"
  [currentAccount]="currentAccount"
  [accountClickEvent]="accountClickEvent"
  [addClickEvent]="addClickEvent"
></pag-account-list-card>
`;
const currentAccount: Account = {
  id: 'id-1',
  name: '@digitalfei',
  imgUrl: 'https://pbs.twimg.com/profile_images/821745021753823233/L_dTDu3C_normal.jpg'
};
const accountData: Account[] = [
  currentAccount,
  { id: 'id-1', name: '@alphabet', imgUrl: undefined },
  { id: 'id-2', name: '@poletman', imgUrl: undefined }
];
accountListCardStories.add('default', () => ({
  template: accountListCardTemplate,
  props: {
    accounts: accountData,
    currentAccount,
    accountClickEvent: action('Click Account'),
    addClickEvent: action('Click Add')
  }
}));
accountListCardStories.add('max over', () => {
  const maxOverAccountData = [];
  for (let i = 0; i < MAX_ACCOUNT_LENGTH + 1; i++) {
    maxOverAccountData.push(currentAccount);
  }
  return {
    template: accountListCardTemplate,
    props: {
      accounts: maxOverAccountData,
      currentAccount,
      accountClickEvent: action('Click Account'),
      addClickEvent: action('Click Add')
    }
  };
});


const itemStories = storiesOf(`${storyCategory}/Item`, module);
itemStories.addDecorator(withKnobs);
itemStories.addDecorator(moduleMetadata(metadata));
const itemTemplate = `
<div style="padding:20px; background:#f0f0f0; width:700px;">
  <pag-item
    [id]="id" [title]="title" [comment]="comment" [thumbUrl]="thumbUrl" [url]="url" [labels]="labels" [star]="star"
    [clickEvent]="clickEvent" [starClickEvent]="starClickEvent"
  >
  </pag-item>
</div>
`;
itemStories.add('default', () => ({
  template: itemTemplate,
  props: {
    id: 1,
    title: text('Title', 'Angularの状態管理設計'),
    comment: text('Comment', 'RxJSやAkitaなどの活用法'),
    thumbUrl: text('thumb URL', 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png'),
    url: text('URL', 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png'),
    labels: [
      { label: 'Development', active: false },
      { label: 'Angular', active: false }
    ],
    star: boolean('Star', false),
    clickEvent: action('Clicked Item'),
    starClickEvent: action('Clicked Star')
  }
}));
itemStories.add('long body', () => ({
  template: itemTemplate,
  props: {
    id: 1,
    title: text('Title', 'Angularの状態管理設計Angularの状態管理設計Angularの状態管理設計Angularの状態管理設計Angularの状態管理設計'),
    comment: text('Comment', 'RxJSやAkitaなどの活用法RxJSやAkitaなどの活用法RxJSやAkitaなどの活用法RxJSやAkitaなどの活用法'),
    thumbUrl: text('thumb URL', 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png'),
    url: text('URL', 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png'),
    labels: [
      { label: 'Development', active: false },
      { label: 'Angular', active: false },
      { label: 'Development', active: false },
      { label: 'Angular', active: false },
      { label: 'Development', active: false },
      { label: 'Angular', active: false },
      { label: 'Development', active: false },
      { label: 'Angular', active: false }
    ],
    star: boolean('Star', false),
    clickEvent: action('Clicked Item'),
    starClickEvent: action('Clicked Star')
  }
}));
itemStories.add('include active tag', () => ({
  template: itemTemplate,
  props: {
    id: 1,
    title: text('Title', 'Angularの状態管理設計'),
    comment: text('Comment', 'RxJSやAkitaなどの活用法'),
    thumbUrl: text('Thumb URL', 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png'),
    url: text('URL', 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png'),
    labels: [
      { label: 'Development', active: true },
      { label: 'Angular', active: false }
    ],
    star: boolean('Star', false),
    clickEvent: action('Clicked Item'),
    starClickEvent: action('Clicked Star')
  }
}));
itemStories.add('star item', () => ({
  template: itemTemplate,
  props: {
    id: 1,
    title: text('Title', 'Angularの状態管理設計'),
    comment: text('Comment', 'RxJSやAkitaなどの活用法'),
    thumbUrl: text('thumb URL', 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png'),
    url: text('URL', 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png'),
    labels: [
      { label: 'Development', active: false },
      { label: 'Angular', active: false }
    ],
    star: boolean('Star', true),
    clickEvent: action('Clicked Item'),
    starClickEvent: action('Clicked Star')
  }
}));
