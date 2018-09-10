import { storiesOf, moduleMetadata } from '@storybook/angular';
import { text, number, select, withKnobs } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';


import { AtomsModule } from 'src/app/components/atoms/atoms.module';
import { MoleculesModule } from 'src/app/components/molecules/molecules.module';

const metadata = {
  declarations: [],
  imports: [
    AtomsModule,
    MoleculesModule
  ]
};
const storyCategory = 'Molecules';

const ellipsisTxtStories = storiesOf(`${storyCategory}/Ellipsis Txt`, module);
ellipsisTxtStories.addDecorator(withKnobs);
ellipsisTxtStories.addDecorator(moduleMetadata(metadata));
ellipsisTxtStories.add('max', () => {
  const widthOptions = {
    range: true,
    min: 10,
    max: 300,
    step: 1
  };
  return {
    template: `<pag-ellipsis-txt [text]="text" [max]="width + 'px'"></pag-ellipsis-txt>`,
    props: {
      text: text('Text', 'ellipsis text.'),
      width: number('Width', 50, widthOptions)
    }
  };
});

const navTagStories = storiesOf(`${storyCategory}/Navigation Tag`, module);
navTagStories.addDecorator(withKnobs);
navTagStories.addDecorator(moduleMetadata(metadata));
const template = `
<div style="padding:12px; background:#f0f0f0;" [style.width]="width + 'px'">
  <pag-nav-tag [tag]="tag" [count]="count" [selected]="selected" [disable]="disable" [clickEvent]="clickEvent"></pag-nav-tag>
</div>
`;
const navTagWidthOptions = {
  range: true,
  min: 100,
  max: 500,
  step: 1
};
navTagStories.add('default', () => ({
  template,
  props: {
    tag: text('Tag', 'design'),
    count: number('Count', 0),
    clickEvent: action('Clicked Nav Tag'),
    width: number('Tag Width', 270, navTagWidthOptions)
  }
}));
navTagStories.add('selectable', () => ({
  template,
  props: {
    tag: text('Tag', 'design'),
    count: number('Count', 0),
    selected: false,
    disable: false,
    clickEvent: action('Clicked Nav Tag'),
    width: number('Tag Width', 270, navTagWidthOptions)
  }
}));
navTagStories.add('selected', () => ({
  template,
  props: {
    tag: text('Tag', 'design'),
    count: number('Count', 0),
    selected: true,
    disable: false,
    clickEvent: action('Clicked Nav Tag'),
    width: number('Tag Width', 270, navTagWidthOptions)
  }
}));
navTagStories.add('disable', () => ({
  template,
  props: {
    tag: text('Tag', 'design'),
    count: number('Count', 0),
    disable: true,
    clickEvent: action('Clicked Nav Tag'),
    width: number('Tag Width', 270, navTagWidthOptions)
  }
}));

const inputTxtStories = storiesOf(`${storyCategory}/Input Text`, module);
inputTxtStories.addDecorator(withKnobs);
inputTxtStories.addDecorator(moduleMetadata(metadata));
inputTxtStories.add('default', () => ({
  template: `
    <div style="padding:12px; background:#fff; width:300px;">
      <pag-input-txt
        [defaultValue]="defaultValue"
        (input)="onChangeInput($event)"
      ></pag-input-txt>
    <div>
  `,
  props: {
    defaultValue: text('Default Value', undefined),
    onChangeInput: action('Change Input')
  }
}));

const accountNameStories = storiesOf(`${storyCategory}/Account Name`, module);
accountNameStories.addDecorator(withKnobs);
accountNameStories.addDecorator(moduleMetadata(metadata));
const accountNameTemplate = `
<pag-account-name [id]="id" [name]="name" [imgUrl]="imgUrl" [clickEvent]="clickEvent">
</pag-account-name>
`;
accountNameStories.add('default', () => ({
  template: accountNameTemplate,
  props: {
    id: 'id-1',
    name: text('Name', '@digitalfei'),
    imgUrl: undefined,
    clickEvent: action('Clicked account')
  }
}));
accountNameStories.add('specify img url', () => ({
  template: accountNameTemplate,
  props: {
    id: 'id-2',
    name: text('Name', '@digitalfei'),
    imgUrl: 'https://pbs.twimg.com/profile_images/821745021753823233/L_dTDu3C_normal.jpg',
    clickEvent: action('Clicked account')
  }
}));

const buttonStories = storiesOf(`${storyCategory}/Button`, module);
buttonStories.addDecorator(withKnobs);
buttonStories.addDecorator(moduleMetadata(metadata));
const buttonTemplate = `
<div style="width:200px;">
  <pag-button [label]="label" [active]="active" [clickEvent]="clickEvent">
  </pag-button>
</div>
`;
buttonStories.add('active', () => ({
  template: buttonTemplate,
  props: {
    label: text('Label', 'Button'),
    active: true,
    clickEvent: action('Click Button')
  }
}));
buttonStories.add('deactive', () => ({
  template: buttonTemplate,
  props: {
    label: text('Label', 'Button'),
    active: false
  }
}));
