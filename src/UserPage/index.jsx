import Budget from '../Budget';
import Outcomes from '../Outcomes';

const UserPage = (props) => {
  const budget = props.data && props.data.budget ? props.data.budget : 0;
  const outcomes = props.data && props.data.outcomes ? props.data.outcomes : 0;
  return(
    <div>
      <Budget dbBudget={budget} />
      <Outcomes dbOutcomes={outcomes} />
    </div>
  );
};

export default UserPage;
