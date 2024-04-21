import React from 'react'
import { useDispatch } from 'react-redux';
import { sendUserAuthRequest } from '../../api-helper/api-helpers';
import { userActions } from '../../store';
import AuthForm from './AuthForm'
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onResponseRecived = (data) => {
    dispatch(userActions.login());
    localStorage.setItem("userId", data.id);
    navigate('/user')
  }
  const getData = (data) => {
    sendUserAuthRequest(data.inputs, data.signup)
      .then(onResponseRecived)
      .catch(err => { console.log(err) })
  };
  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={false} />
    </div>
  )
}

export default Auth
