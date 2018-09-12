import PropTypes from 'prop-types';

export const hobbyPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  id: PropTypes.number,
  state: PropTypes.bool
});

export const hobbiesPropType = PropTypes.arrayOf(hobbyPropType);