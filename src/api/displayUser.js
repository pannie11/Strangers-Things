import { api_url } from "../Const";

export async function displayUser({token}){
   console.log(token)
    try {
      const response = await fetch(`${api_url}/users/me`, {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,
          },
        }
      );
    
      const result = await response.json();
    //   console.log(result)
      return result

    } catch (e) {
        console.log('Error, could not return data')
        console.error(e)
    }
}
    
  