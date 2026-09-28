import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import JobContext from "./JobContext";
import './Companyinfo.css'
import { Link } from "react-router-dom";

const Companyinfo = () => {

   const {id} =  useParams()
   const {companies,loggedin} = useContext(JobContext)
   const job=companies.find((job)=>job.id==id)
   const navigate = useNavigate()
   console.log(job)
    return (
        <div className="companyinfo">
            {job && 
            <div>
                <div className="header">
                    <img src={job.img} />
                    <div>
                        <h1>{job.name}</h1>
                        <p>{job.industry} · {job.location}</p>
                        <p>{job.description}</p>
                        <button className="link" onClick={()=>navigate(`${job.website}`)}>View Website ↗</button>
                    </div>
                </div>
                <div>
                    <h2>Company Overview</h2>
                    <div>
                        <div>
                            <p>INDUSTRY</p>
                            <p>{job.industry}</p>
                        </div>
                        <div>
                            <p>LOCATION</p>
                            <p>{job.location}</p>
                        </div>
                        <div>
                            <p>OPEN POSITIONS</p>
                            <p>{job.positions.length} opportunities</p>
                        </div>
                        <div>
                            <p>WESBITE</p>
                            <button className="link" onClick={()=>navigate(`${job.website}`)}>View Website ↗</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Open Positions</h2>
                    <p>{job.positions.length} {job.positions.length > 2 ? "Oportunities" : "opportunity"} at {job.name}</p>
                    <div>
                        {job.positions.map((jo)=>(
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
                <div>
                    <h2>Explore More Companies</h2>
                    <div></div>
                </div>
            </div>
         }
        </div>
    );
}
 
export default Companyinfo;