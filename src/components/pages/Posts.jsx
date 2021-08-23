import axios from 'axios';
import Comments from './Comments';
import { useState, useEffect } from 'react';
import LikeButton from './LikeButton';


const Posts = (props) => {
    const [posts, setPosts] = useState([]);

   
    useEffect(async () => {
        console.log("any text", props);
        const getPosts = `http://localhost:3333/post/show_posts/${props.channel_id}`;
        console.log("getposts: ", getPosts);
        const response = await fetch(getPosts).then(response => response.json());
        setPosts(response);
    }, [setPosts]);

    /*     const likeObject = {
            'likes': useState(<LikeButton likes={this.likes} />)
        }
        const postLikecount = 'https://localhost:3333/add'
        useEffect(() => {
            axios.post(postLikecount, likeObject)
                .then(
                    alert('You liked This Post')
                )
                .catch(error => alert(error))
        }) */

    return (
        <div className="PostsContainer">
            {posts.length > 0 ? (
                <ul>
                    {posts.map((entry, index) => {
                        <li className="postItem" key={index}>
                            <h4>{entry.title}</h4>
                            <p>{entry.text_content}</p>
                            <p>User:{entry.user_id}</p>
                            <p>Posted:{entry.timestamp}</p>
                            <button onClick={<LikeButton />}>
                                Like
                            </button>
                            <button onClick={<Comments />}>
                                Comment
                            </button>
                        </li>
                    })}
                </ul>
            )
                :
                null}
        </div>

    )


    /*     for (const postFeedback in posts) {
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
        }*/
}

export default Posts;