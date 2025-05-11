import styles from './InformationLayout.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ text }) => {
  return <div className={styles.container}>{text}</div>;
};
InformationLayout.propTypes = {
  text: PropTypes.string,
};
