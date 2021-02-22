import React, { useState, useEffect, useCallback } from 'react';
import { ADD_OUTCOME } from '../UserPage/constants';

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
        dispatch({type: ADD_OUTCOME, payload: payload});
      });
  }, [dispatch, value, collection, db, doc, outcomes]);

  return (
    <div className="Outcomes__container App__half-container App__container_flex-columns">
      <h2>Outcomes:</h2>
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
                Add outcome
              </button>
      </form>
    </div>
  );
}

export default Outcomes;
