import { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
    const addPost = 'http:/localhost:3333/post/add'
    const [post, setPost] = useState(' ');
    const [title, setTitle] = useState(' ')
    const postToApi = () => {
        axios.post(addPost, postData)
        .then(response => console.log(response))
        .catch(error => alert(error))
    }

    const postData = {
        'user_id': ' ',
        'channel_id': ' ',
        'title': title,
        'text_content': post,
    }

    return (
        <div className="createPost">
            <label htmlFor="">Create a new post
                <input 
                type="text"
                placeholder='Give your post a title'
                value={title}
                onChange={(e) => {setTitle(e.target.value)}}
                />
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

export default CreatePost;