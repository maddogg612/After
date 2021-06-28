/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { serviceState } from '../../slices/chooseServiceSlice';

const ServicePlanSubmit = () => {
  const state = useSelector(serviceState);
  const history = useHistory();
  console.log('state in submit component', state);
  const submitToDb = () => {
    fetch('/api/plan', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/JSON',
      },
      body: JSON.stringify(state.service),
    });
    history.push('/dashboard');
  };

  return (
    <div>
      Are you ready to submit your arrangements?
      <button onClick={submitToDb}>Submit</button>
    </div>
  );
};

export default ServicePlanSubmit;
