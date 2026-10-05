import { useContext } from "react";
import JobContext from "./JobContext";
import './Saved.css'
import { useNavigate } from "react-router-dom";
const Saved = () => {
    const {saved,profile,calculateMatch} = useContext(JobContext)
    const navigate = useNavigate()
    return (
        <div className="saved">
            <div className="header">
                <h2>Saved Jobs</h2>
                <p>Jobs you've saved for later. Come back anytime</p>
            </div>
 
            <div>
            {saved && saved.map((jo)=>(
                <div className="jo" >
                    <div >
                        <p>💼 {jo.workType}</p>
                        <p> {jo.liked ? "Saved" : ""} </p>
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
                            {profile.name ?
                                <div>
                                    <p>{calculateMatch(jo)}% match</p>
                                </div>: <p>🔒 Complete your profile to see match</p>
                            }
                    </div>
                    <p>posted {jo.postedDate}</p>
                </div>
                ))}
            </div>
        </div>
    );
}
 
export default Saved;