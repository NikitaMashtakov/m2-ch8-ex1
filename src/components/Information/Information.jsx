import { useStore } from '../../useStore';
import { InformationLayout } from '../InformationLayout/InformationLayout';

export const Information = () => {
  const { currentPlayer, isDraw, isGameEnded } = useStore();

  return (
    <>
      <InformationLayout
        text={
          isDraw
            ? 'Ничья'
            : !isDraw && isGameEnded
            ? `Победа: ${currentPlayer}`
            : `Ходит: ${currentPlayer}`
        }
      />
    </>
  );
};
