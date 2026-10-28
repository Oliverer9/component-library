import PropTypes from 'prop-types';
import { icons } from './icons';
import './Icon.css';

/**
 * A Lucide icon in the site's style (1.5 stroke, current text colour).
 *
 * Icons are decorative by default and hidden from screen readers.
 * Give a `label` only when the icon is the only thing that tells the user something,
 * for example a star rating with no text next to it.
 */
export function Icon({ name, size = 'medium', filled = false, label }) {
  const LucideIcon = icons[name];

  return (
    <LucideIcon
      className={`icon icon--${size}`}
      strokeWidth={1.5}
      fill={filled ? 'currentColor' : 'none'}
      focusable="false"
      {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true })}
    />
  );
}

Icon.propTypes = {
  /** Which icon */
  name: PropTypes.oneOf(Object.keys(icons)).isRequired,
  /** small 16px, medium 20px (the site's default), large 24px */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Fill the shape, like a saved heart or a given star */
  filled: PropTypes.bool,
  /** Text for screen readers. Leave out when the icon is decorative. */
  label: PropTypes.string,
};
