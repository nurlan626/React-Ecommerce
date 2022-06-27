import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const location = useLocation();
    const user = useSelector(state => state.user.value)

    if(!user){
        return <Navigate to="/login" state={{path: location.pathname}}/>
    }
  return children
}

export default PrivateRoutes