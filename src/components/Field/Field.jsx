import styles from './Field.module.css';
import { FieldLayout } from '../FieldLayout/FieldLayout';
import { store } from '../../store';
import { useStore } from '../../useStore';

export const Field = () => {
  const { field, isGameEnded } = useStore();

  const handleClick = (index) => {
    store.dispatch({ type: 'FIELD_CLICK', payload: { index } });
  };

  return (
    <div className={styles.container}>
      {field.map((value, index) => (
        <FieldLayout
          key={index}
          value={value}
          onClick={() => handleClick(index)}
          disabled={field[index] || isGameEnded}
        />
      ))}
    </div>
  );
};
