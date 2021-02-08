const Outcomes = () => {
  const outcomes = 0;
  return(
    <div className="Outcomes__container App__half-container App__container_flex-columns">
      <h2>Outcomes:</h2>
      <div>{outcomes} EUR</div>
      <form className="App__container_flex-columns Add-data-form__container">
        <input type="text" placeholder="Personal token" className="form__item" />
        <input type="number" placeholder="Outcome value" className="form__item" />
        <button type="button" className="form__item">Add outcome</button>
      </form>
    </div>
  );
}

export default Outcomes;