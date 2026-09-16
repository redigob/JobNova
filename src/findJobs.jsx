import { faHeart, faHeartCircleCheck, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './findJobs.css'
import { useContext, useEffect, useState } from "react";
import JobContext from "./JobContext";

const FindJobs = () => {
    const {jobs,setJobs,loggedin,profile} = useContext(JobContext)
    let tempJobs = jobs;
 
    const [location,setLocation] = useState('')
    const [jobtype,setJobtype] = useState('')
    const [experience,setExperience] = useState('')
    const [salary,setSalary] = useState([])

    if(location){
        tempJobs = tempJobs.filter((job)=>job.workType==location)
    }
    if(jobtype){
        tempJobs = tempJobs.filter((job)=>job.employmentType==jobtype)
    }
    if(experience){
        tempJobs = tempJobs.filter((job)=>job.experience==experience)
    }
    if(salary.length!=0){ 
        if(salary.length==2){
          tempJobs = tempJobs.filter((job)=>(job.minSalary<=salary[1] ))    
        }
        else{
          tempJobs = tempJobs.filter((job)=>(job.minSalary>=salary[0] ))
        }
    }

    function handleLike(jo){
        setJobs(jobs.map((job)=>{
            if(job.id==jo.id){
                return{...job, liked:!jo.liked}
            }
            else{
                return job
            }
        }))
    }

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
                            <input checked={location==""? true : false} type="radio" name="location" onClick={()=>setLocation("")}/>
                            <p>All</p>
                        </div>
                        <div>
                            <input type="radio" name="location" onClick={()=>setLocation("Remote")}/>
                            <p>Remote</p>
                        </div>
                        <div>
                            <input type="radio" name="location" onClick={()=>setLocation("On-site")}/>
                            <p>On-Site</p>
                        </div>
                        <div>
                            <input type="radio" name="location" onClick={()=>setLocation("Hybrid")}/>
                            <p>Hybrid</p>
                        </div>
                    </label>

                    <p>Job type :</p>
                    <label name="jobtype">
                        <div>
                            <input checked={jobtype==""? true : false} type="radio" name="jobtype" onClick={()=>setJobtype("")}/>
                            <p>All</p>
                        </div>
                        <div>
                            <input type="radio" name="jobtype" onClick={()=>setJobtype("Full-time")}/>
                            <p>Full-time</p>
                        </div>
                        <div>
                            <input type="radio" name="jobtype" onClick={()=>setJobtype("Part-time")}/>
                            <p>Part-time</p>
                        </div>
                        <div>
                            <input type="radio" name="jobtype" onClick={()=>setJobtype("Internship")}/>
                            <p>Internship</p>
                        </div>
                    </label>

                    <p>Experience :</p>
                    <label name="experience">
                        <div>
                            <input checked={experience==""? true : false} type="radio" name="experience" onClick={()=>setExperience("")}/>
                            <p>All</p>
                        </div>
                        <div>
                            <input type="radio" name="experience" onClick={()=>setExperience("Entry Level")}/>
                            <p>Entry-level</p>
                        </div>
                        <div>
                            <input type="radio" name="experience" onClick={()=>setExperience("Mid Level")}/>
                            <p>Mid-level</p>
                        </div>
                        <div>
                            <input type="radio" name="experience" onClick={()=>setExperience("Senior")}/>
                            <p>Senior</p>
                        </div>
                    </label>

                    <p>Salaly :</p>
                    <label name="jobtype">
                        <div>
                            <input checked={salary.length==0 ? true : false} type="radio" name="salary" onChange={()=>setSalary([])}/>
                            <p>All</p>
                        </div>
                        <div>
                            <input type="radio" name="salary" onChange={()=>setSalary([0,15000])}/>
                            <p>Under 15,000 ETB</p>
                        </div>
                        <div>
                            <input type="radio" name="salary" onChange={()=>setSalary([15000])}/>
                            <p>15,000+ ETB</p>
                        </div>
                        <div>
                            <input type="radio" name="salary" onChange={()=>setSalary([20000])}/>
                            <p>20,000+ ETB</p>
                        </div>
                        <div>
                            <input type="radio" name="salary" onChange={()=>setSalary([30000])}/>
                            <p>30,000+ ETB</p>
                        </div>
                    </label>

                    <button onClick={()=>(setLocation(''),setJobtype(''),setExperience(''),setSalary([]))}>Clear Filter</button>
                </div>
                <div>
                    <p>{tempJobs.length} Available Jobs</p>
                    <div>
                       {tempJobs && tempJobs.map((jo)=>(
                        <div className="jo">
                            <div>
                                <p>💼 {jo.workType}</p>
                                <p>{loggedin ? <FontAwesomeIcon icon={jo.liked ? faHeartCircleCheck : faHeart} style={{cursor:"pointer"}} onClick={()=>handleLike(jo)}/> :"" }</p>
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