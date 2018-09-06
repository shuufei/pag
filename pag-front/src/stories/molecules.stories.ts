import { storiesOf, moduleMetadata } from '@storybook/angular';
import { text, number, select, withKnobs } from '@storybook/addon-knobs/angular';

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

const navTagStories = storiesOf(`${storyCategory}/Navigation Tag`, module);
navTagStories.addDecorator(withKnobs);
navTagStories.addDecorator(moduleMetadata(metadata));
const template = `
<div style="padding:12px; background:#f0f0f0;" [style.width]="width + 'px'">
  <pag-nav-tag [tag]="tag" [count]="count" [status]="status"></pag-nav-tag>
</div>
`;
const widthOptions = {
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
    width: number('Tag Width', 270, widthOptions)
  }
}));
navTagStories.add('selectable', () => ({
  template,
  props: {
    tag: text('Tag', 'design'),
    count: number('Count', 0),
    status: SelectStatuses.selectable,
    width: number('Tag Width', 270, widthOptions)
  }
}));
navTagStories.add('selected', () => ({
  template,
  props: {
    tag: text('Tag', 'design'),
    count: number('Count', 0),
    status: SelectStatuses.selected,
    width: number('Tag Width', 270, widthOptions)
  }
}));
navTagStories.add('disable', () => ({
  template,
  props: {
    tag: text('Tag', 'design'),
    count: number('Count', 0),
    status: SelectStatuses.disable,
    width: number('Tag Width', 270, widthOptions)
  }
}));

