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
    console.log(loggedin)

    useEffect(()=>{
        if(signupdata.username || logindata.username){
            setLoggedin(true)
        }
    },[signupdata,logindata])

    useEffect(()=>{
        fetch('http://localhost:3000/featured')
        .then(res=>res.json())
        .then(data=>setFeatured(data))

        fetch('http://localhost:3000/companies')
        .then(res=>res.json())
        .then(data=>setMarquee(data))

    },[])
    console.log(featured)
    return(
        <JobContext.Provider value={{signuptemp,setSignuptemp,signupdata,setSignupdata,temp,setTemp,logindata,setLogindata,featured,match,profile,loggedin,marquee}}>
            {children}
        </JobContext.Provider>
    )
    
}
 
export default JobContext;