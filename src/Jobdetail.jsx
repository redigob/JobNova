import { useContext } from "react";
import JobContext from "./JobContext";
import './Jobdetail.css'
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Jobdetail = () => {
    const {jobs,handleLike,loggedin,profile} = useContext(JobContext)
    const {id} = useParams()
    console.log(id)
    console.log(jobs)
    const job = jobs.find(job=>job.id==id)
    console.log(job)

    return (
        <div className="jobdetail">
          {job && <div>
           <div className="header">
            <div>
                <img src={job.logo}></img>
                <div>
                    <p>{job.company}</p>
                    <p>{job.title}</p>
                    <p>{job.location} • {job.workType}  • {job.employmentType}</p>
                </div>
            </div>
            {loggedin && profile.firstname && <div>
               <p>{} Match</p>
               <p>
                <button>Apply Now↗</button>
                <button onClick={()=>handleLike(job)}><FontAwesomeIcon icon={job.liked ? faHeartCircleCheck : faHeart}/> {job.liked ? "Saved" : "save"}</button>
               </p>
            </div> }
           </div>
           
           <div>
            <div>
               <h2>About the Job</h2>
               <p>{job.description}</p>
               <h2>Responsibilities</h2>
               <ul>
                  {(job.responsibilities).map(responsibility=>(
                       <li>{responsibility}</li>
                  ))}
               </ul>
               <h2>Requirements</h2>
               <ul>
                  {(job.requirements).map(requirements=>(
                       <li>{requirements}</li>
                  ))}
               </ul>
               <h2>Skills</h2>
               <ul>
                  {(job.skills).map(skill=>(
                       <p>{skill}</p>
                  ))}
               </ul>
            </div>
            <div>
                <h2>Apply for the Job</h2>
                <p>Salary: {job.minSalary}ETB - {job.maxSalary}ETB</p>
                <p>Work Type : {job.workType}</p>
                <p>Employement Type : {job.employmentType}</p>
                <p>Experience Level : {job.experience}</p>

                {loggedin ? (profile.name  ? <button> Apply Now ↗</button> : <div className="logintosee">🔒 Fill Your Profile to Apply</div> ) : <div className="logintosee">🔒 Log In to Apply</div> }
                {loggedin && <button onClick={()=>handleLike(job)}><FontAwesomeIcon icon={job.liked ? faHeartCircleCheck : faHeart}/> {job.liked ? "Saved" : "save"}</button>}
            </div>
           </div>
        </div>}
    </div>
    );
}
 
export default Jobdetail;