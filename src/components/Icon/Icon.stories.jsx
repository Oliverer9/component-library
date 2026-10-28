import { Icon } from './Icon';
import { icons } from './icons';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: { control: 'select' },
    size: { control: 'inline-radio' },
    color: { control: 'color', description: 'Icons use the text colour around them' },
  },
  args: { name: 'heart', size: 'medium', filled: false, color: '#252525' },
  // The wrapper sets the text colour, which the icon picks up
  render: ({ color, ...args }) => (
    <span style={{ color }}>
      <Icon {...args} />
    </span>
  ),
};

export const Default = {};

export const Filled = {
  args: { filled: true, color: '#E0393E' },
};

export const WithLabel = {
  args: { name: 'star', filled: true, label: '1 stjarna' },
};

// Every icon on the site at once
export const AllIcons = {
  argTypes: { name: { control: false } },
  render: ({ color, ...args }) => (
    <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(9rem, 1fr))', gap: '1rem', padding: 0, listStyle: 'none', color }}>
      {Object.keys(icons).map((name) => (
        <li key={name} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Icon {...args} name={name} />
          <code>{name}</code>
        </li>
      ))}
    </ul>
  ),
};
