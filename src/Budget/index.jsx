import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { UPDATE_BUDGET } from '../UserPage/constants';

const Budget = ({
  value, dispatch, collection, doc, db,
}) => {
  const [budget, setBudget] = useState(value);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    setBudget(value);
  }, [value]);

  const updateBudgetHandler = useCallback(() => {
    const payload = { budget: currentValue };
    db.collection(collection)
      .doc(doc)
      .update(payload)
      .then(() => {
        setCurrentValue(0);
        dispatch({ type: UPDATE_BUDGET, payload: { budget: currentValue } });
      });
  }, [dispatch, currentValue, collection, db, doc]);

  return (
    <div className="Budget__container App__half-container App__container_flex-columns">
      <h2>Budget:</h2>
      <div>
        {budget}
        {' '}
        EUR
      </div>
      <form className="App__container_flex-columns Add-data-form__container">
        <input
          type="text"
          placeholder="Budget value"
          className="form__item"
          value={currentValue}
          onChange={(event) => {
            setCurrentValue(+event.target.value);
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
};

Budget.propTypes = {
  value: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  collection: PropTypes.string.isRequired,
  doc: PropTypes.string.isRequired,
  db: PropTypes.objectOf().isRequired,
};

export default Budget;
