import {createContext, useContext, useEffect, useState } from "react";
export const JobContext = createContext()

export function Jobprovider({children}){
    const [loggedin,setLoggedin] = useState(false)
    const [logindata,setLogindata] = useState({})
    const [temp,setTemp] = useState({username:'',password:''})
    const [signupdata,setSignupdata] = useState({})
    const [signuptemp,setSignuptemp] = useState({first:'',last:'',username:'',password:'',confirm:'',agreed:false})
    const [featured,setFeatured] = useState([])
    const [match,setMatch] = useState([])
    const [marquee,setMarquee] =useState([])
    const [show,setShow] = useState(false)
    const [jobs,setJobs] = useState([])
    const [editmode,setEditmode] = useState(false)
    const [profileCreated,setProfilecreated] = useState(false)
    const [selected,setSelected] = useState("/")
    const [search,setSearch] = useState('')
    const [companies,setCompanies] = useState([])
    const [applicationFilter,setApplicationfilter] = useState('')
    let saved;
    if(jobs){
        saved = jobs.filter(jo=>jo.liked== true) 
    }

    console.log("saved: ",saved)
    const [application,setApplication] = useState({pending:[],applied:[]})
    const [filter,setFilter] = useState({
        location:'', 
        jobtype:'',
        experience:'',
        salary:[],
        category:''
    })

    const [profile,setProfile] = useState({
        name:"",
        email:"",
        location:"",
        headline:"",
        school:"",
        field:"",
        education:"",
        grad:"",
        skills:[],
        jobcategory: "",
        worktype:"",
        jobtype:"",
        experiencelevel:""
    })

    console.log(profile)

    const [tempProfile,settempProfile] = useState({
        name:"",
        email:"",
        location:"",
        headline:"",
        school:"",
        field:"",
        education:"high-school",
        grad:"",
        jobcategory: "Technology",
        worktype:"",
        jobtype:"",
        experiencelevel:"",
        skills:[]
    })


    function handleLike(jo){
        setJobs(jobs.map((job)=>{
            if(job.id==jo.id){
                return{...job, liked:!jo.liked}
            }
            else{
                return job
            }
        }))
        console.log("liked")
    }


    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/featured`)
        .then(res=>res.json())
        .then(data=>setFeatured(data))

        fetch(`${import.meta.env.VITE_API_URL}/company`)
        .then(res=>res.json())
        .then(data=>setMarquee(data))

        fetch(`${import.meta.env.VITE_API_URL}/jobs`)
        .then(res=>res.json())
        .then(data=>setJobs(data))

        fetch(`${import.meta.env.VITE_API_URL}/companies`)
        .then(res=>res.json())
        .then(data=>(setCompanies(data),console.log(data)))
    },[])

    function calculateMatch(job){
            let  skillpercent = 0;
            let  worktypepercent = 0;
            let  experiencepercent = 0;
            let  jobtypepercent = 0
            let  categorypercent = 0
            
            
            console.log(job)
            const matchedSkills = job.skills.filter(skill=>(
                profile.skills.map(s=>s.toLowerCase()).includes(skill.toLowerCase())
            ))
            
            skillpercent = (matchedSkills.length/job.skills.length) * 100;
            
            if(job.category.toLowerCase() == profile.jobcategory.toLowerCase()){
                categorypercent = 100
            }
            else{
                 categorypercent = 0;
            }
    
            if(job.employmentType==profile.jobtype){
                 jobtypepercent = 100
            }
            else{
                 jobtypepercent = 0
            }
    
            if(job.workType==profile.worktype){
                 worktypepercent = 100
            }
            else{
                 worktypepercent = 0
            }
      
            if(job.experience==profile.experiencelevel){
                experiencepercent = 100
            }
            else{
                experiencepercent = 0
            }
    
            const match = skillpercent * 0.5 +
                          worktypepercent * 0.1 +
                          categorypercent * 0.15 +
                          experiencepercent * 0.2 +
                          jobtypepercent * 0.05 ;
    
           (match && console.log("match" , match))
    
            return Math.round(match)
    
        }

    return(
        <JobContext.Provider value={{saved,applicationFilter,setApplicationfilter,application,setApplication,calculateMatch,handleLike,companies,filter,setFilter,search,setSearch,selected,setSelected,editmode,setEditmode,profileCreated,setProfilecreated,show,setShow,signuptemp,setSignuptemp,signupdata,setSignupdata,temp,setTemp,logindata,setLogindata,featured,match,profile,setProfile,tempProfile,settempProfile,loggedin,setLoggedin,marquee,jobs,setJobs}}>
            {children}
        </JobContext.Provider>
    )
    
}
 
export default JobContext;