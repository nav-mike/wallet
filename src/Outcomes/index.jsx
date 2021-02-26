import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ADD_OUTCOME, RESET_OUTCOME } from '../UserPage/constants';

const Outcomes = ({
  value, dispatch, collection, doc, db, wrapperClassName,
}) => {
  const [outcomes, setOutcomes] = useState(value);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    setOutcomes(value);
  }, [value]);

  const addOutcomeHandler = useCallback(() => {
    const payload = { outcomes: +outcomes + currentValue };
    db.collection(collection)
      .doc(doc)
      .update(payload)
      .then(() => {
        setCurrentValue(0);
        dispatch({ type: ADD_OUTCOME, payload });
      });
  }, [dispatch, currentValue, collection, db, doc, outcomes]);
  const resetOutcomesHandler = useCallback(() => {
    const payload = { outcomes: 0 };
    db.collection(collection)
      .doc(doc)
      .update(payload)
      .then(() => {
        dispatch({ type: RESET_OUTCOME, payload });
      });
  }, [dispatch, collection, db, doc]);

  const className = `Outcomes__container App__half-container App__container_flex-columns ${wrapperClassName}`;

  return (
    <div className={className}>
      <h2>Charges:</h2>
      <div>
        {outcomes}
        {' '}
        EUR
      </div>
      <form className="App__container_flex-columns Add-data-form__container">
        <input
          type="text"
          placeholder="Outcome value"
          className="form__item"
          value={currentValue}
          onChange={(event) => {
            setCurrentValue(+event.target.value);
          }}
        />
        <button
          type="button"
          className="form__item"
          onClick={addOutcomeHandler}
        >
          Add charge
        </button>
        <button
          type="button"
          className="form__item"
          onClick={resetOutcomesHandler}
        >
          Reset
        </button>
      </form>
    </div>
  );
};

Outcomes.propTypes = {
  value: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  collection: PropTypes.string.isRequired,
  doc: PropTypes.string.isRequired,
  db: PropTypes.objectOf().isRequired,
  wrapperClassName: PropTypes.string.isRequired,
};

export default Outcomes;
