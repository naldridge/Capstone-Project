import { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
    const addPost = 'http:/localhost:3333/post/add'
    const [post, setPost] = useState(' ');
    const postToApi = () => {
        axios.post(addPost, post)
        .then(response => console.log(response))
        .catch(error => alert(error))
    }

    return (
        <div className="createPost">
            <label htmlFor="">Create a new post
                <input 
                type="text" 
                placeholder='Type Something...'
                value={post}
                onChange={(e) => {setPost(e.target.value)}}
                />
                <button
                type='submit'
                onClick={() => {
                    postToApi()
                }}
                >
                    Post
                </button>

            </label>
        </div>
    )
}