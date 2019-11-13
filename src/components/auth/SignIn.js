import React, {useState} from 'react';
import '../../App.css';

const SignIn = () => {

    const [credentials, setCredentials] = useState({email: "", password:""})
    
    function handleSubmit (e) {
        console.log(e)
    }

   function handleChange (e){
        console.log(e)
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div className = "sign-in-page">
            <div className= "container ">
            <form onSubmit = {handleSubmit} >
                <h5 className="black-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={credentials.email} onChange={handleChange}></input>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={credentials.password} onChange={handleChange}></input>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                </div>
            </form>
            
            </div>
        </div>
        
    );
};

export default SignIn