import React, { useRef } from 'react';
import { FirestoreMutation } from '@react-firebase/firestore';

const Budget = (props) => {
  const budget = props.dbBudget;
  const userId = props.userId;
  const budgetEl = useRef(null);

  return (
    <div className="Budget__container App__half-container App__container_flex-columns">
      <h2>Budget:</h2>
      <div>{budget} EUR</div>
      <form className="App__container_flex-columns Add-data-form__container">
        <input 
          type="text" 
          placeholder="Budget value" 
          className="form__item" 
          ref={budgetEl}
        />
        <FirestoreMutation type="set" path={`/wallet_budget_values/${userId}`}>
          {({ runMutation }) => {
            return (
              <button 
                type="button" 
                className="form__item"
                onClick={() => {
                  runMutation({budget: +budgetEl.current.value})
                  .then(_res => {
                    budgetEl.current.value = '';
                  });
                }}
              >
                Define budget
              </button>
            );
          }}
        </FirestoreMutation>
      </form>
    </div>
  );
}

export default Budget;
