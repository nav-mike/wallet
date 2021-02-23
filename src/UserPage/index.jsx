import React, { useEffect, useReducer } from 'react';
import Budget from '../Budget';
import Outcomes from '../Outcomes';

import initialState from './state';
import { LOAD_DATA } from './constants';
import { reducer } from './reducer';

const stateClass = (budget, outcomes) => {
  const diff = budget - outcomes;
  let result = 'App__container_';
  if (diff <= 0) {
    result = `${result}death`;
  } else if (diff > budget / 2) {
    result = `${result}ok`;
  } else if (diff > budget * 3 / 4) {
    result = `${result}warning`;
  } else {
    result = `${result}danger`;
  }
  return result;
};

const UserPage = (props) => {
  const [data, dispatch] = useReducer(reducer, initialState);
  const collection = '/wallet_budget_values';
  const db = props.firebase.firestore();
  const doc = props.credentials.user.uid;

  useEffect(() => {
    const dbRef = db.collection(collection).doc(doc)
    dbRef.get()
      .then(async result => {
        let payload = {};
        if (result.exists) {
          payload = result.data();
        } else {
          payload = initialState;
          await dbRef.set(payload)
        }
        dispatch({type: LOAD_DATA, payload: payload});
      });
  }, [db, doc]);
  return (
    <div className="user-page__container">
      <Budget
        value={data.budget}
        dispatch={dispatch}
        doc={doc}
        collection={collection}
        db={db}
      />
      <Outcomes
        value={data.outcomes}
        dispatch={dispatch}
        doc={doc}
        collection={collection}
        db={db}
        wrapperClassName={stateClass(data.budget, data.outcomes)}
      />
    </div>
  );
};

export default UserPage;
