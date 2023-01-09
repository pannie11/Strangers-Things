import { api_url } from "./Const";
import { useState } from "react";

//none of this works. i must find out why 

function EditPost({posts, setPosts, postId, setPostId}) {
    const token = localStorage.getItem('token')
    // const [posts, setPosts] = useState([])
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [price, setPrice] = useState([]);
    // const [postId, setPostId] = useState('')
    // const postId = localStorage.getItem('_id')

    const inputValue = (cb) => { 
        return (event) => {
          cb(event.target.value);
        };
      };

    async function edit(event) {
        event.preventDefault();
    console.log('title, description, price', title, description, price)
    console.log('postId', postId);  

    try {
        const response = await fetch(`${api_url}/posts/${postId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                    title, 
                    description, 
                    price
                }
            })
        }
        )
        const result = response.json();
        console.log(result)
        if (result && result.title) {
            const newPosts = posts.map(post => {
                if (post.id === postId) {
                    return result
                } else {
                    return post;
                }
            });
            setPosts(newPosts)
            setTitle('');
            setDescription('');
            setPrice('');
            setPostId(null)
        } return result
    } catch (e) {
        console.log('Cannot edit')
        console.error(e)
    }
    }

    return (
        <div>
        <form onSubmit={edit}>
        <label>Title<input placeholder='title' onChange={inputValue(setTitle)} value={title}/></label>
        <label>Body<input placeholder='body' onChange={inputValue(setDescription)} value={description}/></label>
        <label>Price<input placeholder='price' onChange={inputValue(setPrice)} value={price}/></label>
        {/* <label>Will deliver<input onChange={inputValue(setWillDeliver)} value={willDeliver}/></label> */}
        <button>Edit</button>
        </form>
        </div>
    )
}

export default EditPost