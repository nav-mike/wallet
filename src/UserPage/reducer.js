import {
  LOAD_DATA,
  UPDATE_BUDGET,
  ADD_OUTCOME
} from './constants';

export function reducer(state, action) {
  switch(action.type) {
    case LOAD_DATA:
      const { budget, outcomes } = action.payload;
      return {...state, budget: budget, outcomes: outcomes};
    case UPDATE_BUDGET:
      return {...state, budget: action.payload.budget};
    case ADD_OUTCOME:
      console.log(action);
      return {...state};
    default:
      console.log(action);
      return {...state};
  }
}
