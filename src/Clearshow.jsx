import { useContext, useEffect } from "react";
import JobContext from "./JobContext";
import { useLocation, useNavigate } from "react-router-dom";

const Clearshow = () => {
    const {setShow,loggedin} = useContext(JobContext)
    const pathname = useLocation()

    useEffect(()=>{
      setShow(false),
      window.scrollTo(0,0) 
    },[pathname,loggedin])


    return (
        <div className="clearshow">
            
        </div>
    );
}
 
export default Clearshow;