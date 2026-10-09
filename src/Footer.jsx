import { Link, useNavigate } from 'react-router-dom';
import './Footer.css'
import { useContext } from 'react';
import JobContext from './JobContext';

const Footer = () => {
    const {loggedin,profile,setSelected} = useContext(JobContext)
    const navigate = useNavigate()

    return (
        <div className="footer">
            <div className="header">
                   <img src="/images/logo.jpg"/>
                   <p>
                      <h2>JobNova</h2>
                      <p>Find your next beginning</p>
                      <p>Your skills. Your ambition. Your next opportunity. Discover jobs that match your potential and build a career on your terms.</p>
                   </p>
            </div>

            <div>
                <div>
                    <h2>Explore</h2>
                    <Link to={"/find"} className='links' onClick={()=>setSelected("/find")}>Find Jobs</Link>
                    <Link to={"/company"} className='links'onClick={()=>setSelected("/companies")}>Discover companies</Link>
                    <p className='links' onClick={()=>(setSelected("/"),navigate("/",{state:{scrollTo:window.innerWidth < 810 ?300 :400}}))}>{!loggedin ? "How It works" : "Dashboard"}</p>
                </div>

                {!loggedin ? 
                <div>
                    <h2>Support</h2>
                    <p className='links' onClick={()=>(setSelected("/"),navigate("/",{state:{scrollTo:window.innerWidth<=620 ? 4000 : window.innerWidth <=800 ? 3000 : (window.innerWidth <=1600  ? 2500 : 2300)}}))}>Log In</p>
                    <p className='links' onClick={()=>(setSelected("/"),navigate("/",{state:{scrollTo:window.innerWidth<=620 ? 4000 : window.innerWidth <=800 ? 3000 : (window.innerWidth <=1600  ? 2500 : 2300)}}))}>Create an account</p>
                </div> : 
                    ( !profile.name ? 
                        <div>
                            <h2>Get Started</h2>
                            <Link to={"/myprofile"} className='links'>My Profile</Link>
                            <Link to={"/saved"} className='links'>Saved Jobs</Link>
                        </div> 
                        : 
                        <div>
                            <h2>My Profile</h2>
                            <Link to={"/myprofile"} className='links'>My Profile</Link>
                            <Link to={"/saved"} className='links'>Saved Jobs</Link>
                            <Link to={"/applications"} className='links'>Application</Link>
                        </div>
                    )
                }

                <div>

                </div>
            </div>

            <div>
                <p>&copy; 2026 JobNova · Privacy Policy · Contact</p>
            </div>
        </div>
    );
}
 
export default Footer;