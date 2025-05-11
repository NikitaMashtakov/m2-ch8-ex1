import styles from './FieldLayout.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ value, ...props }) => {
  return (
    <button className={styles.field} {...props}>
      {value}
    </button>
  );
};

FieldLayout.propTypes = {
  value: PropTypes.string,
};
