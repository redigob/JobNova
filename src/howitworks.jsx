import './howitworks.css'

const How = () => {
    return (
        <div className="how">
            <h2>HOW IT WORKS?</h2>
            <p style={{textAlign:"center"}}>Three ridiculously simple steps:</p>
            <div>
                <div>
                    <div>
                      <h2>Build Your Profile</h2>
                      <p>Tell JobNova who you are, what you can do, and what kind of opportunity you're looking for. Add your skills, experience, career interests, preferred location, job type, and desired salary so we can understand what makes a job right for you.</p>
                    </div>
                    <div className='number'>
                        02
                    </div>
                    <div>
                        <h2>Find Your Next Opportunity</h2>
                        <p>When you find a job that feels right, apply directly and keep it organized in one place. Save interesting opportunities for later, keep track of your applications, and follow your progress from the moment you apply until you reach your next career opportunity.</p>
                    </div>
                </div>
                <div>
                    <div className='number'>01</div>
                    <div>
                        <h2>Discover Your Matches</h2>
                        <p>Once your profile is ready, JobNova helps you discover opportunities that fit your skills and preferences. Each job can be compared with your profile, helping you understand how closely your experience matches the requirements before you decide to apply.</p>
                    </div>
                    <div className='number'>03</div>
                </div>
            </div>
        </div>
    );
}
 
export default How;