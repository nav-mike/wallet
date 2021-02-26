import {
  LOAD_DATA,
  UPDATE_BUDGET,
  ADD_OUTCOME,
  RESET_OUTCOME,
} from './constants';

export default function reducer(state, action) {
  switch (action.type) {
    case LOAD_DATA:
      return { ...state, budget: action.payload.budget, outcomes: action.payload.outcomes };
    case UPDATE_BUDGET:
      return { ...state, budget: action.payload.budget };
    case ADD_OUTCOME:
      return { ...state, outcomes: action.payload.outcomes };
    case RESET_OUTCOME:
      return { ...state, outcomes: action.payload.outcomes };
    default:
      return { ...state };
  }
}
