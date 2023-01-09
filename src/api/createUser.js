import { api_url } from '../Const';


async function createUser(username, password) {

    try {
        const response = await fetch(`${api_url}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password,
                },
            })
        }) 
        const result = await response.json();
        // setToken(result.data.token)
        console.log(result)
        return result
        
    } catch (e) {
        console.log('Failed registration')
        console.error(e)
    
    }
}

export default createUser