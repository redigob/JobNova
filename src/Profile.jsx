import { useContext, useState } from 'react';
import './Profile.css'
import JobContext from './JobContext';

const Profile = () => {
    const {tempProfile,settempProfile,profile,setProfile} =useContext(JobContext)

    function handleaddSkill(){
      if(tempProfile.skill==""){
        return
      }
      else{
        setProfile({...profile,skills:[...profile.skills,tempProfile.skill]})
        settempProfile({...profile,skill:""})
      }
    }

    return (
        <div className="profile">
            <div className="header">
                <h2>My Profile</h2>
                <p>Build your profile and let JobNova find opportunities that fit you.</p>
            </div>
            <div>
                <h2>Basic Information</h2>
                <label>
                    <p>Full Name</p>
                    <input type='text'></input>
                </label>
                <label>
                    <p>Location</p>
                    <input type='text'></input>
                </label>
                <label>
                    <p>Email</p>
                    <input type='email'></input>
                </label>
                <label>
                    <p>Headline</p>
                    <input type='text'></input>
                </label>
            </div>
            <div>
                <h2>Education</h2>
                <label>
                    <p>School/University</p>
                    <input type='text'></input>
                </label>

                <label>
                    <p>Field of study</p>
                    <input type='text'></input>
                </label>

                <label> 
                    <p>Education Level</p>
                    <select>
                        <option>High School</option>
                        <option>Diploma</option>
                        <option>Bachelor's</option>
                        <option>Master's</option>
                        <option>PhD</option>
                    </select>
                </label>   

                <label>
                    <p>Graduation Year</p>
                    <input type='date'></input>
                </label>
            </div>
            <div>
                <h2>Skills</h2>
                <label>
                    <div>
                        <p>Skill</p>
                        <input type='text' value={tempProfile.skill} onChange={(e)=>settempProfile({...tempProfile,skill:e.target.value})}></input>
                    </div>
                    <button onClick={()=>handleaddSkill()}>Add</button>
                </label>
                <p>Your skills:</p>
                <div className='skills'>
                    {profile.skills.map((skill)=>(
                        <p>{skill}<span onClick={()=>hanldeDeleteskill(skill)}>✕</span></p>
                    ))}
                </div>
                
            </div>
            <div>
                <h2>Career Preferences</h2>
                <label>
                    <p>Job Category</p>
                    <select>
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
                            <input type="radio" name='work' />
                            <p>Remote</p>
                        </div>
                        <div>
                            <input type="radio" name='work' />
                            <p>Hybrid</p>
                        </div>
                        <div>
                            <input type="radio" name='work'/>
                            <p>Onsite</p>
                        </div>
                    </div>
                </label>
                <label>
                    <p>Job Type</p>
                    <div>
                        <div>
                            <input type="radio" name='job' />
                            <p>Full-time</p>
                        </div>
                        <div>
                            <input type="radio" name='job' />
                            <p>Part-time</p>
                        </div>
                        <div>
                            <input type="radio" name='job' />
                            <p>Internship</p>
                        </div>
                    </div>
                </label>
                <label>
                    <p>Experience Level</p>
                    <div>
                        <div>
                            <input type="radio" name='job' />
                            <p>Entry Level</p>
                        </div>
                        <div>
                            <input type="radio" name='job' />
                            <p>Mid Level</p>
                        </div>
                        <div>
                            <input type="radio" name='job' />
                            <p>Senior</p>
                        </div>
                    </div>
                </label>
            </div>
            <button>Save Profile</button>
        </div>
    );
}
 
export default Profile;