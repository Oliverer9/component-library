import PropTypes from 'prop-types';
import { Picture } from '../Picture/Picture';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { TagList } from '../Tag/Tag';
import './BusinessCard.css';

/**
 * A business in the list of all businesses and on the favourites page.
 * Built from Picture, Button, Icon and TagList.
 *
 * The whole card is clickable through the name link, so keyboard users only
 * reach the business page once. The heart and the website link sit on top and work on their own.
 */
export function BusinessCard({
  name,
  location,
  description,
  image,
  imageAlt,
  href,
  website,
  tags,
  favorite = false,
  onFavoriteChange,
  headingLevel = 2,
}) {
  const Heading = `h${headingLevel}`;

  const heart = onFavoriteChange && (
    <Button
      variant="favorite"
      label={favorite ? `Fjarlægja ${name} úr uppáhaldi` : `Bæta ${name} í uppáhald`}
      icon={<Icon name="heart" />}
      pressed={favorite}
      onClick={() => onFavoriteChange(!favorite)}
    />
  );

  return (
    <article className="business-card" data-zoom-trigger>
      <Picture src={image} alt={imageAlt} variant="card" zoom overlay={heart} />
      <p className="business-card__location">{location}</p>
      <div className="business-card__row">
        <Heading className="business-card__name">
          <a href={href}>{name}</a>
        </Heading>
        {website && (
          <a className="business-card__website" href={website} aria-label={`Vefsíða ${name}`}>
            Vefsíða <Icon name="external-link" size="small" />
          </a>
        )}
      </div>
      <p className="business-card__description">{description}</p>
      {tags && tags.length > 0 && <TagList tags={tags} label="Flokkar" />}
    </article>
  );
}

BusinessCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  /** Describe the photo, for example "Mynd frá Bakað: hillur fullar af brauði" */
  imageAlt: PropTypes.string.isRequired,
  /** The business page */
  href: PropTypes.string.isRequired,
  /** The business's own website. Leave out to hide the link. */
  website: PropTypes.string,
  /** Tags shown under the description. Leave out to hide them, like on the site. */
  tags: PropTypes.arrayOf(PropTypes.string),
  favorite: PropTypes.bool,
  /** Called with the new value when the heart is clicked. Leave out to hide the heart. */
  onFavoriteChange: PropTypes.func,
  /** Match the page's heading outline: 2 on the list pages, 3 inside a section */
  headingLevel: PropTypes.oneOf([2, 3, 4]),
};
