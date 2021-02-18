import React, { useState } from 'react';

const Budget = () => {
  const [budget, setBudget] = useState(500);
  const [budgetVal, setBudgetVal] = useState(0);
  return(
    <div className="Budget__container App__half-container App__container_flex-columns">
      <h2>Budget:</h2>
      <div>{budget} EUR</div>
      <form className="App__container_flex-columns Add-data-form__container">
        <input 
          type="text" 
          placeholder="Budget value" 
          className="form__item" 
          value={budgetVal}
          onChange={(event) => { setBudgetVal(event.target.value) }}
        />
        <button 
          type="button" 
          className="form__item"
          onClick={() => {
            setBudget(+budgetVal);
            setBudgetVal(0);
          }}
        >
          Define budget
        </button>
      </form>
    </div>
  );
}

export default Budget;
