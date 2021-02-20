import React, { useState, useEffect } from 'react';
import Budget from '../Budget';
import Outcomes from '../Outcomes';
import { FirestoreMutation } from '@react-firebase/firestore';

const UserPage = (props) => {
  //const budget = props.data && props.data.budget ? props.data.budget : 0;
  const [budget, setBudget] = useState(props.data && props.data.budget ? props.data.budget : 0);
  const outcomes = props.data && props.data.outcomes ? props.data.outcomes : 0;
  console.log(props.credentials);

  useEffect(() => {
    setBudget(props.data && props.data.budget ? props.data.budget : 0);
  }, [props.data && props.data.budget ? props.data.budget : 0]);
  return (
    <div>
      <FirestoreMutation
         type="set"
          path={`/wallet_budget_values/${props.credentials.user.uid}`}
      >
        {({ runMutation }) => {
          console.log(budget);
          return (
            <Budget
              dbBudget={budget}
              runMutation={runMutation}
            />
          );
        }}
      </FirestoreMutation>
    </div>
  );
/*  return(
    <div>
      <Budget
        dbBudget={budget}
        userId={props.credentials.user.uid}
      />
      <Outcomes
        dbOutcomes={outcomes}
        userId={props.credentials.user.uid}
      />
    </div>
  );*/
};

export default UserPage;
