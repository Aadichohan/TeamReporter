import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../authContext/AuthContext';
export default function PrivateRoute({ Element, ...rest}) {
    const {currentUser} = useAuth();
    const navigate = Navigate();

    // const Private = ({ auth: { currentUser }, children }) => {
    //     return currentUser ? children : <Navigate to="/login" />;
    //   };
    return (
        <Route
            {...rest}
            render = {props=>{
                currentUser ? <Element {...props}/> : <Navigate to="/login" />
            }}
         >
        </Route>
    )
}
