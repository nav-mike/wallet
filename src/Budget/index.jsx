import React, { useState, useEffect } from 'react';

const Budget = (props) => {
  const [budget, setBudget] = useState(props.dbBudget);
  const runMutation = props.runMutation;
  const [budgetVal, setBudgetVal] = useState(0);

  useEffect(() => {
    setBudget(props.dbBudget);
  }, [props.dbBudget]);

  return (
    <div className="Budget__container App__half-container App__container_flex-columns">
      <h2>Budget:</h2>
      <div>{budget} EUR</div>
      <form className="App__container_flex-columns Add-data-form__container">
        <input 
          type="text" 
          placeholder="Budget value" 
          className="form__item" 
          value={budgetVal}
          onChange={(event) => {
            setBudgetVal(event.target.value);
          }}
        />
        <button
          type="button"
          className="form__item"
          onClick={() => {
            runMutation({budget: +budgetVal})
              .then(_res => {
                setBudgetVal(0);
              });
          }}
        >
          Define budget
        </button>
      </form>
    </div>
  );
}

export default Budget;
