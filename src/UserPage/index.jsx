import Budget from '../Budget';
import Outcomes from '../Outcomes';

const UserPage = (props) => {
  console.log(props.credentials);
  console.log(props.data);
  return(
    <div>
      <Budget />
      <Outcomes />
    </div>
  );
};

export default UserPage;
