import axios from 'axios';
import Comments from './Comments';
import { useState, useEffect } from 'react';
import LikeButton from './LikeButton';


const Posts = () => {
    const [posts, setPosts] = useState([ ]);
    const getPosts = 'https://localhost:3333/post/showposts';

    useEffect(() => {
        axios.get(getPosts)
        .then((response) => {
            setPosts(response.data);
        })
        .catch(error => {
            alert(error)
        })
    });

    const likeObject = {
        'likes': useState(<LikeButton likes={this.likes} />)
    }
    const postLikecount = 'https://localhost:3333/add'
    useEffect(() => {
        axios.post(postLikecount, likeObject)
        .then(
            alert('You liked This Post')
        )
        .catch(error => alert(error))
    })
 
    for (const postFeedback in posts) {
        return (
            <div className="postContainer">
                <div className="title">
                {postFeedback.title}
                </div>
                <div className="content">
                {postFeedback.text_content}
                </div>
                <div className="postLikes">
                    <LikeButton />
                </div>

                <div className="comments">
                    <Comments />
                </div>

            </div>
        )
    }
}

export default Posts;