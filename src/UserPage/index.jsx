import React, { useState, useEffect, useReducer } from 'react';
import Budget from '../Budget';
import Outcomes from '../Outcomes';
import { FirestoreMutation } from '@react-firebase/firestore';

import initialState from './state';
import { LOAD_DATA } from './constants';
import { reducer } from './reducer';

const UserPage = (props) => {
  const [data, dispatch] = useReducer(reducer, initialState);
  const collection = '/wallet_budget_values';
  const db = props.firebase.firestore();
  const doc = props.credentials.user.uid;

  useEffect(() => {
    db.collection(collection)
      .doc(doc)
      .get()
      .then(result => {
        dispatch({type: LOAD_DATA, payload: result.data()});
      })
  }, [db, doc]);
  return (
    <div>
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
      />
    </div>
  );
};

export default UserPage;
