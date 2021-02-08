const Budget = () => {
  const budget = 500;
  return(
    <div className="Budget__container App__half-container App__container_flex-columns">
      <h2>Budget:</h2>
      <div>{budget} EUR</div>
      <form className="App__container_flex-columns Add-data-form__container">
        <input type="text" placeholder="Personal token" className="form__item" />
        <input type="text" placeholder="Budget value" className="form__item" />
        <div className="Add-data-form__buttons-container">
          <button type="button" className="form__item">Define budget</button>
          <button type="button" className="form__item">Get token</button>
        </div>
      </form>
    </div>
  );
}

export default Budget;