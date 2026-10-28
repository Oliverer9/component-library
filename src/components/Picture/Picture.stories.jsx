import { useState } from 'react';
import { Picture } from './Picture';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import matur from '../../assets/examples/matur.jpg';
import bakad from '../../assets/examples/bakad.jpg';
import hero from '../../assets/examples/hero.jpg';
import braud from '../../assets/examples/braud1.jpg';

const images = { matur, bakad, hero, braud };

export default {
  title: 'Components/Picture',
  component: Picture,
  argTypes: {
    src: { options: Object.keys(images), mapping: images, control: 'select' },
    variant: { control: 'inline-radio' },
    loading: { control: 'inline-radio' },
    caption: { control: 'text' },
    overlay: { control: false },
  },
  args: {
    src: 'matur',
    alt: 'Matur og drykkir: fallega framreiddur réttur',
    variant: 'card',
    zoom: false,
  },
  // Cards and covers fill their container, so the stories give them a width like on the site
  decorators: [(Story) => <div style={{ width: '16rem' }}><Story /></div>],
};

export const Card = {};

export const WithCaption = {
  args: {
    caption: 'Matur & Drykkir',
    zoom: true,
  },
};

// The category tile from the front page: the whole card is a link, and the caption has an arrow
export const CategoryLink = {
  args: { zoom: true },
  render: (args) => (
    <a href="#flokkar" style={{ color: 'inherit', textDecoration: 'none' }}>
      <Picture
        {...args}
        caption={<>Matur &amp; Drykkir <Icon name="arrow-right" /></>}
      />
    </a>
  ),
};

// The favourites card, with the heart button on top of the image
export const WithFavorite = {
  args: {
    src: 'bakad',
    alt: 'Mynd frá Bakað: notalegt bakarí',
  },
  render: function WithFavoriteStory(args) {
    const [saved, setSaved] = useState(false);
    return (
      <Picture
        {...args}
        overlay={
          <Button
            variant="favorite"
            label="Vista Bakað í uppáhald"
            icon={<Icon name="heart" />}
            pressed={saved}
            onClick={() => setSaved(!saved)}
          />
        }
      />
    );
  },
};

export const Cover = {
  args: {
    src: 'hero',
    alt: 'Notaleg verslun með fötum, töskum og vörum til sýnis',
    variant: 'cover',
    loading: 'eager',
  },
  decorators: [(Story) => <div style={{ width: '100%', maxWidth: '40rem' }}><Story /></div>],
};

// In the search dropdown the business name is next to the thumbnail, so the image is decorative (alt="")
export const Thumbnail = {
  args: {
    src: 'braud',
    alt: '',
    variant: 'thumbnail',
  },
};
