import Featured from './featuredjobs';
import './Home.css'
import How from './howitworks';
import Company from './company';
import Bycategory from './bycategory';
import Login from './login';
import {useContext, useEffect } from 'react';
import JobContext from './JobContext';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
    const {loggedin,selected,setSelected} = useContext(JobContext)
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(()=>{
        if(location.state?.scrollTo){
            window.scrollTo({
                top:location.state.scrollTo,
                behavior:"smooth"
            })
        }
    },[location])
    return (
        <div className="home">
            <div>
                <img src="images/hero.jpg"></img>
                <div>
                    <h2>Find work that fits you.</h2>
                    <p>Your skills are valuable. JobNova helps you discover opportunities that match what you can actually do.</p>
                    <div className='buttons'>
                        <button style={{cursor:"pointer"}} onClick={()=>(setSelected("find"),navigate("/find"))}>Search Jobs 🔎</button>
                        {loggedin ? "" :<button style={{cursor:"pointer"}} onClick={()=>(
                            window.scrollTo({
                                top:370,
                                behavior:"smooth"
                            })
                        )}>Learn More →</button>}
                    </div>
                </div>
            </div>
            <div>
                <How/>
                <Featured/>
                <Company/>
                <div className='categorynlogin'>
                    <Bycategory/>
                   <Login/>
                </div>
            </div>
        </div>
    );
}
 
export default Home;