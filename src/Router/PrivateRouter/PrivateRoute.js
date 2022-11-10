import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Spinner from '../../Pages/Spinner/Spinner';

const PrivateRoute = ({children}) => {
    const {user,loader}= useContext(AuthContext);
    const location = useLocation();
    if(loader){
        return <Spinner></Spinner>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from : location}} replace></Navigate>
   
};

export default PrivateRoute;