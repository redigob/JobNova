import { Link, useLocation } from "react-router-dom";
import './Navbar.css'
import { useContext, useEffect, useState } from "react";
import JobContext from "./JobContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHeart } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const location = useLocation()
    const [showfull,setShowfull] = useState(false)
    const {selected,setSelected,loggedin,show,setShow,setLoggedin,signupdata,setSignupData,setLogindata} = useContext(JobContext)
    const navigate = useNavigate()

    useEffect(()=>{
      setShowfull(false)
    },[location.pathname])

    return (
        <div>
           {!loggedin ? 
           <div className="navbar">
                <h1>JobNova</h1>
                <div>
                    <Link className={selected == "Home" ? "links selected": "links"} to={"/"} onClick={()=>setSelected("Home")}>Home</Link>
                    <Link className={selected == "find" ? "links selected": "links"} to={"/find"}  onClick={()=>setSelected("find")}>Find Jobs</Link>
                    <Link className={selected == "company" ? "links selected": "links"} to={"/company"}  onClick={()=>setSelected("company")}>Company</Link>
                </div>
                <div>
                    <p className={selected == "login" ? "links selected": "links"}  onClick={()=>(setSelected("login"),location.pathname!="/" ? navigate("/",{state:{scrollTo:window.innerWidth <= 1060 ? 2500 : 2300}}) : window.scrollTo({top:window.innerWidth <= 1060 ? 2500 : 2300,behavior:"smooth"}))}>Log In</p>
                    <p className={selected == "signup" ? "links selected": "links"}  onClick={()=>(setSelected("signup"),location.pathname!="/" ? navigate("/",{state:{scrollTo:window.innerWidth <= 1060 ? 2500 : 2300}}) : window.scrollTo({top:window.innerWidth <= 1060 ? 2500 : 2300,behavior:"smooth"}))}>Sign Up</p>
                </div>
                <FontAwesomeIcon icon={faBars} onClick={()=>setShowfull(!showfull)} />               
                <div className={showfull ? "bar before full" : "bar before"}>
                    <Link className={selected == "Home" ? "links selected": "links"} to={"/"} onClick={()=>setSelected("Home")}>Home</Link>
                    <Link className={selected == "find" ? "links selected": "links"} to={"/find"}  onClick={()=>setSelected("find")}>Find Jobs</Link>
                    <Link className={selected == "company" ? "links selected": "links"} to={"/company"}  onClick={()=>setSelected("company")}>Company</Link>
                    <p className={selected == "login" ? "links selected": "links"}  onClick={()=>(setSelected("login"),location.pathname!="/" ? navigate("/",{state:{scrollTo: window.innerWidth <= 470 ? 3500 : window.innerWidth <= 620 ? 4000 :3200}}) : window.scrollTo({top:window.innerWidth <= 470 ? 3500 : window.innerWidth <= 620 ? 4000 :3200,behavior:"smooth"}))}>Log In</p>
                    <p className={selected == "signup" ? "links selected": "links"}  onClick={()=>(setSelected("signup"),location.pathname!="/" ? navigate("/",{state:{scrollTo: window.innerWidth <= 470 ? 3500 : window.innerWidth <= 620 ? 4000 :3200}}) : window.scrollTo({top:window.innerWidth <= 470 ? 3500 : window.innerWidth <= 620 ? 4000 :3200,behavior:"smooth"}))}>Sign In</p>
                </div>
            </div> :
            <div className="navbar">
                <h1>JobNova</h1>
                <div>
                    <Link className={selected == "Dashboard" ? "links selected": "links"} to={"/"} onClick={()=>setSelected("Dashboard")}>Dashboard</Link>
                    <Link className={selected == "find" ? "links selected": "links"} to={"/find"}  onClick={()=>setSelected("find")}>Find Jobs</Link>
                    <Link className={selected == "company" ? "links selected": "links"} to={"/company"}  onClick={()=>setSelected("company")}>Company</Link>
                    <Link className={selected == "applications" ? "links selected": "links"} to={"/applications"}  onClick={()=>setSelected("applications")}>Applications</Link>
                </div>
                <div>
                    <Link className={selected == "saved" ? "links saved selected": "links saved"} to={"/saved"}  onClick={()=>setSelected("saved")}> 💗 Saved</Link>
                    <button className={selected == "Profile" ? "links selected": "links"}  onClick={()=>setShow(!show)}>Profile <span>▾</span></button>  
                    <div className={show? "profilehumburger show" : "profilehumburger"}>
                        <p>👤 {signupdata.username}</p>
                        <Link className="link" to={"/myprofile"} onClick={()=>setSelected("myprofile")}>My Profile</Link>
                        <Link className="link" to={"/"} onClick={()=>(setLoggedin(false),setLogindata({}))}>Log Out</Link>
                    </div>
                </div>
                <FontAwesomeIcon icon={faBars} onClick={()=>setShowfull(!showfull)} />               
                <div className={showfull ? "bar after full" : "bar after"}>
                    <p>👤 {signupdata.username}</p>
                    <Link className={selected == "Dashboard" ? "links selected": "links"} to={"/"} onClick={()=>setSelected("Dashboard")}>Dashboard</Link>
                    <Link className={selected == "find" ? "links selected": "links"} to={"/find"}  onClick={()=>setSelected("find")}>Find Jobs</Link>
                    <Link className={selected == "company" ? "links selected": "links"} to={"/company"}  onClick={()=>setSelected("company")}>Company</Link>
                    <Link className={selected == "applications" ? "links selected": "links"} to={"/applications"}  onClick={()=>setSelected("applications")}>Applications</Link>
                    <Link className={selected == "saved" ? "links selected": "links"} to={"/saved"}  onClick={()=>setSelected("saved")}> Saved Jobs</Link>
                    <Link className={selected == "myprofile" ? "links selected" : "links"} to={"/myprofile"} onClick={()=>setSelected("myprofile")}>My Profile</Link>
                    <Link className="links" to={"/"} onClick={()=>(setLoggedin(false),setLogindata({}))}>Log Out</Link>
                </div>
            </div> 
            }
        </div>
        
    );
}
 
export default Navbar;