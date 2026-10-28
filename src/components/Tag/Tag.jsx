import PropTypes from 'prop-types';
import './Tag.css';

/**
 * A small label. Tags are not clickable; use a `filter` Button for that.
 *
 * - `outline`: the category tags on a business page (`.biz-tags li`)
 * - `highlight`: the light blue "Þín umsögn" label on reviews (`.review-tag`)
 *
 * Use `as="li"` when the tags are a list, and wrap them in TagList.
 */
export function Tag({ label, variant = 'outline', as: Element = 'span' }) {
  return <Element className={`tag tag--${variant}`}>{label}</Element>;
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['outline', 'highlight']),
  /** The HTML element. Use "li" inside a TagList. */
  as: PropTypes.oneOf(['span', 'li']),
};

/** A row of tags that wraps onto new lines */
export function TagList({ tags, variant = 'outline', label }) {
  return (
    <ul className="tag-list" aria-label={label}>
      {tags.map((tag) => (
        <Tag key={tag} label={tag} variant={variant} as="li" />
      ))}
    </ul>
  );
}

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  variant: PropTypes.oneOf(['outline', 'highlight']),
  /** Name for the list, read by screen readers, for example "Flokkar" */
  label: PropTypes.string,
};
