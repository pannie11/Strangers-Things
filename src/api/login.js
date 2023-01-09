import { api_url } from "../Const";

export async function login(username, password) {
    try {
    const response = await fetch(`${api_url}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: username,
                password: password
            }
        })            
    }) 
    const result = await response.json();
    // console.log(result);
    return result
    } catch (e) {
        console.log('Login error')
        console.error(e)
    }
}

// export default login