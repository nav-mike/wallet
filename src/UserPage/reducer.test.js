import { ADD_OUTCOME, LOAD_DATA, UPDATE_BUDGET, RESET_OUTCOME } from "./constants";
import reducer from "./reducer";

describe('reducer.js', () => {
  test('LOAD_DATA', () => {
    expect(
      reducer({ budget: 0, outcomes: 0 },
        { type: LOAD_DATA, payload: { budget: 500, outcomes: 100 } })
    ).toEqual({ budget: 500, outcomes: 100 })
  });

  test('UPDATE_BUDGET', () => {
    expect(
      reducer({ budget: 200, outcomes: 120 },
        { type: UPDATE_BUDGET, payload: { budget: 500 } })
    ).toEqual({ budget: 500, outcomes: 120 });
  });

  test('ADD_OUTCOME', () => {
    expect(
      reducer({ budget: 500, outcomes: 120 },
        { type: ADD_OUTCOME, payload: { outcomes: 200 } })
    ).toEqual({ budget: 500, outcomes: 200 });
  });

  test('RESET_OUTCOME', () => {
    expect(
      reducer({ budget: 500, outcomes: 608 },
        { type: RESET_OUTCOME, payload: { outcomes: 0 } })
    ).toEqual({ budget: 500, outcomes: 0 });
  });

  test('OTHER', () => {
    expect(
      reducer({ budget: 500, outcomes: 100 },
        { type: 'OTHER', payload: { budget: 0, outcomes: 0 } })
    ).toEqual({ budget: 500, outcomes: 100 });
  });
});