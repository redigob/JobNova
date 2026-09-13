import { faHeart, faHeartCircleCheck, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './findJobs.css'
import { useContext, useEffect, useState } from "react";
import JobContext from "./JobContext";

const FindJobs = () => {
    const [count,setCount] = useState(0)
    const {jobs,loggedin,profile} = useContext(JobContext)
    useEffect(()=>{
       const tempJobs = jobs
    },[])
    console.log(jobs)
    return (
        <div className="findjobs">
            <div>
                <p>Find Your Next Opportunity</p>
                <p>Discover jobs that match your skills and goals. </p>
                <div>
                    <FontAwesomeIcon icon={faSearch}/>
                    <input placeholder="Job title, skill, or company"></input>
                    <button>Search</button>
                </div>
            </div>
            <div>
                <div>
                    <h2>Filter Jobs</h2>
                    <p>Location : </p>
                    <label name="location">
                        <div>
                            <input type="radio" name="location"/>
                            <p>Remote</p>
                        </div>
                        <div>
                            <input type="radio" name="location"/>
                            <p>On-Site</p>
                        </div>
                        <div>
                            <input type="radio" name="location"/>
                            <p>Hybrid</p>
                        </div>
                    </label>

                    <p>Job type :</p>
                    <label name="jobtype">
                        <div>
                            <input type="radio" name="jobtype"/>
                            <p>Full-time</p>
                        </div>
                        <div>
                            <input type="radio" name="jobtype"/>
                            <p>Part-time</p>
                        </div>
                        <div>
                            <input type="radio" name="jobtype"/>
                            <p>Internship</p>
                        </div>
                    </label>

                    <p>Experience :</p>
                    <label name="experience">
                        <div>
                            <input type="radio" name="experience"/>
                            <p>Entry-level</p>
                        </div>
                        <div>
                            <input type="radio" name="experience"/>
                            <p>Mid-level</p>
                        </div>
                        <div>
                            <input type="radio" name="experience"/>
                            <p>Senior</p>
                        </div>
                    </label>

                    <p>Salaly :</p>
                    <label name="jobtype">
                        <div>
                            <input type="radio" name="salary"/>
                            <p>Any</p>
                        </div>
                        <div>
                            <input type="radio" name="salary"/>
                            <p>10k+</p>
                        </div>
                        <div>
                            <input type="radio" name="salary"/>
                            <p>20+</p>
                        </div>
                    </label>

                    <button>Clear Filter</button>
                </div>
                <div>
                    <p>{count} Available Jobs</p>
                    <div>
                       {jobs && jobs.map((jo)=>(
                        <div className="jo">
                            <div>
                                <p>💼 {jo.workType}</p>
                                <p><FontAwesomeIcon icon={jo.liked ? faHeartCircleCheck : faHeart}/></p>
                            </div>
                            <div>
                                <img src={jo.logo} />
                                <div>
                                    <p>{jo.company}</p>
                                   <p>{jo.title}</p>
                                   <p>📍 {jo.location}</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>Skills: </p>
                                    <div>
                                    {[1,2,3].map((i)=>(
                                            <p>{jo.skills[i]}</p>
                                        ))}
                                    </div>
                                </div>
                                <p> Salary: {jo.minSalary} ETB - {jo.maxSalary} ETB</p>
                             </div>
                            <div className="match">
                                {loggedin ? 
                                   (profile.length!=0 ?
                                        <div>
                                            <p>match</p>
                                            <p>View Job →</p>
                                        </div>: <p>🔒 Complete your profile to see match</p>
                                    ) :
                                 <p>🔒 Log In to see a match</p>}
                            </div>
                            <p>posted {jo.postedDate}</p>
                        </div>
                       ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default FindJobs;