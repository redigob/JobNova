import Featured from './featuredjobs';
import './Home.css'
import How from './howitworks';
import Company from './company';
import Bycategory from './bycategory';
import Login from './login';
import {useContext } from 'react';
import JobContext from './JobContext';

const Home = () => {
    const {loggedin,setLoggedin} = useContext(JobContext)
    return (
        <div className="home">
            <div>
                <img src="images/hero.jpg"></img>
                <div>
                    <h2>Find work that fits you.</h2>
                    <p>Your skills are valuable. JobNova helps you discover opportunities that match what you can actually do.</p>
                    <div className='buttons'>
                        <button>Search Jobs 🔎</button>
                        {loggedin ? "" :<button>Learn More →</button>}
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