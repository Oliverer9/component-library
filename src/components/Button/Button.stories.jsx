import { useArgs } from 'storybook/preview-api';
import { Button } from './Button';
import { Icon } from '../Icon/Icon';

// Button takes any icon node, so it does not depend on Icon. The stories pass Icon in.
const icons = {
  none: undefined,
  ArrowRight: <Icon name="arrow-right" />,
  ChevronDown: <Icon name="chevron-down" />,
  Heart: <Icon name="heart" />,
};

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select' },
    icon: { options: Object.keys(icons), mapping: icons, control: 'select' },
    onClick: { action: 'clicked' },
  },
  args: { label: 'Skoða öll fyrirtæki', variant: 'primary' },
};

// Clicking a toggle flips its control so you can see both states
function ToggleStory(args) {
  const [, updateArgs] = useArgs();
  const key = args.variant === 'dropdown' ? 'expanded' : 'pressed';
  return <Button {...args} onClick={() => updateArgs({ [key]: !args[key] })} />;
}

export const Primary = {
  args: { icon: 'ArrowRight' },
};

export const Secondary = {
  args: { variant: 'secondary', label: 'Sjá allar umsagnir' },
};

export const White = {
  args: { variant: 'white', label: 'Skrá mig' },
  parameters: { backgrounds: { default: 'green', options: { green: { name: 'Green', value: '#214E3A' } } } },
  globals: { backgrounds: { value: 'green' } },
};

export const Dropdown = {
  args: { variant: 'dropdown', label: 'Flokkar', icon: 'ChevronDown', expanded: false },
  render: ToggleStory,
};

export const Filter = {
  args: { variant: 'filter', label: 'Matur (3)', pressed: false },
  render: ToggleStory,
};

export const Favorite = {
  args: { variant: 'favorite', label: 'Bæta við uppáhald', icon: 'Heart', pressed: false },
  render: ToggleStory,
};

export const Disabled = {
  args: { disabled: true },
};
