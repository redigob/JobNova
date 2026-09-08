import { useContext } from "react";
import JobContext from "./JobContext";
import './featuredjobs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons'
const Featured = () => {
    const {featured,loggedin,profile,match} = useContext(JobContext)
    console.log(featured)
    return (
        <div className="featured">
            <h2>Featured Jobs
                <p>Explore the jobs making waves right now.</p>
            </h2>
            <div>
                {featured ?
                   featured.map((job)=>(
                     <div className="job">
                        <div>
                           <p>💼 {job.type}</p>
                           <p><FontAwesomeIcon icon={job.liked ? faHeartCircleCheck :faHeart} /></p>
                        </div>
                        <div>
                           <img src={job.image}></img>
                           <div>
                            <p>{job.company}</p>
                            <p> {job.title} </p>
                            <p>💰{(job.minSalary)/1000}k - {(job.maxSalary)/1000}k</p>                           
                           </div>
                        </div>
                        <div>
                            <p>📍 {job.location}</p>
                            <div className="skills">
                                {job.skills.map((skill)=>(
                                    <p>{skill}</p>
                                ))}
                            </div>   
                        <p>{loggedin ? (profile ? (<div className="result"><button style={{color:`${color}`}}></button>{match}</div>) : "🔒 Complete your profile to see match"): "🔒 Log In to see a match"}</p>
                        </div>
                     </div>
                   ))
                : "Loading..."}
            </div>
            
            <div>
                Explore all jobs ⟶
            </div>
        </div>
    );
}
 
export default Featured;