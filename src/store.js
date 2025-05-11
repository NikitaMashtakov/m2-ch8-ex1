import { WIN_PATTERNS } from './constants';
import { createStore } from 'redux';

const initialState = {
  field: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null,
  isDraw: false,
  isGameEnded: false,
};

const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FIELD_CLICK': {
      if (state.field[payload.index] === null && !state.isGameEnded) {
        const newField = state.field.slice();
        newField[payload.index] = state.currentPlayer;

        const gameStatus = { winner: null, isGameEnded: false, isDraw: false };

        WIN_PATTERNS.forEach((pattern) => {
          const [a, b, c] = pattern;
          if (newField[a] && newField[a] === newField[b] && newField[a] === newField[c]) {
            gameStatus.isGameEnded = true;
            gameStatus.winner = newField[a];
          }
        });

        if (!gameStatus.winner && newField.every((value) => value !== null)) {
          gameStatus.isGameEnded = true;
          gameStatus.isDraw = true;
        }

        const newState = { ...state, field: newField, ...gameStatus };

        if (!gameStatus.winner) {
          newState.currentPlayer = state.currentPlayer === 'X' ? '0' : 'X';
        }
        return newState;
      } else return;
    }

    case 'RESET_GAME':
      return initialState;

    default:
      return state;
  }
};
export const store = createStore(gameReducer, initialState);
