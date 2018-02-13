// Action types
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

// Actions
export const CounterActions = {
  increment: () => ({type: INCREMENT_COUNTER}),
  decrement: () => ({type: DECREMENT_COUNTER}),
  incrementIfOdd: () => (dispatch, getState) => {
    const {counter} = getState();
    if (counter % 2 === 0) {
      return;
    }
    dispatch(CounterActions.increment());
  },
};

// Initial State
const initialState = 0;

// Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}
