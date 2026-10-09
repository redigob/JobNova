import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye,faEyeSlash, faHomeUser, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import './login.css'
import JobContext from './JobContext';
const Login = () => {
    const [visible,setVisible] = useState(false)
    const [login,setLogin] = useState(true)
    const [err4,setErr4] = useState(false)
    const [success,setSuccess] = useState(false)
    const [message,setMessage] = useState('')
    const [Show,setShow] = useState(false)

    const {setLoggedin,temp,setTemp,setLogindata,signuptemp,setSignuptemp,signupdata,setSignupdata} = useContext(JobContext)
    
    const handleLogin = (e)=>{
        e.preventDefault()
        if(temp.username == ''){
            return
        }
        if(temp.username==signupdata.username){
            if(temp.password==signupdata.password){
                setLogindata(temp)
                setLoggedin(true)
                setErr4(false)
                setSuccess(false)
                setTemp({username:'',password:''})
                console.log("correct")
            }
            else{
               setErr4(true)
               setMessage("*Incorerct Password")
            }           
        }
        else{
           setErr4(true)
           setMessage("*The Account doesn't exist. Please sign up!!")
           console.log("incorrect")
        }
        
    }

    const handleSignup = (e)=>{
        if(signuptemp.password.length >= 8 && signuptemp.confirm==signuptemp.password && signuptemp.agreed){
           setSignupdata(signuptemp)
           setSuccess(true)
           setLogin(true)
           setErr4(false)
           setTemp({username:'',password:''})
        }
    }

    return (
        <div className="login">
            <p className={success ? "success": ""}>You are successfully signed Up!! Please Log In to continue using JobNova</p>
            <h2>{(login) ? "Welcome Back" : "Sign Up"}</h2>
            <div className={login ? "" : "scroll"}>
                <p onClick={()=>(setLogin(true),
                                 setTemp({username:'',password:''},
                                 setErr4(false)))
                            }>Log In</p>

                <p onClick={()=>(setLogin(false),
                                setSignuptemp({first:'',last:'',username:'',password:'',confirm:'',agreed:false})
                            )}>Sign Up</p>
            </div>
            {login ? 
            <form className='loginform'>
               <label>
                <p>Username</p>
                <div>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    <input value={temp.username} 
                           onChange={(e)=>setTemp({...temp,username : e.target.value})} 
                           type="text" 
                           placeholder='username' 
                           required ={true} />
                </div>
               </label>

               <label>
                <p>Password</p>
                <div>
                    <div>
                       <FontAwesomeIcon icon={faLock}/>
                       <input value={temp.password} 
                            onChange={(e)=>setTemp({...temp,password:e.target.value})} 
                            type={visible ? "text" : "password"} 
                            placeholder='********' 
                            required/>
                    </div>
                   <FontAwesomeIcon icon={visible ? faEye : faEyeSlash} onClick={()=>(setVisible(!visible))} onMouseDown={(e) => e.preventDefault()}/>
                </div>
               </label>
               <p>forgot password?</p>
               <p className={err4 ? "visible" : ""}>{message}</p>

               <button onClick={(e)=>handleLogin(e)}>Log In</button>
            </form>
            :  <form className='signupform'>
               <label>
                <p>First Name</p>
                <div>
                    <input value={signuptemp.first} 
                           onChange={(e)=>setSignuptemp({...signuptemp,first : e.target.value})} 
                           type="text" 
                           required/>
                </div>
               </label>

               <label>
                <p>Last Name</p>
                <div>
                    <input value={signuptemp.last} 
                           onChange={(e)=>setSignuptemp({...signuptemp,last : e.target.value})} 
                           required/>
                </div>
               </label>

               <label>
                <p>Username</p>
                <div>
                    <input value={signuptemp.username} 
                           onChange={(e)=>setSignuptemp({...signuptemp,username : e.target.value})} 
                           required/>
                </div>
               </label>

               <label>
                <p>password</p>
                <div>
                    <input value={signuptemp.password} 
                           onChange={(e)=>setSignuptemp({...signuptemp,password : e.target.value})} 
                           required
                           type={Show ? "text" : "password"} 
                           placeholder='********' />
                    <FontAwesomeIcon icon={Show ? faEye : faEyeSlash } onClick={()=>setShow(!Show)} />
                </div>
               </label>

               <label>
                <p>confirm password</p>
                <div>
                    <input value={signuptemp.confirm} 
                        type='password'
                           onChange={(e)=>setSignuptemp({...signuptemp,confirm : e.target.value})} 
                           required
                           placeholder='********'/>
                </div>
               </label>

            
                <label>
                <div>
                    <input type='checkbox'
                           checked = {signuptemp.agreed}
                           onChange={(e)=>setSignuptemp({...signuptemp,agreed : !signuptemp.agreed})} 
                           required/>
                    <p>I agree to the <Link to={"/"}>Terms & Privacy Policy</Link></p>
                </div>
               </label>

               <button onClick={(e)=>handleSignup(e)}>Sign Up</button>
            </form>}

            <div>
                <p>or continue with</p>
                <p><img src="images/google.png" /><span>Continue with Google</span></p>
                <p><img src="images/apple.png" ></img> <span>Continue with Apple</span></p>

                <p>{login ? "Don't have an account?" :" Already have an account? "}<span onClick={()=>{
                    (
                        setLogin(!login),
                        setTemp({username:'',password:''},
                        setErr4(false))
                    ),
                    setSignuptemp({first:'',last:'',username:'',password:'',confirm:'',agreed:false})
                    }}>{login ? "Sign Up" : "Log In"}</span></p>
            </div>
        </div>
    );
}
 
export default Login;