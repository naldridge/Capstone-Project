
import { useState, useEffect } from 'react';
import axios from 'axios';

const Feed = () => {
    const [posts, setPosts] = useState([ ]);
    const [comments, setComments] = useState([ ]);
    
    const getPosts = 'http://localhost:3333/post/showposts';
    const getComments = 'http://localhost333/comment/show_comments';

    const postsCall = axios.get(getPosts);
    const commentCall = axios.get(getComments);

    useEffect(() => {
        axios.all([postsCall, commentCall])
        .then(axios.spread((...responses) => {
            const postResponse = responses[0];
            const commentResponse = responses[1];

            setPosts(postResponse);
            setComments(commentResponse)
        }))
        .catch(error => {
            alert(error)
        })
    });

    for (const post in posts && commentFeedback in comments) {
        return (
            <div className="postContainer">
                {post}
                <div className="commentContainer">
                    {commentFeedback}
                </div>
            </div>
        )
    }
}

export default Feed;