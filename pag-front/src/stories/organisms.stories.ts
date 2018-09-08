import { storiesOf, moduleMetadata } from '@storybook/angular';
import { text, number, select, withKnobs } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';

import { AtomsModule } from 'src/app/components/atoms/atoms.module';
import { MoleculesModule } from 'src/app/components/molecules/molecules.module';
import { OrganismsModule } from 'src/app/components/organisms/organisms.module';
import { Account } from 'src/app/components/molecules/account-name/account-name.component';
import { MAX_ACCOUNT_LENGTH } from 'src/app/components/organisms/account-list-card/account-list-card.component';

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

