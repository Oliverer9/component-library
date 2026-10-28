import PropTypes from 'prop-types';
import './Picture.css';

/**
 * The image types on the TÍNT site.
 *
 * - `card`: square with rounded corners (categories, favourites, all businesses)
 * - `cover`: fills its container with no rounding (hero, featured business, gallery)
 * - `thumbnail`: small 40px square (search dropdown)
 *
 * `caption` adds text under the image, like the category names.
 * `overlay` puts something on top of the image's corner, like the favourite heart.
 */
export function Picture({
  src,
  alt,
  variant = 'card',
  caption,
  overlay,
  zoom = false,
  loading = 'lazy',
}) {
  const frame = (
    <div className={`picture picture--${variant}${zoom ? ' picture--zoom' : ''}`}>
      <img className="picture__img" src={src} alt={alt} loading={loading} />
      {overlay && <div className="picture__overlay">{overlay}</div>}
    </div>
  );

  if (!caption) return frame;

  return (
    <figure className="picture-figure">
      {frame}
      <figcaption className="picture-figure__caption">{caption}</figcaption>
    </figure>
  );
}

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  /** Describe what is in the image. Use "" only when it is decorative or repeats nearby text. */
  alt: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['card', 'cover', 'thumbnail']),
  /** Text under the image */
  caption: PropTypes.node,
  /** Element in the top-right corner, such as a favourite Button */
  overlay: PropTypes.node,
  /** Zoom the image slightly when the picture or its card is hovered */
  zoom: PropTypes.bool,
  /** "lazy" for images below the fold, "eager" for the hero */
  loading: PropTypes.oneOf(['lazy', 'eager']),
};
