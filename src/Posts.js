import {useEffect, useState} from 'react';
import { api_url } from './Const';
import CreateNewPost from './CreateNewPost';
import EditPost from './EditPost';


function Posts() {
const [posts, setPosts] = useState([])
const [postId, setPostId] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await fetch(`${api_url}/posts`);
      const json = await resp.json();
      const data = json.data.posts
      setPosts(data)
    }
    fetchPosts()
  }, [])

  //delete worked ONCE but never again, but I didn't change the code
 async function deletePost () {
  
    const token = localStorage.getItem('token')

    try{
    const response = await fetch(`${api_url}/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'applicaton/json',
            'Authorization': `Bearer ${token}`
        }
    })
     const result = await response.json(); 
     console.log(result)
     setPostId(null)
    return result
} catch (e) {
    console.log('Cannot delete')
    console.error(e)
}
}

  return (
    <div className="app">
     <h1>
      Posts
     </h1>
     {/* updating our posts! */}
     {(postId) ? <EditPost posts={posts} setPosts={setPosts} postId={postId} setPostId={setPostId} /> :
     <CreateNewPost posts={posts} setPosts={setPosts}/>}
      {posts.map(post => 
      <div key={post._id}>
        <h3>{post.title}</h3>
        <div>{post.description} {post.price} {post.willDeliver} </div>
        <button onClick={()=>setPostId(post._id)}>Edit</button> 
        <button onClick={deletePost}>Delete</button>
        </div>
       )}
    </div>
    )
}

export default Posts
