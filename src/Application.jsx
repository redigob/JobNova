import { useContext } from "react";
import JobContext from "./JobContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faFilter, faLocation, faMessage } from "@fortawesome/free-solid-svg-icons";
import './Application.css'
const Application = () => {
    const {applicationFilter,setApplicationfilter,application,setApplication,jobs,setJobs} = useContext(JobContext)

    const handleyesapplied=(job)=>{
       const updatedPending = application.pending.filter(pend=>pend.id!=job.id)
       const newJobs = jobs.map(jo=>{
          if(jo.id==job.id){
               return {...jo,applied:true,status:"Applied"}
          }
          else{
               return jo;
          }
       })
       setJobs(newJobs)
       console.log(newJobs)
       const found = newJobs.find(jo=>jo.id==job.id)
       console.log(found)
       setApplication({pending:updatedPending,applied:[...application.applied,found]})
    }

    const handlenotyet = (job)=>{
       const updatedPending = application.pending.filter(pend=>pend.id!=job.id)
       setApplication({...application,pending:updatedPending})
    }

    const handlechangestatus = (job,status)=>{
          console.log(status)
          const newJobs = jobs.map(jo=>{
          if(jo.id==job.id){
               return {...jo,status:status}
          }
          else{
               return jo;
          }
          })
          setJobs(newJobs)
          console.log(newJobs)
          
          const updatedapplied = application.applied.map(jo=>{
               if(jo.id==job.id){
                    return {...jo,status:status}
               }
               else{
                    return jo
               }
          })

          setApplication({...application,applied:updatedapplied})

    }

    let filteredaplied;

    

    const handleremove = (job)=>{
        const confirm = window.confirm("You want to Delete this Application")
        console.log(confirm)
        if(confirm){
          const updatedJob = jobs.map(jo=>{
               if(jo.id==job.id){
                    return {...jo,applied:false,applieddate:null,state:null}
               }
               else{
                    return jo
               }
          })

          setJobs(updatedJob)

          const updatedapplied = application.applied.filter((jo)=>jo.id!=job.id)
          console.log(updatedapplied)
          setApplication({...application,applied:updatedapplied})
        }

        
    }

    if(applicationFilter){
       filteredaplied = application.applied.filter(jo=>jo.status==applicationFilter)
       console.log(filteredaplied)
    }
    else{
     filteredaplied = application.applied
    }


    return (
        <div className="application">
           <div>
                <h2>Application</h2>
                <p>Track your job applications and keep your progress updated</p>
           </div>

           <div className="pending">
              <div>
                   <FontAwesomeIcon icon={faClock}/>
                   <div>
                        <h2>Pending Applications</h2>
                        <p>You clicked apply on these jobs, but haven't confirmed yet</p>
                   </div>
                   <p>{application.pending.length} pending</p>
              </div>

              {application.pending.length!=0 ?
                 <div>
                    {application.pending.map((job)=>(
                         <div className="pendingjob">
                              <img src={job.logo}/>

                              <div>
                                   <h2>{job.title}</h2>
                                   <p>{job.company}</p>
                                   <p><FontAwesomeIcon icon={faCalendar}/> Applied on  {job.applieddate}</p>
                              </div>

                              <div>
                                  <FontAwesomeIcon icon={faMessage}/>
                                  <div>
                                        <h2>Did yo apply for this job?</h2>
                                        <p>Let us know so we can track your application</p>
                                  </div>
                              </div>

                              <div>
                                   <button onClick={()=>handleyesapplied(job)}>Yes, I applied</button>
                                   <button onClick={()=>handlenotyet(job)}>Not yet</button>
                              </div>
                         </div>
                    ))}
                 </div>
               : <div className="none">You Don't Have any pending Job</div>
              }
           </div>

           <div className="applied">
               <div>
                    <div>
                         <h1>Your application</h1>
                         <p>Jobs you've confirmed you applied to and your current status.</p>
                    </div>

                    <div>
                         <p><FontAwesomeIcon icon={faFilter}/></p>

                         <select value={applicationFilter} onChange={(e)=>setApplicationfilter(e.target.value)}>
                              <option value={""}>All statuses</option>
                              <option value="Applied">Applied</option>
                              <option value="Awaiting">Awaiting Response</option>
                              <option value="Interview">Interview</option>
                              <option value="Hired">Hired</option>
                              <option value="Rejected">Rejected</option>
                         </select>
                    </div>
               </div>

               {application.applied.length!=0 ?
                  <div>
                    {filteredaplied && filteredaplied.map((job)=>(
                         <div className="appliedjob">
                              <img src={job.logo}/>

                              <div>
                                   <h2>{job.title}</h2>
                                   <p>{job.company}</p>
                                   <p><FontAwesomeIcon icon={faLocation}/> {job.location}</p>
                                   <p><FontAwesomeIcon icon={faCalendar}/> Applied on {job.applieddate}</p>
                              </div>

                              <p>{(job.status)}</p>

                              <select value={"update"} onChange={(e)=>handlechangestatus(job,e.target.value)}>
                                   <option value="update">Update status</option>
                                   <option value="Applied">Applied</option>
                                   <option value="Awaiting">Awaiting Response</option>
                                   <option value="Interview">Interview</option>
                                   <option value="Hired">Hired</option>
                                   <option value="Rejected">Rejected</option>
                              </select>

                              <button onClick={()=>handleremove(job)}>Remove Job from Application</button>
                         </div>
                    ))}
                  </div>
               : <div className="none">You Don't have any applied Job</div>
               }
           </div>
        </div>
    );
}
 
export default Application;