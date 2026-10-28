import PropTypes from 'prop-types';
import './Button.css';

/**
 * Every button on the TÍNT site.
 *
 * - `primary`: green, for the main action (`.btn`)
 * - `secondary`: green outline (`.btn-secondary`)
 * - `white`: white, used on dark or image backgrounds (`.btn-white`)
 * - `dropdown`: light blue with a chevron, opens a menu. Pass `expanded`. (`.explore-dd-btn`)
 * - `filter`: pill that toggles a filter on and off. Pass `pressed`. (`.pill-filter`)
 * - `favorite`: round heart that saves a business. Icon only, so `label` becomes the
 *   aria-label. Pass `pressed`. (`.fav-heart`)
 */
export function Button({
  variant = 'primary',
  label,
  icon,
  pressed,
  expanded,
  disabled = false,
  onClick,
}) {
  const isIconOnly = variant === 'favorite';
  const isToggle = variant === 'filter' || variant === 'favorite';

  return (
    <button
      type="button"
      className={`button button--${variant}`}
      aria-label={isIconOnly ? label : undefined}
      aria-pressed={isToggle ? Boolean(pressed) : undefined}
      aria-expanded={variant === 'dropdown' ? Boolean(expanded) : undefined}
      disabled={disabled}
      onClick={onClick}
    >
      {!isIconOnly && label}
      {icon && <span className="button__icon" aria-hidden="true">{icon}</span>}
    </button>
  );
}

Button.propTypes = {
  /** Which button from the site */
  variant: PropTypes.oneOf(['primary', 'secondary', 'white', 'dropdown', 'filter', 'favorite']),
  /** Text on the button. For `favorite` it is read by screen readers only. */
  label: PropTypes.string.isRequired,
  /** Icon shown after the label, like the arrow on "Skoða öll fyrirtæki" */
  icon: PropTypes.node,
  /** `filter` and `favorite` only: whether the toggle is on */
  pressed: PropTypes.bool,
  /** `dropdown` only: whether its menu is open */
  expanded: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
