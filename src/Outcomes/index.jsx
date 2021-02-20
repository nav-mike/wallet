import React, { useRef } from 'react';
import { FirestoreMutation } from '@react-firebase/firestore';

const Outcomes = (props) => {
  const outcomes = props.dbOutcomes;
  const userId = props.userId;
  const outcomeEl = useRef(null);

  return(
    <div className="Outcomes__container App__half-container App__container_flex-columns">
      <h2>Outcomes:</h2>
      <div>{outcomes} EUR</div>
      <form className="App__container_flex-columns Add-data-form__container">
        <input
          type="number"
          placeholder="Outcome value"
          className="form__item"
          ref={outcomeEl}
        />
        <FirestoreMutation type="set" path={`/wallet_budget_values/${userId}`}>
          {({ runMutation }) => {
            return (
              <button
                type="button" 
                className="form__item"
                onClick={() => { 
                  console.log(outcomes);
                  /*runMutation({outcomes: +outcomeEl.current.value})
                    .then(_res => {
                      outcomeEl.current.value = '';
                    });*/
                }}
              >
                Add outcome
              </button>
            );
          }}
        </FirestoreMutation>
      </form>
    </div>
  );
}

export default Outcomes;
