import { useArgs } from 'storybook/preview-api';
import { expect, within } from 'storybook/test';
import { BusinessCard } from './BusinessCard';
import bakad from '../../assets/examples/bakad.jpg';

export default {
  title: 'Components/BusinessCard',
  component: BusinessCard,
  argTypes: {
    image: { control: false },
    headingLevel: { control: 'inline-radio' },
    tags: { control: 'object' },
  },
  args: {
    name: 'Bakað',
    location: 'Reykjavík',
    description: 'Notalegt bakarí með nýbökuðu brauði á hverjum morgni',
    image: bakad,
    imageAlt: 'Mynd frá Bakað: hillur fullar af nýbökuðu brauði',
    href: '#bakad',
    website: '#vefsida',
    favorite: false,
    headingLevel: 2,
  },
  // Clicking the heart flips the `favorite` control
  render: function BusinessCardStory(args) {
    const [, updateArgs] = useArgs();
    return <BusinessCard {...args} onFavoriteChange={(favorite) => updateArgs({ favorite })} />;
  },
  // The card is one column of the site's 3-column grid
  decorators: [(Story) => <div style={{ width: '18rem' }}><Story /></div>],
};

export const Default = {
  // The stretched name link covers the card, so check the heart and website link are still on top
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    for (const control of [
      canvas.getByRole('button', { name: 'Bæta Bakað í uppáhald' }),
      canvas.getByRole('link', { name: 'Vefsíða Bakað' }),
    ]) {
      const box = control.getBoundingClientRect();
      const topElement = document.elementFromPoint(box.x + box.width / 2, box.y + box.height / 2);
      await expect(control.contains(topElement)).toBe(true);
    }
  },
};

export const Favorite = {
  args: { favorite: true },
};

export const WithTags = {
  args: { tags: ['bakarí', 'matur', 'handgert'] },
};

export const WithoutWebsite = {
  args: { website: undefined },
};

// Without onFavoriteChange there is no heart
export const NoHeart = {
  render: (args) => <BusinessCard {...args} />,
};

// Three cards in the grid used on the favourites page
export const Grid = {
  decorators: [(Story) => <div style={{ width: 'min(100%, 60rem)' }}><Story /></div>],
  render: (args) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(14rem, 1fr))', gap: '2.5rem 2rem' }}>
      <BusinessCard {...args} />
      <BusinessCard {...args} name="Kaffihúsið" href="#kaffihusid" location="Akureyri" favorite />
      <BusinessCard {...args} name="Hjólabúðin" href="#hjolabudin" location="Selfoss" website={undefined} />
    </div>
  ),
};
