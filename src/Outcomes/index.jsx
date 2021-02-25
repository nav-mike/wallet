import React, { useState, useEffect, useCallback } from 'react';
import { ADD_OUTCOME, RESET_OUTCOME } from '../UserPage/constants';

const Outcomes = (props) => {
  const [outcomes, setOutcomes] = useState(props.value);
  const [value, setValue] = useState(0);
  const { dispatch, collection, doc, db } = props;

  useEffect(() => {
    setOutcomes(props.value);
  }, [props.value]);

  const addOutcomeHandler = useCallback(() => {
    const payload = {outcomes: +outcomes + value};
    db.collection(collection)
      .doc(doc)
      .update(payload)
      .then(_response => {
        setValue(0);
        dispatch({type: ADD_OUTCOME, payload: payload});
      });
  }, [dispatch, value, collection, db, doc, outcomes]);
  const resetOutcomesHandler = useCallback(() => {
    const payload = {outcomes: 0};
    db.collection(collection)
      .doc(doc)
      .update(payload)
      .then(_response => {
        dispatch({type: RESET_OUTCOME, payload: payload});
      });
  }, [dispatch, collection, db, doc]);

  const className = `Outcomes__container App__half-container App__container_flex-columns ${props.wrapperClassName}`

  return (
    <div className={className}>
      <h2>Charges:</h2>
      <div>{outcomes} EUR</div>
      <form className="App__container_flex-columns Add-data-form__container">
        <input
          type="text"
          placeholder="Outcome value"
          className="form__item"
          value={value}
          onChange={event => {
            setValue(+event.target.value);
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
}

export default Outcomes;
