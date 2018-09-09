import { storiesOf, moduleMetadata } from '@storybook/angular';
import { text, select, withKnobs } from '@storybook/addon-knobs/angular';
import * as uuid from 'uuid/v4';

import { AtomsModule } from 'src/app/components/atoms/atoms.module';
import * as txtValues from 'src/app/components/atoms/txt/txt-values';
import * as iconValues from 'src/app/components/atoms/icon/icon-values';

const metadata = {
  declarations: [],
  imports: [
    AtomsModule
  ]
};
const storyCategory = 'Atoms';

const txtStories = storiesOf(`${storyCategory}/Txt`, module);
txtStories.addDecorator(withKnobs);
txtStories.addDecorator(moduleMetadata(metadata));
txtStories.add('default', () => ({
  template: '<pag-txt [text]="text"></pag-txt>',
  props: {
    text: 'Default text.'
  }
}));
txtStories.add('custom', () => {
  return {
    template: '<pag-txt [text]="text" [size]="size" [weight]="weight" [color]="color"></pag-txt>',
    props: {
      text: text('Text', 'Custom text.'),
      size: select('Size', txtValues.size, txtValues.size.m),
      weight: select('Weight', txtValues.weight, txtValues.weight.regular),
      color: select('Color', txtValues.color, txtValues.color.black)
    }
  };
});

const labelStories = storiesOf(`${storyCategory}/Label`, module);
labelStories.addDecorator(withKnobs);
labelStories.addDecorator(moduleMetadata(metadata));
labelStories.add('active', () => ({
  template: `<pag-label [label]="label" [active]="active"></pag-label>`,
  props: {
    label: text('Label', 'design'),
    active: true
  }
}));
labelStories.add('deactive', () => ({
  template: `<pag-label [label]="label" [active]="active"></pag-label>`,
  props: {
    label: text('Label', 'development'),
    active: false
  }
}));

const thumbStories = storiesOf(`${storyCategory}/Thumbnail`, module);
thumbStories.addDecorator(withKnobs);
thumbStories.addDecorator(moduleMetadata(metadata));
thumbStories.add('default', () => ({
  template: `
    <div style="height:200px; width:200px;">
      <pag-thumbnail [url]="url"></pag-thumbnail>
    </div>
  `,
  props: {
    url: text('URL', 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png')
  }
}));
thumbStories.add('url is undefined', () => ({
  template: `
    <div style="height:200px; width:200px;">
      <pag-thumbnail [url]="url"></pag-thumbnail>
    </div>
  `,
  props: {
    url: undefined
  }
}));

const iconStories = storiesOf(`${storyCategory}/Icon`, module);
iconStories.addDecorator(withKnobs);
iconStories.addDecorator(moduleMetadata(metadata));
iconStories.add('default', () => ({
  template: `<pag-icon [icon]="icon"></pag-icon>`,
  props: {
    icon: select('Icon Name', iconValues.iconNames, iconValues.iconNames.starActive)
  }
}));

const accountImgStories = storiesOf(`${storyCategory}/Account Img`, module);
accountImgStories.addDecorator(withKnobs);
accountImgStories.addDecorator(moduleMetadata(metadata));
const accountImgTemplate = `
<div style="height:50px; width:50px;">
  <pag-account-img [url]="url"></pag-account-img>
</div>
`;
accountImgStories.add('default', () => ({
  template: accountImgTemplate,
  props: {
    url: text('URL', undefined)
  }
}));
accountImgStories.add('specify image url', () => ({
  template: accountImgTemplate,
  props: {
    url: 'https://pbs.twimg.com/profile_images/821745021753823233/L_dTDu3C_normal.jpg'
  }
}));
