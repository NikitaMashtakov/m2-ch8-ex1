import styles from './GameLayout.module.css';
import { Field } from '../Field/Field';
import { Information } from '../Information/Information';
import { Button } from '../Button/Button';

export const GameLayout = () => {
  return (
    <div className={styles.container}>
      <Information />
      <Field />
      <Button>Начать с начала</Button>
    </div>
  );
};
