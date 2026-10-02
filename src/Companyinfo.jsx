import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import JobContext from "./JobContext";
import './Companyinfo.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCircleCheck,faHeart } from "@fortawesome/free-solid-svg-icons";

const Companyinfo = () => {
   const {companies,loggedin,profile} = useContext(JobContext)
   const {id:ID} = useParams()
   const id =  Number(ID)
   const explore = companies.filter((company)=>company.id > id && company.id <= id+3)
   if(id==22){
    const added = companies.find((company)=>company.id ==1)
    explore.push(added)
   }
   if(id==23){
    const added1 = companies.find((company)=>company.id ==1 )
    const added2 = companies.find((company)=>company.id ==2 )
    explore.push(added1)
    explore.push(added2)
   }
   if(id==24){
    const added1 = companies.find((company)=>company.id ==1)
    const added2 = companies.find((company)=>company.id ==2 )
    const added3 = companies.find((company)=>company.id ==3)
    explore.push(added1)
    explore.push(added2)
    explore.push(added3)
   }
   console.log(explore)
   const company=companies.find((job)=>job.id==id)
   console.log(companies)
   console.log(company)
   const navigate = useNavigate()
    return (
        <div className="companyinfo">
            {company && 
            <div>
                <div className="header">
                    <img src={company.img} />
                    <div>
                        <h1>{company.name}</h1>
                        <p>{company.industry} · {company.location}</p>
                        <p>{company.description}</p>
                        <button className="link" onClick={()=>navigate(`${company.website}`)}>View Website ↗</button>
                    </div>
                </div>
                <div>
                    <h2>Company Overview</h2>
                    <div>
                        <div>
                            <p>INDUSTRY</p>
                            <p>{company.industry}</p>
                        </div>
                        <div>
                            <p>LOCATION</p>
                            <p>{company.location}</p>
                        </div>
                        <div>
                            <p>OPEN POSITIONS</p>
                            <p>{company.positions.length} opportunities</p>
                        </div>
                        <div>
                            <p>WESBITE</p>
                            <button className="link" onClick={()=>navigate(`${company.website}`)}>View Website ↗</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Open Positions</h2>
                    <p>{company.positions.length} {company.positions.length > 2 ? "Oportunities" : "opportunity"} at {company.name}</p>
                    <div>
                        {company.positions.map((jo)=>(
                        <div className="jo" onClick={()=>navigate(`/jobdetail/${jo.id}`)} style={{cursor:"pointer"}}>
                            <div>
                                <p>💼 {jo.workType}</p>
                                <p>{loggedin ? <FontAwesomeIcon icon={jo.liked ? faHeartCircleCheck : faHeart} style={{cursor:"pointer"}} onClick={()=>handleLike(jo)}/> :"" }</p>
                            </div>
                            <div>
                                <img src={jo.logo} />
                                <div>
                                    <p>{company.name}</p>
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
                                            <p>match</p>
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
                    <div className="explore">
                       {explore.map((company)=>(
                        <div className="explorecompany">
                          <img src={company.img}></img>
                          <div>
                            <h2>{company.name}</h2>
                            <p>{company.industry}</p>
                            <p>{company.description}</p>
                            <p>{company.positions.length} {company.positions.length < 2 ?  "job" : "jobs"}<button onClick={()=>(navigate(`/companyinfo/${company.id}`))}>View Company ↗</button></p>
                          </div>
                        </div>
                       ))}
                    </div>
                </div>
            </div>
         }
        </div>
    );
}
 
export default Companyinfo;