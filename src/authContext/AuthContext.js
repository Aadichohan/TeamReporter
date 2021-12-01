import React,{useContext, useState, useEffect} from 'react';
import {auth} from '../fb_auth/firebase-config'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import Signup from '../pages/authpages/Signup';
const AuthContext = React.createContext({
 isLoggedIn : false,
 onLogin : ()=>{},
 onLogOut : () =>{}
});


export const useAuth = () => {
    return useContext(AuthContext)
}

export  function AuthProvider({children}) {
    console.log('children ',children );
    const [currentUser, setCurrentUser] = useState();

    const register = (email, password) => {

    return  createUserWithEmailAndPassword(auth, email, password)

    }   
     const login = (email, password) => {

    return  signInWithEmailAndPassword(auth, email, password)

    }

    useEffect(() => {
        
      const unSubscribe =  auth.onAuthStateChanged(user=>{
            setCurrentUser(user)
        })
        return unSubscribe;
    }, []);
    const val = {
    currentUser,
    register, 
    login
    }
    return (
        <AuthContext.Provider value={val}>
          {children}
        </AuthContext.Provider>
    )
}
