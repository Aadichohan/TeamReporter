
import './App.css';
import Routing from './Routing/Routing';
// import {FBAuthHandler} from './authHandler/AuthHandler'
 import { AuthProvider } from './authContext/AuthContext';
import Signup from './pages/authpages/Signup';
function App() {
  // let returnAuth = FBAuthHandler();
  // let isAuth = AuthStateChange();
  //  console.log('App Auth ',returnAuth);
  const childComponent = {
    childeren: 'signup'
  }
   return (
    <>
   {/* <AuthProvider > */}
       {/* <Signup />
   </AuthProvider> */}
    <Routing/>
    
    </>
  );
}

export default App;
