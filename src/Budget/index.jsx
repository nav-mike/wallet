const Budget = () => {
  const budget = 500;
  return(
    <div className="Budget__container App__half-container App__container_flex-columns">
      <h2>Budget:</h2>
      <div>{budget} EUR</div>
      <form className="App__container_flex-columns Add-data-form__container">
        <input type="text" placeholder="Budget value" className="form__item" />
        <button type="button" className="form__item">Define budget</button>
      </form>
    </div>
  );
}

export default Budget;
