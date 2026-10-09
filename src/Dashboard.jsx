import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import './Dashboard.css'
import { useContext } from "react";
import JobContext from "./JobContext";
const Dashboard = () => {
    const navigate=useNavigate()
    const {setSearch,setSelected,setFilter,filter} = useContext(JobContext)

    function handleFind(category){
        setSelected("find")
        setFilter({...filter,category:category})
        navigate("/find")
    }
    return (
        <div className="dashboard">
            <div>
                <h2>Welcome to JobNova</h2>
                <p>Your next opportunity starts here.</p>
                <p>Build your profile to discover opportunities that match your skills and interests.</p>
                <button  onClick={()=>navigate("/myprofile")}>Build My Profile</button>
            </div>
            <div>
                <h2>YOUR JOBNOVA JOURNEY</h2>
                <div>
                    <div>
                        <p>1</p>
                        <h3>Build Profile</h3>
                        <p>Tell us about your education, skills, experience, and career interests. The more we know about you, the better we can understand what opportunities fit you.</p>
                        <p className="link" onClick={()=>(setSelected("myprofile"),navigate("/myprofile"))} >→ Get started</p>
                    </div>

                    <div>
                        <p>2</p>
                        <h3>Discover Companies</h3>
                        <p>Get to know the companies behind the opportunities. Explore employers, learn about their work, and find organizations where you can grow.</p>
                        <p className="link" onClick={()=>(setSelected("career"),navigate("/career"))}>→ Explore Companies</p>
                    </div>

                    <div>
                        <p>3</p>
                        <h3>Discover Jobs</h3>
                        <p>Explore opportunities from different companies and industries. Search by job title, skill, or company and find roles that match what you're looking for.</p>
                        <p className="link" onClick={()=>(setSelected("find"),navigate("/find"))}>→ Explore jobs</p>
                    </div>

                     
                </div>
            </div>
            <div>
                <h2>EXPLORE OPPORTUNITIES</h2>
                <p>Start exploring jobs that could be the beginning of your next career move.</p>
                <div>
                    <input 
                      type="text"
                      placeholder="Search jobs by title, skill or company"
                      onChange={(e)=>setSearch(e.target.value)}
                    ></input>
                    <FontAwesomeIcon icon={faSearch} onClick={()=>navigate("/find")}/>
                </div>
            </div>
            <div>
                <h2>Find Your Career Direction</h2>
                <p>Not sure where you want to go? </p>
                <p>Explore career paths based on what you enjoy and what you can do.</p>
                <div>
                    <div>
                        <img src='images/code.jpg'/>
                        <div>
                            <p>Start a Tech Career </p>
                            <p>Build the future with code.  </p>
                            <p onClick={()=>handleFind("technology")}>Explore path →  </p>
                        </div>
                    </div>

                    <div>
                        <img src='images/data.jpg'/>
                        <div>
                            <p>Work With Data</p>
                            <p>Turn information into smart decisions.</p>
                            <p onClick={()=>handleFind("data")}>Explore path →  </p>
                        </div>
                    </div>

                    <div>
                        <img src='images/uiux.jpg'/>
                        <div>
                            <p>Build & Create   </p>
                            <p>Turn ideas into meaningful experiences.</p>
                            <p onClick={()=>handleFind("design")}>Explore path →  </p>
                        </div>
                    </div>

                    <div>
                        <img src='images/business.jpg'/>
                        <div>
                            <p>Grow in Business </p>
                            <p>Build the future with code.  </p>
                            <p onClick={()=>handleFind("business")}>Explore path →  </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;