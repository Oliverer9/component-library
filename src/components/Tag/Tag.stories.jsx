import { Tag, TagList } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    variant: { control: 'inline-radio' },
    as: { control: false },
  },
  args: { label: 'handgert', variant: 'outline' },
};

export const Outline = {};

export const Highlight = {
  args: { label: 'Þín umsögn', variant: 'highlight' },
};

// The tags under a business name
export const List = {
  args: { tags: ['handgert', 'gjafir', 'íslensk hönnun'], label: 'Flokkar' },
  argTypes: { tags: { control: 'object' } },
  render: ({ tags, variant, label }) => <TagList tags={tags} variant={variant} label={label} />,
};
