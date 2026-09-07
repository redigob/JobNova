import { useContext } from "react";
import JobContext from "./JobContext";
import './company.css'
const Company = () => {
    const {marquee} = useContext(JobContext)
    console.log(marquee)
    return (
        <div className="company">
            <h3> We Are Trusted By</h3>
            <div>
                {marquee && marquee.map((company)=>(
                    <div className="comp">
                       <img src={company.image} />
                       <div>
                           <p>{company.openJobs} Open Jobs  →</p>
                       </div>
                    </div>
                ))}
                {marquee && marquee.map((company)=>(
                    <div className="comp">
                       <img src={company.image} />
                       <div>
                           <p>{company.openJobs} Open Jobs  →</p>
                       </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Company;