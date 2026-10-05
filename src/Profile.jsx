import { useContext, useState } from 'react';
import './Profile.css'
import JobContext from './JobContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    const {tempProfile,editmode,setEditmode,profileCreated,setProfilecreated,settempProfile,profile,setProfile,jobs,companies} =useContext(JobContext)
    const [search,setSearch] = useState('')
    let availableskills = [...new Set(jobs.flatMap(job=>(job.skills)))]

    if(search){
        availableskills = availableskills.filter(skill=>skill.toLowerCase().includes(search.toLowerCase()))
    }
    
    function handleProfileSubmit(e){
       e.preventDefault()
       if(tempProfile.skills.length==0){
        document.getElementById("skills").scrollIntoView({
            behavior:"smooth"
        })
        window.alert("Enter skills to let job nova find a match for you")
       }
       else{
        setProfile({...profile,
            name:tempProfile.name,
            email:tempProfile.email,
            location:tempProfile.location,
            headline:tempProfile.headline,
            education:tempProfile.education,
            school:tempProfile.school,
            grad:tempProfile.grad,
            field:tempProfile.field,
            jobcategory: tempProfile.jobcategory,
            worktype:tempProfile.worktype,
            jobtype:tempProfile.jobtype,
            experiencelevel:tempProfile.experiencelevel,
            skills:tempProfile.skills
        })
        setProfilecreated(true)    
        setEditmode(false)   
       }
    }

    function handleaddSkill(skill){
        const found = tempProfile.skills.find(skil=>skil==skill)
        if(found){
            return
        }
        else{
            settempProfile({...tempProfile,skills:[...tempProfile.skills,skill]})
        }
    }

    function hanldeDeleteskill(skill){
        const updatedskills = tempProfile.skills.filter(ski=>ski!=skill)
        settempProfile({...tempProfile,skills:updatedskills})
    }


    return (
        <div className={profileCreated && !editmode ? "profile disabled": "profile"}>
            <form onSubmit={(e)=>handleProfileSubmit(e)}>
            <div className="header">
                <h2>My Profile</h2>
                <p>Build your profile and let JobNova find opportunities that fit you.</p>
            </div>
            <div>
                <div>
                    <h2>Basic Information<span>{profileCreated && !editmode ? <p type='button' onClick={()=>setEditmode(true)}> Edit Profile ✎</p> : ""}</span></h2>
                    <label>
                        <p>Full Name</p>
                        <input type='text' value={tempProfile.name} onChange={(e)=>settempProfile({...tempProfile,name:e.target.value})} required readOnly={profileCreated && !editmode ? true: false}></input>
                    </label>
                    <label>
                        <p>Email</p>
                        <input type='email' value={tempProfile.email} onChange={(e)=>settempProfile({...tempProfile,email:e.target.value})} required readOnly={profileCreated && !editmode ? true: false}></input>
                    </label>
                    <label>
                        <p>Location</p>
                        <input type='text' value={tempProfile.location} onChange={(e)=>settempProfile({...tempProfile,location:e.target.value})} required readOnly={profileCreated && !editmode ? true: false}></input>
                    </label>
                    <label>
                        <p>Headline</p>
                        <input type='text' value={tempProfile.headline} onChange={(e)=>settempProfile({...tempProfile,headline:e.target.value})} required readOnly={profileCreated && !editmode ? true: false}></input>
                    </label>
                </div>
                <div>
                    <h2>Education</h2>
                    <label>
                        <p>School/University</p>
                        <input type='text' value={tempProfile.school} onChange={(e)=>settempProfile({...tempProfile,school:e.target.value})} required readOnly={profileCreated && !editmode ? true: false}></input>
                    </label>

                    <label>
                        <p>Field of study</p>
                        <input type='text' value={tempProfile.field} onChange={(e)=>settempProfile({...tempProfile,field:e.target.value})} required readOnly={profileCreated && !editmode ? true: false}></input>
                    </label>

                    <label> 
                        <p>Education Level</p>
                        <select value={tempProfile.education} onChange={(e)=>settempProfile({...tempProfile,education:e.target.value})} required readOnly={profileCreated && !editmode ? true: false}>
                            <option value={"high-school"}>High School</option>
                            <option value={"diploma"}>Diploma</option>
                            <option value={"bachelor"}>Bachelor's</option>
                            <option value={"masters"}>Master's</option>
                            <option value={"phd"}>PhD</option>
                        </select>
                    </label>   

                    <label>
                        <p>Graduation Year</p>
                        <input type='date' value={tempProfile.grad} onChange={(e)=>settempProfile({...tempProfile,grad:e.target.value})} required readOnly={profileCreated && !editmode ? true: false}></input>
                    </label>
                </div>
                <div id='skills'>
                    <h2>Skills</h2>
                    <label>
                        <p>Search</p>
                        <div>
                            <input type='text' value={search} onChange={(e)=>(setSearch(e.target.value))} disabled={profileCreated && !editmode ? true: false}></input>
                            <FontAwesomeIcon icon={faSearch}/>
                        </div>
                    </label>
                    <p>Your skills:</p>
                    <div className='skills'>
                        {tempProfile.skills.map((skill)=>(
                            <p>{skill}<span onClick={()=>hanldeDeleteskill(skill)}>✕</span></p>
                        ))}
                    </div>
                    <div>
                        <p>Available skills</p>
                        <div>
                           {availableskills.map(skill=>(
                            <p className={profileCreated && !editmode ? "disabled": ""} onClick={()=>handleaddSkill(skill)}>{skill} </p>
                           ))}
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Career Preferences</h2>
                    <label>
                        <p>Job Category</p>
                        <select value={tempProfile.jobcategory} onChange={(e)=>settempProfile({...tempProfile,jobcategory:e.target.value})} required readOnly={profileCreated && !editmode ? true: false}>
                            <option value={"Technology"}>Technology</option>
                            <option value={"Business"}>Business</option>
                            <option value={"Data"}>Data</option>
                            <option value={"Design"}>Design</option>
                            <option value={"Marketing"}>Marketing</option>
                            <option value={"Finance"}>Finance</option>
                            <option value={"Engineering"}>Engineering</option>
                            <option value={"Fashion"}>Fashion</option>
                        </select>
                    </label>
                    <label>
                        <p>Work Type</p>
                        <div>
                            <div>
                                <input type="radio" name='work' onChange={(e)=>settempProfile({...tempProfile,worktype:"Remote"})} checked = {tempProfile.worktype=="Remote" ? true : false} required disabled={profileCreated && !editmode ? true: false}/>
                                <p>Remote</p>
                            </div>
                            <div>
                                <input type="radio" name='work' onChange={(e)=>settempProfile({...tempProfile,worktype:"Hybrid"})} checked = {tempProfile.worktype=="Hybrid" ? true : false}  required disabled={profileCreated && !editmode ? true: false}/>
                                <p>Hybrid</p>
                            </div>
                            <div>
                                <input type="radio" name='work' onChange={(e)=>settempProfile({...tempProfile,worktype:"Onsite"})} checked = {tempProfile.worktype=="Onsite" ? true : false}  required disabled={profileCreated && !editmode ? true: false}/>
                                <p>Onsite</p>
                            </div>
                        </div>
                    </label>
                    <label>
                        <p>Job Type</p>
                        <div>
                            <div>
                                <input type="radio" name='job' onChange={(e)=>settempProfile({...tempProfile,jobtype:"Full-time"})} checked = {tempProfile.jobtype=="Full-time" ? true : false} required disabled={profileCreated && !editmode ? true: false}/>
                                <p>Full-time</p>
                            </div>
                            <div>
                                <input type="radio" name='job' onChange={(e)=>settempProfile({...tempProfile,jobtype:"Part-time"})} checked = {tempProfile.jobtype=="Part-time" ? true : false} required disabled={profileCreated && !editmode ? true: false}/>
                                <p>Part-time</p>
                            </div>
                            <div>
                                <input type="radio" name='job' onChange={(e)=>settempProfile({...tempProfile,jobtype:"Internship"})} checked = {tempProfile.jobtype=="Internship" ? true : false} required disabled={profileCreated && !editmode ? true: false}/>
                                <p>Internship</p>
                            </div>
                        </div>
                    </label>
                    <label>
                        <p>Experience Level</p>
                        <div>
                            <div>
                                <input type="radio" name='experience' onChange={(e)=>settempProfile({...tempProfile,experiencelevel:"Entry-level"})} checked = {tempProfile.experiencelevel=="Entry-level" ? true : false} required disabled={profileCreated && !editmode ? true: false}/>
                                <p>Entry Level</p>
                            </div>
                            <div>
                                <input type="radio" name='experience' onChange={(e)=>settempProfile({...tempProfile,experiencelevel:"Mid-level"})} checked = {tempProfile.experiencelevel=="Mid-level" ? true : false} required disabled={profileCreated && !editmode ? true: false}/>
                                <p>Mid Level</p>
                            </div>
                            <div>
                                <input type="radio" name='experience' onChange={(e)=>settempProfile({...tempProfile,experiencelevel:"Senior"})} checked = {tempProfile.experiencelevel=="Senior" ? true : false} required disabled={profileCreated && !editmode ? true: false}/>
                                <p>Senior</p>
                            </div>
                        </div>
                    </label>
                </div>
                {!profileCreated ? <button type='submit'>Save Profile</button> : (editmode ? <button type='submit'> Save Profile</button> :  "")}
         </div>
         </form>
        </div>
    );
}
 
export default Profile;