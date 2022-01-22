import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function Login(props) {
    const [table,settable]= useState([])

    const [user,setUser]=useState ({
        email:'',
        password:''
    })

    const [isEmailValid,setEmailValid]=useState(true)
    const [isEmailErr,setisEmailErr]=useState('')
    const [passwordDetails,setPasswordDetails]=useState(true)
    const[passErr,setPassErr]=useState('')

    const login=(event)=>{
        // console.log(event);
        event.preventDefault()
        // console.log(user);

        const isValid= ValidateEmail(user.email)
        const isAppValid= ValidatePassword(user.password)

        if(isValid && user.password){
        // console.log('props',props);
        // props.history.push('/home')
        const tbcopy=[...table]
        tbcopy.push(user)
        settable(tbcopy)
        console.log('tbcopy',tbcopy);
        console.log('>>>',table);
        }else{
            console.error('not valid');
        }
    }

    const ValidateEmail=(email)=>{
        if(email){
            setEmailValid(true)
            setisEmailErr('')
            return true
        }else{
            setEmailValid(false)
            setisEmailErr('Please Enter Valid e-mail')
            return false
        }
    }
    const ValidatePassword=(password)=>{
        if(password){
            setPasswordDetails(true)
            setPassErr('')
        }else{
            setPasswordDetails(false)
            setPassErr('Please Enter Valid Password')
        }

    }
    const handleChange=(event)=>{
        console.log(event.target.name);
        const userCopy={...user}
        userCopy[event.target.name]=event.target.value
        setUser(userCopy)
    //    console.log('user :',user);
    }
   
    return (
        <div>
        
            <form onSubmit={login}>
                <div className="maindiv">
                <table >
                           <br/><br/>
                           <div className='login_form' >
                           <br/>
                           <h1 >Login Form</h1>
                           </div>
                
                                         <div >
                                         <label htmlFor='Email'>Enter your Email</label>
                                         <input className='form-control' type="email"
                                          name='email'
                                          placeholder='Enter email'
                                          onChange={(event)=>{
                                           handleChange(event)
                                        }}
                                          value={user.email}
                                        />
                                       
                     
                                          {!isEmailValid ? <span style={{color:'red',
                                          fontSize:'8px',fontSize:'larger'}}><br></br>{isEmailErr}</span> : null}  
                                         </div>                 
                                         <br/>
                                 <div >
                                        <label htmlFor='Password'>Enter Your Password</label>
                                         <input className="form-control" type="password"
                                          name="password"
                                          placeholder='Enter password'
                                          onChange={(event)=>{
                                            handleChange(event)
                                           }} value={user.password}/>
                                          {!passwordDetails ? <span style={{color:'red',
                                         fontSize:'5px',fontSize:'large'}}><br></br>{passErr}</span>:null}
                                 </div><br/>
                                  <div>
                                         <input type="submit" value="Login" />&nbsp;&nbsp;&nbsp;&nbsp;
                                          <Link style={{textDecoration:"none"}} to="/home">
                                          Go to Home Page
                                        </Link>
                                  </div>
                                  </table>                 
               </div>
                    </form>

                </div>
                
               
            )
            // <div>
            // <table>
            //     <tr>
            //         <th>email</th>
            //         <th>password</th>
            //     </tr>
            //     {
            //         table.map((item,index)=> {
            //             return <tr key={index}> 
            //             <td>{table.item.name}</td>
            //             <td>{item.email}</td>
            //             <td>{item.password}</td>
            //             </tr>
            //         })
            //     }
            // </table></div>
                  
        }
        
        export default Login
                        
                   
