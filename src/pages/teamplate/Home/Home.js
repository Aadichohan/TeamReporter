
import {AuthStateChange, LogOutHandler, AuthHandle} from '../../../authHandler/AuthHandler';
// import {auth} from '../../../fb_auth/firebase-config';
function Home() {
  // console.log('Home',auth);
    // AuthStateChange();
  // FBAuthHandler();
  AuthHandle();
    return (
      <div className="App">
     Home
      <button onClick={()=>LogOutHandler()}>Logout</button> 
      </div>
    );
  }
  
  export default Home;