import { onAuthStateChanged, getAuth, signOut, } from 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import {useNavigate} from 'react-router-dom'
import {auth} from '../fb_auth/firebase-config';
// import AuthContext from '../authContext/AuthContext';
import Loading from '../pages/Loading';
import { useState, useEffect} from 'react';

  
export const LogOutHandler =  async (e) => {
  
    const auth = getAuth();
signOut(auth).then(() => {
    // FBAuthHandler()
     localStorage.setItem('token',null)
    console.log('Logout');
}).catch((error) => {});
   
}


export const AuthStateChange = () =>{
   
    onAuthStateChanged(auth, (user)=>{
       
        if (user) {
                console.log('token',user.accessToken)
               // isLoggedIn
             //   localStorage.setItem('token',user.accessToken)
                // localStorage.setItem('isLoggedIn','true')
            }
            else{
            console.log('token',user)
             //   localStorage.setItem('token ',user)
            //    localStorage.setItem('isLoggedIn ','false')
               
            }
        
    })
}


export const FBAuthHandler = () => {
    const [user, loading, error] = useAuthState(auth);
    // const [isAuth={notLoaded:true}, setAuth] = useState(null);
   // let navigate = useNavigate();
    useEffect(() => {
console.log('loading ',loading)
        // if (loading) {
        //  <Loading/>
        // }

        if (user) {         
            localStorage.setItem('token',user.accessToken)
        }
        else{
            localStorage.setItem('token',user)
        }

      }, [user,loading]);
    // let token =  localStorage.getItem('token');
    // console.log(token,' token ')
 }

 export const AuthHandle = () =>{
    let navigate = useNavigate();
    let token =  localStorage.getItem('token');
    if(token == null){
        console.log("abbc ",token);
        // FBAuthHandler();
        // navigate("/login")

    }
    else{
        navigate("/")
    }
 }


    //  export const FBAuthHandler = () => {
    //     const [user, loading, error] = useAuthState(auth);
    
    //     let navigate = useNavigate();
    //     useEffect(() => {
    //         if (loading) {
    //          <Loading/>
    //         }
    
    //         if (user) {
    
    //             localStorage.setItem('token',user.accessToken)
    //         }
    //         else{
             
    //             localStorage.setItem('token',user)   
    //         }
    //         return ()=>{
    
    //            // AuthHandle();
    //         }
    //       }, [user,loading, error]);
    
    //  }