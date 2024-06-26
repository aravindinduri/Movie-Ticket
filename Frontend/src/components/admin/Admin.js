import React from 'react'
import { useDispatch } from 'react-redux'
import { sendAdminAuthRequest } from '../../api-helper/api-helpers'
import { adminActions } from '../../store'
import AuthForm from '../auth/AuthForm'
import { useNavigate } from 'react-router-dom'
const Admin = () => {
  const navigate = useNavigate()
  const dispatch=useDispatch();
  const onResponseRecived=(data)=>{
    console.log(data);
    dispatch(adminActions.login());
    localStorage.setItem("adminId",data.id);
    localStorage.setItem("token",data.token);
    navigate('/user-admin')
  }

   const getData=(data)=>{
    console.log("admin",data)
    sendAdminAuthRequest(data.inputs)
    .then(onResponseRecived)
      .catch((err)=>console.log(err))
    }
  

  return (
    <div>
      <AuthForm onSubmit={getData } isAdmin={true}/>
    </div>
  )
}

export default Admin
