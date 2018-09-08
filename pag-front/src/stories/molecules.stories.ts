import { storiesOf, moduleMetadata } from '@storybook/angular';
import { text, number, select, withKnobs } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';


import { AtomsModule } from 'src/app/components/atoms/atoms.module';
import { MoleculesModule } from 'src/app/components/molecules/molecules.module';
import { SelectStatuses } from 'src/app/components/molecules/nav-tag/nav-tag.component';

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
  <pag-nav-tag [tag]="tag" [count]="count" [status]="status"></pag-nav-tag>
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
    status: undefined,
    width: number('Tag Width', 270, navTagWidthOptions)
  }
}));
navTagStories.add('selectable', () => ({
  template,
  props: {
    tag: text('Tag', 'design'),
    count: number('Count', 0),
    status: SelectStatuses.selectable,
    width: number('Tag Width', 270, navTagWidthOptions)
  }
}));
navTagStories.add('selected', () => ({
  template,
  props: {
    tag: text('Tag', 'design'),
    count: number('Count', 0),
    status: SelectStatuses.selected,
    width: number('Tag Width', 270, navTagWidthOptions)
  }
}));
navTagStories.add('disable', () => ({
  template,
  props: {
    tag: text('Tag', 'design'),
    count: number('Count', 0),
    status: SelectStatuses.disable,
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
        (input)="onChangeInput($event)"
      ></pag-input-txt>
    <div>
  `,
  props: {
    onChangeInput: action('Change Input')
  }
}));

const accountNameStories = storiesOf(`${storyCategory}/Account Name`, module);
accountNameStories.addDecorator(withKnobs);
accountNameStories.addDecorator(moduleMetadata(metadata));
const accountNameTemplate = `
<pag-account-name [name]="name" [imgUrl]="imgUrl">
</pag-account-name>
`;
accountNameStories.add('default', () => ({
  template: accountNameTemplate,
  props: {
    name: text('Name', '@digitalfei'),
    imgUrl: undefined
  }
}));
accountNameStories.add('specify img url', () => ({
  template: accountNameTemplate,
  props: {
    name: text('Name', '@digitalfei'),
    imgUrl: 'https://pbs.twimg.com/profile_images/821745021753823233/L_dTDu3C_normal.jpg'
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
