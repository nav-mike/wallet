import React, { useState, useEffect, useReducer } from 'react';
import Budget from '../Budget';
import Outcomes from '../Outcomes';
import { FirestoreMutation } from '@react-firebase/firestore';

import initialState from './state';
import { LOAD_DATA } from './constants';
import { reducer } from './reducer';

const UserPage = (props) => {
  const [data, dispatch] = useReducer(reducer, initialState);

  console.log(props);
  useEffect(() => {
    const db = props.firebase.firestore();

    db.collection(`/wallet_budget_values`)
      .doc(props.credentials.user.uid)
      .get()
      .then(result => {
        dispatch({type: LOAD_DATA, payload: result.data()});
      })
  }, []);
  return (
    <div>
    </div>
  );
};

export default UserPage;
