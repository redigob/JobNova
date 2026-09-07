import Featured from './featuredjobs';
import './Home.css'
import How from './howitworks';
import Company from './company';
import Bycategory from './bycategory';

const Home = () => {
    return (
        <div className="home">
            <div>
                <img src="images/hero.jpg"></img>
                <div>
                    <h2>Find work that fits you.</h2>
                    <p>Your skills are valuable. JobNova helps you discover opportunities that match what you can actually do.</p>
                    <div className='buttons'>
                        <button>Search Jobs 🔎</button>
                        <button>Learn More →</button>
                    </div>
                </div>
            </div>
            <div>
                <How/>
                <Featured/>
                <Company/>
                <Bycategory/>
            </div>
        </div>
    );
}
 
export default Home;