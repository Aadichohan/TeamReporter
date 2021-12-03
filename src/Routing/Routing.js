import {Routes as AppRoutes, Route, BrowserRouter} from 'react-router-dom'
import Login from '../pages/authpages/Login';
import Signup from '../pages/authpages/Signup';
import Home from '../pages/teamplate/Home/Home';
import Team from "../pages/mainpages/Team";
import Profile from "../pages/profile/Profile"
import Friendlist from "../pages/friendlist/Friendlist"
import Edit from "../pages/edit/Edit"



const Routing = () =>{
 return(
    <BrowserRouter>
     <AppRoutes>
       <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>} />
       <Route path="/signup" element={<Signup/>} />
       <Route path="/team" element={<Team/>} />
       <Route path="/profile" element={<Profile/>} />
       <Route path="/Friendlist" element={<Friendlist/>} />
       <Route path="/Edit" element={<Edit/>} />

     </AppRoutes>
     </BrowserRouter>
 )
}
export default Routing;