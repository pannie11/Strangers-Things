import { useHistory } from "react-router"
import { useState } from "react";

function Home() {
const history = useHistory();
const username = localStorage.getItem('username')
const [token, setToken] = useState(localStorage.getItem('token')) //token already exists so we getting it lol

function logout() {
    history.push('/') 
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    setToken('')
}

return (
<div>
    <h1>Strangers Things</h1>
    {(token) ? <h2>User: {username}</h2> : null}
    {(token) ? <button onClick={logout}>Logout</button> : null}
</div>
)
}

export default Home

