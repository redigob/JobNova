import { faHeart, faHeartCircleCheck, faSearch,faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './findJobs.css'
import { use, useContext, useEffect, useState } from "react";
import JobContext from "./JobContext";
import { useNavigate } from "react-router-dom";

const FindJobs = () => {
    const {calculateMatch,handleLike,filter,setFilter,search,setSearch,jobs,setJobs,loggedin,profile} = useContext(JobContext)
    let tempJobs = jobs;
    const [showlong,setShowlong] = useState(false)
    const navigate = useNavigate()
    console.log(jobs)
    

    if(filter.location){
        tempJobs = tempJobs.filter((job)=>job.workType==filter.location)
    }
    if(filter.jobtype){
        tempJobs = tempJobs.filter((job)=>job.employmentType==filter.jobtype)
    }
    if(filter.experience){
        tempJobs = tempJobs.filter((job)=>job.experience==filter.experience)
    }
    if(filter.category){
        tempJobs = tempJobs.filter((job)=>job.category.toLowerCase()==filter.category.toLowerCase())
    }
    if(filter.salary.length!=0){ 
        if(filter.salary.length==2){
          tempJobs = tempJobs.filter((job)=>(job.minSalary<=filter.salary[1] ))    
        }
        else{
          tempJobs = tempJobs.filter((job)=>(job.minSalary>=filter.salary[0] ))
        }
    }

    

    tempJobs = tempJobs.filter(job=>(
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase()) 
    ))

    

    return (
        <div className="findjobs">
            <div>
                <p>Find Your Next Opportunity</p>
                <p>Discover jobs that match your skills and goals. </p>
                <div>
                    <FontAwesomeIcon icon={faSearch}/>
                    <input placeholder="Job title, or company" value={search} onChange={(e)=>setSearch(e.target.value)}></input>
                    <button>Search</button>
                </div>
            </div>
            <div>
                <div className={showlong ? "long" : ""}>
                    <h2>Filter Jobs<span onClick={()=>(setShowlong(!showlong))}><FontAwesomeIcon icon={showlong ? faArrowUp :faArrowDown} /></span></h2>
                    <p>Location : </p>
                    <label name="location">
                        <div>
                            <input checked={filter.location==""? true : false} type="radio" name="location" onClick={()=>setFilter({...filter,location:''})}/>
                            <p>All</p>
                        </div>
                        <div>
                            <input checked={filter.location=="Remote"? true : false} type="radio" name="location" onClick={()=>setFilter({...filter,location:"Remote"})}/>
                            <p>Remote</p>
                        </div>
                        <div>
                            <input checked={filter.location=="On-site"? true : false} type="radio" name="location" onClick={()=>setFilter({...filter,location:"On-site"})}/>
                            <p>On-Site</p>
                        </div>
                        <div>
                            <input checked={filter.location=="Hybrid"? true : false} type="radio" name="location" onClick={()=>setFilter({...filter,location:"Hybrid"})}/>
                            <p>Hybrid</p>
                        </div>
                    </label>

                    <p>Job type :</p>
                    <label name="jobtype">
                        <div>
                            <input checked={filter.jobtype==""? true : false} type="radio" name="jobtype" onClick={()=>setFilter({...filter,jobtype:''})}/>
                            <p>All</p>
                        </div>
                        <div>
                            <input checked={filter.jobtype=="Full-time"? true : false} type="radio" name="jobtype" onClick={()=>setFilter({...filter,jobtype:"Full-time"})}/>
                            <p>Full-time</p>
                        </div>
                        <div>
                            <input checked={filter.jobtype=="Part-time"? true : false} type="radio" name="jobtype" onClick={()=>setFilter({...filter,jobtype:"Part-time"})}/>
                            <p>Part-time</p>
                        </div>
                        <div>
                            <input checked={filter.jobtype=="Internship"? true : false} type="radio" name="jobtype" onClick={()=>setFilter({...filter,jobtype:"Internship"})}/>
                            <p>Internship</p>
                        </div>
                    </label>

                    <p>Experience :</p>
                    <label name="experience">
                        <div>
                            <input checked={filter.experience==""? true : false} type="radio" name="experience" onClick={()=>setFilter({...filter,experience:''})}/>
                            <p>All</p>
                        </div>
                        <div>
                            <input checked={filter.experience=="Entry Level"? true : false} type="radio" name="experience" onClick={()=>setFilter({...filter,experience:"Entry Level"})}/>
                            <p>Entry-level</p>
                        </div>
                        <div>
                            <input checked={filter.experience=="Mid Level"? true : false} type="radio" name="experience" onClick={()=>setFilter({...filter,experience:"Mid Level"})}/>
                            <p>Mid-level</p>
                        </div>
                        <div>
                            <input checked={filter.experience=="Senior"? true : false} type="radio" name="experience" onClick={()=>setFilter({...filter,experience:"Senior"})}/>
                            <p>Senior</p>
                        </div>
                    </label>

                    <p>Salaly :</p>
                    <label name="jobtype">
                        <div>
                            <input checked={filter.salary.length==0 ? true : false} type="radio" name="salary" onChange={()=>setFilter({...filter,salary:[]})}/>
                            <p>All</p>
                        </div>
                        <div>
                            <input checked={filter.salary[0]==0 ? true : false} type="radio" name="salary" onChange={()=>setFilter({...filter,salary:[0,15000]})}/>
                            <p>Under 15,000 ETB</p>
                        </div>
                        <div>
                            <input checked={filter.salary[0]==15000 ? true : false} type="radio" name="salary" onChange={()=>setFilter({...filter,salary:[15000]})}/>
                            <p>15,000+ ETB</p>
                        </div>
                        <div>
                            <input checked={filter.salary[0]==20000 ? true : false} type="radio" name="salary" onChange={()=>setFilter({...filter,salary:[20000]})}/>
                            <p>20,000+ ETB</p>
                        </div>
                        <div>
                            <input checked={filter.salary[0]==30000 ? true : false} type="radio" name="salary" onChange={()=>setFilter({...filter,salary:[30000]})}/>
                            <p>30,000+ ETB</p>
                        </div>
                    </label>

                    <p>Category:</p>
                    <label>
                        <div>
                            <input checked={filter.category=='' ? true : false} type="radio" name="category" onChange={()=>setFilter({...filter,category:''})}/>
                            <p>All</p>
                        </div>
                        <div>
                            <input checked={filter.category=='technology' ? true : false} type="radio" name="category" onChange={()=>setFilter({...filter,category:'technology'})}/>
                            <p>Technology</p>
                        </div>
                        <div>
                            <input checked={filter.category=='design' ? true : false} type="radio" name="category" onChange={()=>setFilter({...filter,category:'design'})}/>
                            <p>Design</p>
                        </div>
                        <div>
                            <input checked={filter.category=='business' ? true : false}  type="radio" name="category" onChange={()=>setFilter({...filter,category:'business'})}/>
                            <p>Business</p>
                        </div>
                        <div>
                            <input checked={filter.category=='marketing' ? true : false}  type="radio" name="category" onChange={()=>setFilter({...filter,category:'marketing'})}/>
                            <p>Marketing</p>
                        </div>
                        <div>
                            <input checked={filter.category=='finance' ? true : false} type="radio" name="category" onChange={()=>setFilter({...filter,category:'finance'})}/>
                            <p>Finance</p>
                        </div>
                        <div>
                            <input checked={filter.category=='data' ? true : false} type="radio" name="category" onChange={()=>setFilter({...filter,category:'data'})}/>
                            <p>Data</p>
                        </div>
                        <div>
                            <input checked={filter.category=='fashion' ? true : false} type="radio" name="category" onChange={()=>setFilter({...filter,category:'fashion'})}/>
                            <p>Fashion</p>
                        </div>
                    </label>

                    <button onClick={()=>setFilter({location:'',jobtype:'',experience:'',salary:[],category:''})}>Clear Filter</button>
                </div>
                <div>
                    <p>{tempJobs.length} Available Jobs</p>
                    <div>
                       {tempJobs && tempJobs.map((jo)=>(
                        <div className="jo" >
                            <div >
                                <p>💼 {jo.workType}</p>
                                <p>{loggedin ? <FontAwesomeIcon icon={jo.liked ? faHeartCircleCheck : faHeart} style={{cursor:"pointer"}} onClick={()=>handleLike(jo)}/> :"" }</p>
                            </div>
                            <div style={{cursor:"pointer"}} onClick={()=>navigate(`jobdetail/${jo.id}`)}>
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
                                   (profile.name ?
                                        <div>
                                            <p>{calculateMatch(jo)}% match</p>
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