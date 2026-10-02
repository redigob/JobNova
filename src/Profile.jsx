import { useContext, useState } from 'react';
import './Profile.css'
import JobContext from './JobContext';

const Profile = () => {
    const {setSelected,tempProfile,editmode,setEditmode,profileCreated,setProfilecreated,settempProfile,profile,setProfile,jobs,companies} =useContext(JobContext)
    console.log(profile)
    console.log(tempProfile)
    function handleProfileSubmit(e){
       e.preventDefault()
       if(profile.skills.length==0){
        document.getElementById("skills").scrollIntoView({
            behavior:"smooth"
        })
        window.alert("Enter skills to let job nova find a match for you")
       }
       else{
        settempProfile({...tempProfile,skill:""})
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
            experiencelevel:tempProfile.experiencelevel
        })
        setProfilecreated(true)    
        setEditmode(false)   
       }
    }

    function handleaddSkill(){
      if(tempProfile.skill==""){
        return
      }
      else{
        setProfile({...profile,skills:[...profile.skills,tempProfile.skill]})
        settempProfile({...tempProfile,skill:""})
      }
    }

    function hanldeDeleteskill(skill){
        const updatedskills = profile.skills.filter(ski=>ski!=skill)
        setProfile({...profile,skills:updatedskills})
    }

    console.log(profileCreated)
    console.log(editmode)

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
                        <p>Skill</p>
                        <div>
                        <input type='text' value={tempProfile.skill} onChange={(e)=>settempProfile({...tempProfile,skill:e.target.value})} readOnly={profileCreated && !editmode ? true: false}></input>
                        <button type="button" onClick={()=>handleaddSkill()}>Add</button>
                        </div>
                    </label>
                    <p>Your skills:</p>
                    <div className='skills'>
                        {profile.skills.map((skill)=>(
                            <p>{skill}<span onClick={()=>hanldeDeleteskill(skill)}>✕</span></p>
                        ))}
                    </div>
                    <div>
                        <p>Available skills</p>
                        <div>
                           {jobs.map(job=>job.skills.map(skill=>(
                            <p>{skill}</p>
                           )))}
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
                                <input type="radio" name='work' onChange={(e)=>settempProfile({...tempProfile,worktype:"Remote"})} required readOnly={profileCreated && !editmode ? true: false}/>
                                <p>Remote</p>
                            </div>
                            <div>
                                <input type="radio" name='work' onChange={(e)=>settempProfile({...tempProfile,worktype:"Hybrid"})} required readOnly={profileCreated && !editmode ? true: false}/>
                                <p>Hybrid</p>
                            </div>
                            <div>
                                <input type="radio" name='work' onChange={(e)=>settempProfile({...tempProfile,worktype:"Onsite"})} required readOnly={profileCreated && !editmode ? true: false}/>
                                <p>Onsite</p>
                            </div>
                        </div>
                    </label>
                    <label>
                        <p>Job Type</p>
                        <div>
                            <div>
                                <input type="radio" name='job' onChange={(e)=>settempProfile({...tempProfile,jobtype:"Full-time"})} required readOnly={profileCreated && !editmode ? true: false}/>
                                <p>Full-time</p>
                            </div>
                            <div>
                                <input type="radio" name='job' onChange={(e)=>settempProfile({...tempProfile,jobtype:"Part-time"})} required readOnly={profileCreated && !editmode ? true: false}/>
                                <p>Part-time</p>
                            </div>
                            <div>
                                <input type="radio" name='job' onChange={(e)=>settempProfile({...tempProfile,jobtype:"Internship"})} required readOnly={profileCreated && !editmode ? true: false}/>
                                <p>Internship</p>
                            </div>
                        </div>
                    </label>
                    <label>
                        <p>Experience Level</p>
                        <div>
                            <div>
                                <input type="radio" name='experience' onChange={(e)=>settempProfile({...tempProfile,experiencelevel:"Entry-level"})} required readOnly={profileCreated && !editmode ? true: false}/>
                                <p>Entry Level</p>
                            </div>
                            <div>
                                <input type="radio" name='experience' onChange={(e)=>settempProfile({...tempProfile,experiencelevel:"Mid-level"})} required readOnly={profileCreated && !editmode ? true: false}/>
                                <p>Mid Level</p>
                            </div>
                            <div>
                                <input type="radio" name='experience' onChange={(e)=>settempProfile({...tempProfile,experiencelevel:"Senior"})} required readOnly={profileCreated && !editmode ? true: false}/>
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