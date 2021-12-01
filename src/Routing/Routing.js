import {Routes as AppRoutes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import Login from '../pages/authpages/Login';
import Signup from '../pages/authpages/Signup';
import Home from '../pages/teamplate/Home/Home';
import { AuthProvider, useAuth } from '../authContext/AuthContext';
import PrivateRoute from './PrivateRoute';

const Routing = () =>{
  const {currentUser} = useAuth();

   const Private = ( {currentUser , children, ...rest }) => {
    return <Route {...rest} element={currentUser ? children : <Navigate to="/login" />} />
       // return currentUser ? <Route {...rest} element={children}/> : <Navigate to="/login" />;
      };  
      
      const NavLogin = () => {
    return <Navigate to="/login" />
      };
 return(
    <BrowserRouter>
    <AuthProvider >
       <AppRoutes>
         <Route path="/" element={currentUser ? Home :<NavLogin/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/signup" element={<Signup/>} />
       </AppRoutes>
     </AuthProvider>
     </BrowserRouter>
 )
}
export default Routing;