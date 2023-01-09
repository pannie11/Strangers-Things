// import {Link} from 'react-router-dom';
// import { api_url} from "./Const"
import { useHistory } from "react-router-dom";
import React, {useState} from 'react';
import createUser from './api/createUser';

function Register() {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
   
    //for onChange
    const inputValue = (cb) => { 
        return (event) => {
          cb(event.target.value);
        };
      };

     async function submitRegister(event) {
       event.preventDefault();
       console.log('run')

       await createUser(username, password)
       .then(result => {
        if (result.success) {
            history.push('/login')
            setUsername('') //
            setPassword('') 
        } else {
                setErrorMessage(result.error.message)
            }
        })
     }

return (
    <div>
        <h1>Registration</h1>
        <form onSubmit={submitRegister}>
            <label>Username: <input placeholder='username' onChange={inputValue(setUsername)} value={username} required/></label>
            <label>Password: <input placeholder='password' type='password' onChange={inputValue(setPassword)} value={password} required/></label>
            <button>Register</button>
            {errorMessage && <p>{errorMessage}</p>}
           </form> 
    </div>
)}



export default Register