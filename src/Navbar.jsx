import { Link } from "react-router-dom";
import './Navbar.css'
import { useState } from "react";
const Navbar = () => {
    const [selected,setSelected] = useState("")

    return (
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
        </div>
    );
}
 
export default Navbar;