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
const currentAccount: Account = {
  name: '@digitalfei',
  imgUrl: 'https://pbs.twimg.com/profile_images/821745021753823233/L_dTDu3C_normal.jpg'
};
const accountData: Account[] = [
  currentAccount,
  { name: '@alphabet', imgUrl: undefined },
  { name: '@poletman', imgUrl: undefined }
];
accountListCardStories.add('default', () => ({
  template: `
    <pag-account-list-card
      [accounts]="accounts"
      [currentAccount]="currentAccount"
    ></pag-account-list-card>
  `,
  props: {
    accounts: accountData,
    currentAccount
  }
}));
accountListCardStories.add('max over', () => {
  const maxOverAccountData = [];
  for (let i = 0; i < MAX_ACCOUNT_LENGTH + 1; i++) {
    maxOverAccountData.push(currentAccount);
  }
  return {
    template: `
      <pag-account-list-card
        [accounts]="accounts"
        [currentAccount]="currentAccount"
      ></pag-account-list-card>
    `,
    props: {
      accounts: maxOverAccountData,
      currentAccount
    }
  };
});
