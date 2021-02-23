import React, { useState, useEffect, useCallback } from 'react';
import { UPDATE_BUDGET } from '../UserPage/constants';

const Budget = (props) => {
  const [budget, setBudget] = useState(props.value);
  const [value, setValue] = useState(0);
  const { dispatch, collection, doc, db } = props;

  useEffect(() => {
    setBudget(props.value);
  }, [props.value]);

  const updateBudgetHandler = useCallback(() => {
    const payload = {budget: value};
    db.collection(collection)
      .doc(doc)
      .update(payload)
      .then(response => {
        dispatch({type: UPDATE_BUDGET, payload: {budget: value}});
      });
  }, [dispatch, value, collection, db, doc]);

  return (
    <div className="Budget__container App__half-container App__container_flex-columns">
      <h2>Budget:</h2>
      <div>{budget} EUR</div>
      <form className="App__container_flex-columns Add-data-form__container">
        <input 
          type="text" 
          placeholder="Budget value" 
          className="form__item" 
          value={value}
          onChange={(event) => {
            setValue(+event.target.value);
          }}
        />
        <button
          type="button"
          className="form__item"
          onClick={updateBudgetHandler}
        >
          Define budget
        </button>
      </form>
    </div>
  );
}

export default Budget;
