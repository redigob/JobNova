import { Link } from "react-router-dom";
import './Navbar.css'
import { useContext, useState } from "react";
import JobContext from "./JobContext";
const Navbar = () => {
    const [selected,setSelected] = useState("")
    const {loggedin,setLoggedin,signupdata,setSignupData,setLogindata} = useContext(JobContext)
    const [show,setShow] = useState(false)
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
                    <Link className={selected == "login" ? "links selected": "links"} to={"/login"}  onClick={()=>setSelected("login")}>Log In</Link>
                    <Link className={selected == "signup" ? "links selected": "links"} to={"/signup"}  onClick={()=>setSelected("signup")}>Sign up</Link>               
                </div>
            </div> :
            <div className="navbar">
                <h1>JobNova</h1>
                <div>
                    <Link className={selected == "Home" ? "links selected": "links"} to={"/dashboard"} onClick={()=>setSelected("Home")}>Dashboard</Link>
                    <Link className={selected == "find" ? "links selected": "links"} to={"/find"}  onClick={()=>setSelected("find")}>Find Jobs</Link>
                    <Link className={selected == "career" ? "links selected": "links"} to={"/career"}  onClick={()=>setSelected("career")}>Career Roadmap</Link>
                    <Link className={selected == "applications" ? "links selected": "links"} to={"/applications"}  onClick={()=>setSelected("applications")}>Applications</Link>
                </div>
                <div>
                    <Link className={selected == "notifications" ? "links selected": "links"} to={"/notifications"}  onClick={()=>setSelected("notifications")}>🔔</Link>
                    <button className={selected == "Profile" ? "links selected": "links"}  onClick={()=>setShow(!show)}>Profile <span>▾</span></button>  
                    <div className={show? "profilehumburger show" : "profilehumburger"}>
                        <p>👤 {signupdata.username}</p>
                        <Link className="link" to={"/myprofile"}>My Profile</Link>
                        <Link className="link"  onClick={()=>(setSignupData({}),setLogindata({}))}>Log Out</Link>
                    </div>
                </div>
            </div> 
            }
        </div>
        
    );
}
 
export default Navbar;