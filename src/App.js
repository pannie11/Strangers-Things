import {BrowserRouter, Route, Link} from 'react-router-dom'
// import ReactDOM from 'react-dom';
import Home from './Home'
import Posts from './Posts'
import Register from './Register';
import Login from './Login';
// import CreateNewPost from './CreateNewPost';

function App() {
 
console.log('run')

  return (
    <div>
      <BrowserRouter>
      <Link to='/'><button>Home</button></Link>
        <Route exact path='/'>
          <Home/>
        </Route>
    <Link to='/posts'><button>Posts</button></Link>
        <Route exact path = '/posts'>
          <Posts />
        </Route>
    {/* <Link to='/createnewpost'><button>Create new post</button></Link>
      <Route exact path='/createnewpost'>
        <CreateNewPost />
      </Route> */}
    <Link to ='/register'><button>Registration</button></Link>
        <Route exact path = '/register'>
          <Register />
        </Route>
      {/* bleh, 1234 */}
      {/* {(!token) ? <Link to='/login'>Login</Link> : <button onClick={logout}>Log out</button>}  */}
        {/* the above code doesn't work */}
        <Link to='/login'><button>Login</button></Link>
        <Route exact path='/login'>
          <Login />
        </Route>
    </BrowserRouter>
    </div>
  )
}

export default App;

// ReactDOM.render(<App />, document.getElementById('app'))
// ReactDOM.createRoot(document.getElementById('root'));



