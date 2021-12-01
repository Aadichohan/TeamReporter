import {Routes as AppRoutes, Route, BrowserRouter} from 'react-router-dom'
import Login from '../pages/authpages/Login';
import Signup from '../pages/authpages/Signup';
import Home from '../pages/teamplate/Home/Home';
import Team from "../pages/mainpages/Team";



const Routing = () =>{
 return(
    <BrowserRouter>
     <AppRoutes>
       <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>} />
       <Route path="/signup" element={<Signup/>} />
       <Route path="/team" element={<Team/>} />
     </AppRoutes>
     </BrowserRouter>
 )
}
export default Routing;