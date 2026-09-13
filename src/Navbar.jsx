import { Link, useLocation } from "react-router-dom";
import './Navbar.css'
import { useContext, useState } from "react";
import JobContext from "./JobContext";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const location = useLocation()
    const [selected,setSelected] = useState("/")
    const {loggedin,show,setShow,setLoggedin,signupdata,setSignupData,setLogindata} = useContext(JobContext)
    const navigate = useNavigate()
    console.log(selected)
    console.log(location.pathname)
    console.log(loggedin)
    return (
        <div>
           {!loggedin ? 
           <div className="navbar">
                <h1>JobNova</h1>
                <div>
                    <Link className={selected == "Home" ? "links selected": "links"} to={"/"} onClick={()=>setSelected("Home")}>Home</Link>
                    <Link className={selected == "find" ? "links selected": "links"} to={"/find"}  onClick={()=>setSelected("find")}>Find Jobs</Link>
                    <Link className={selected == "discover" ? "links selected": "links"} to={"/discover"}  onClick={()=>setSelected("discover")}>Discover</Link>
                    <Link className={selected == "company" ? "links selected": "links"} to={"/company"}  onClick={()=>setSelected("company")}>Company</Link>
                </div>
                <div>
                    <p className={selected == "login" ? "links selected": "links"}  onClick={()=>(setSelected("login"),location.pathname!="/" ? navigate("/",{state:{scrollTo:2300}}) : window.scrollTo({top:2300,behavior:"smooth"}))}>Log In</p>
                    <p className={selected == "signup" ? "links selected": "links"}  onClick={()=>(setSelected("signup"),location.pathname!="/" ? navigate("/",{state:{scrollTo:2300}}) : window.scrollTo({top:2300,behavior:"smooth"}))}>Sign up</p>               
                </div>
            </div> :
            <div className="navbar">
                <h1>JobNova</h1>
                <div>
                    <Link className={selected == "Dashboard" ? "links selected": "links"} to={"/"} onClick={()=>setSelected("Dashboard")}>Dashboard</Link>
                    <Link className={selected == "find" ? "links selected": "links"} to={"/find"}  onClick={()=>setSelected("find")}>Find Jobs</Link>
                    <Link className={selected == "career" ? "links selected": "links"} to={"/career"}  onClick={()=>setSelected("career")}>Career Roadmap</Link>
                    <Link className={selected == "applications" ? "links selected": "links"} to={"/applications"}  onClick={()=>setSelected("applications")}>Applications</Link>
                </div>
                <div>
                    <Link className={selected == "notifications" ? "links selected": "links"} to={"/notifications"}  onClick={()=>setSelected("notifications")}>🔔</Link>
                    <button className={selected == "Profile" ? "links selected": "links"}  onClick={()=>setShow(!show)}>Profile <span>▾</span></button>  
                    <div className={show? "profilehumburger show" : "profilehumburger"}>
                        <p>👤 {signupdata.username}</p>
                        <Link className="link" to={"/myprofile"} onClick={()=>setSelected("myprofile")}>My Profile</Link>
                        <Link className="link" to={"/"} onClick={()=>(setLoggedin(false),setLogindata({}))}>Log Out</Link>
                    </div>
                </div>
            </div> 
            }
        </div>
        
    );
}
 
export default Navbar;