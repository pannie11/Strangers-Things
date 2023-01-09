import {useState} from 'react';
import { api_url } from './Const';

//I think new posts only show up on the posts page if you refresh. The submittal does work though. Need to make it so that it automatically shows up on the post page without refreshing
const CreateNewPost = () => { 
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [price, setPrice] = useState([]);
    // const [willDeliver, setWillDeliver] = useState('')
    
    const token = localStorage.getItem('token')
    const inputValue = (cb) => { 
        return (event) => {
          cb(event.target.value);
        };
      };

  async function create(event) {
    event.preventDefault();
    console.log('title, description ', title, description)

    try {
        const response = await fetch(`${api_url}/posts`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                    title,
                    description, 
                    price, 
                    // willDeliver
                }
            })
        })
        const result = await response.json();
        console.log('result: ', result)
        setPosts([result, ...posts]) //this returns all the values of the posts entered
        setTitle(''); //clearing the forms!
        setDescription('')
        setPrice('')
        return result
       
        // setWillDeliver('')
    } catch (e) {
        console.log('Cannot create post')
        console.error(e)
    }
   
  }
  return(
    <div>
    <h2>Create new post</h2>
    <form onSubmit={create}>
    <label>Title<input placeholder='title' onChange={inputValue(setTitle)} value={title}/></label>
    <label>Description<input placeholder='body' onChange={inputValue(setDescription)} value={description}/></label>
    <label>Price<input placeholder='price' onChange={inputValue(setPrice)} value={price}/></label>
    {/* <label>Will deliver<input onChange={inputValue(setWillDeliver)} value={willDeliver}/></label> */}
    <button>Submit</button>
    </form>
    </div>
  )
}

export default CreateNewPost