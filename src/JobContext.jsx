import {createContext, useEffect, useState } from "react";
export const JobContext = createContext()

export function Jobprovider({children}){
    const [loggedin,setLoggedin] = useState(false)
    const [profile,setProfile] = useState([])
    const [featured,setFeatured] = useState([])
    const [match,setMatch] = useState([])
    const [marquee,setMarquee] =useState([])
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
        <JobContext.Provider value={{featured,match,profile,loggedin,marquee}}>
            {children}
        </JobContext.Provider>
    )
    
}
 
export default JobContext;