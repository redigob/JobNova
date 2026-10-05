import { useContext } from "react";
import JobContext from "./JobContext";
import './Jobdetail.css'
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Jobdetail = () => {
    const {application,setApplication,calculateMatch,jobs,setJobs,handleLike,loggedin,profile} = useContext(JobContext)
    const {id} = useParams()
    const job = jobs.find(job=>job.id==id)
    const navigate = useNavigate()
 
    console.log(jobs)

    function handleapply(job){
        const find = application.pending.find(jo=>jo.id==job.id)
        if(find){
            return
        }

        const today = new Date().toLocaleDateString("en-US",{
            month:"short",
            day:"numeric",
            year:"numeric"
        });

        const newJob = jobs.map(jo=>{
            if(jo.id==job.id){
                return {...jo,applieddate:today}
            }
            else{
                return jo
            }
        })

        setJobs(newJob)
        const found = newJob.find(jo=>jo.id==job.id)
        console.log(found)

        setApplication({...application,pending:[...application.pending,found]})
        window.open(job.applyUrl, "_blank")
    }

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
            {loggedin && profile.name && <div>
               <p>{calculateMatch(job)}% Match</p>
               <p>
                <button onClick={()=>handleapply(job)} disabled = {job.applied ? true : false}>{job.applied ? "Applied" : "Apply Now ↗"}</button>
                <button  onClick={()=>handleLike(job)}><FontAwesomeIcon icon={job.liked ? faHeartCircleCheck : faHeart}/> {job.liked ? "Saved" : "save"}</button>
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

                {loggedin ? (profile.name  ? <button disabled = {job.applied ? true : false} onClick={()=>handleapply(job)}> {job.applied ? "Applied" : "Apply Now ↗"}</button> : <div className="logintosee">🔒 Fill Your Profile to Apply</div> ) : <div className="logintosee">🔒 Log In to Apply</div> }
                {loggedin && <button onClick={()=>handleLike(job)}><FontAwesomeIcon icon={job.liked ? faHeartCircleCheck : faHeart}/> {job.liked ? "Saved" : "save"}</button>}
            </div>
           </div>
        </div>}
    </div>
    );
}
 
export default Jobdetail;