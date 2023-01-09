import { useHistory } from 'react-router';
import {useState} from 'react';
import {login} from './api/login';

// console.log(login)

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    //for onChange
    const inputValue = (cb) => { 
        return (event) => {
          cb(event.target.value);
        };
      };

 async function submitLogin(event) {
    console.log('boo')
        event.preventDefault();
      
        try {
    const result = await login(username, password) 
    
             if (result.success) {
            const resultToken = await result.data.token
            localStorage.setItem('token', resultToken)
            localStorage.setItem('username', username)
             history.push('/');
            console.log(result.data)
        
        }
     
    } catch (e) {
        console.log('error')
        console.error(e)
    }

      setUsername('') //clearing our form
      setPassword('') 
     }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(e) => {submitLogin(e)}}>
            <label>Username: <input placeholder='username' onChange={inputValue(setUsername)} value={username} required/></label>
            <label>Password: <input placeholder='password' type='password' onChange={inputValue(setPassword)} value={password} required/></label>
            <button type='submit'>Login</button> 
            {/* your mistake was writing a function to redirect to the homepage in the button tag, causing the form submission error */}
            {/* says form submission canceled because form did not submit, but it worked?? */}
            {/* {errorMessage && <p>{errorMessage}</p>} */}

            </form>
        </div>
    )
}


export default Login

//if token exists, display logout. clear local storage and set token to empty string


