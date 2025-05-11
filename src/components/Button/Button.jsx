import PropTypes from 'prop-types';
import styles from './Button.module.css';
import { useStore } from '../../useStore';
import { store } from '../../store';

export const Button = ({ children }) => {
  const { isGameEnded } = useStore();

  return (
    <button
      className={styles.button + ' ' + `${isGameEnded ? styles.endOfGame : ''}`}
      onClick={() => store.dispatch({ type: 'RESET_GAME' })}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
};
