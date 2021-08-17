import { useState } from "react";
import axios from 'axios';

const url = `https://localhost:3333/post/add`;

const Post = () => {

    const sendToServer = () => {
        axios({
            method: 'POST',
            url: url,
        })
        .then(response => this.setState({postId: response.data.id})
        )
        .catch(error => {
            console.log('ERROR: ', error)
        })
    }

    const [userPost, setUserPost] = useState(' ')
    
    return (
        <>
        <div className='postCard'>
            <label htmlFor="post">Create a Post
                <input 
                type="text"
                value={userPost}
                onChange={(e) => {setUserPost(e.target.value)}}
                 placeholder='Post Something...' />
                <button 
                type='submit'
                onClick={() => {
                    sendToServer()
                }}
                >
                Post
                </button>
            </label>

        </div>
        </>
    )
}

export default Post;