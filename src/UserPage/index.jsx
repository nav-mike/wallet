import Budget from '../Budget';
import Outcomes from '../Outcomes';

const UserPage = (props) => {
  console.log(props.credentials);
  return(
    <div>
      <Budget />
      <Outcomes />
    </div>
  );
};

export default UserPage;