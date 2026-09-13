import {createContext, useEffect, useState } from "react";
export const JobContext = createContext()

export function Jobprovider({children}){
    const [loggedin,setLoggedin] = useState(false)
    const [profile,setProfile] = useState([])
    const [logindata,setLogindata] = useState({})
    const [temp,setTemp] = useState({username:'',password:''})
    const [signupdata,setSignupdata] = useState({})
    const [signuptemp,setSignuptemp] = useState({first:'',last:'',username:'',password:'',confirm:'',agreed:false})
    const [featured,setFeatured] = useState([])
    const [match,setMatch] = useState([])
    const [marquee,setMarquee] =useState([])
    const [show,setShow] = useState(false)
    const [jobs,setJobs] = useState([])

    console.log(loggedin)


    useEffect(()=>{
        fetch('http://localhost:3000/featured')
        .then(res=>res.json())
        .then(data=>setFeatured(data))

        fetch('http://localhost:3000/companies')
        .then(res=>res.json())
        .then(data=>setMarquee(data))

        fetch('http://localhost:3000/jobs')
        .then(res=>res.json())
        .then(data=>setJobs(data))

    },[])
    console.log(jobs)
    return(
        <JobContext.Provider value={{show,setShow,signuptemp,setSignuptemp,signupdata,setSignupdata,temp,setTemp,logindata,setLogindata,featured,match,profile,loggedin,setLoggedin,marquee,jobs}}>
            {children}
        </JobContext.Provider>
    )
    
}
 
export default JobContext;