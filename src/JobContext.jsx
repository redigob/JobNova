import {createContext, useEffect, useState } from "react";
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
        skill:"",
        jobcategory: "Technology",
        worktype:"",
        jobtype:"",
        experiencelevel:""
    })

    function hanldeDeleteskill(skill){
        const updatedskills = profile.skills.filter(ski=>ski!=skill)
        setProfile({...profile,skills:updatedskills})
    }

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
        fetch('http://localhost:3000/featured')
        .then(res=>res.json())
        .then(data=>setFeatured(data))

        fetch('http://localhost:3000/company')
        .then(res=>res.json())
        .then(data=>setMarquee(data))

        fetch('http://localhost:3000/jobs')
        .then(res=>res.json())
        .then(data=>setJobs(data))

        fetch('http://localhost:3000/companies')
        .then(res=>res.json())
        .then(data=>(setCompanies(data),console.log(data)))
    },[])

    function calculateMatch(job){
        
    }

    return(
        <JobContext.Provider value={{calculateMatch,handleLike,companies,filter,setFilter,search,setSearch,selected,setSelected,editmode,setEditmode,profileCreated,setProfilecreated,show,setShow,signuptemp,setSignuptemp,signupdata,setSignupdata,temp,setTemp,logindata,setLogindata,featured,match,profile,setProfile,tempProfile,settempProfile,loggedin,setLoggedin,marquee,jobs,setJobs}}>
            {children}
        </JobContext.Provider>
    )
    
}
 
export default JobContext;