import React, { useState } from 'react';

const Outcomes = () => {
  const [outcomes, setOutcomes] = useState(0);
  const [outcome, setOutcome] = useState(0);
  return(
    <div className="Outcomes__container App__half-container App__container_flex-columns">
      <h2>Outcomes:</h2>
      <div>{outcomes} EUR</div>
      <form className="App__container_flex-columns Add-data-form__container">
        <input
          type="number"
          placeholder="Outcome value"
          className="form__item"
          value={outcome}
          onChange={(event) => { setOutcome(event.target.value) }}
        />
        <button
          type="button" 
          className="form__item"
          onClick={() => { 
            setOutcomes(+outcomes + (+outcome));
            setOutcome(0);
          }}
        >
          Add outcome
        </button>
      </form>
    </div>
  );
}

export default Outcomes;
