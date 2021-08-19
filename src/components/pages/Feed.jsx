
import { useState, useEffect } from 'react';
import axios from 'axios';

const Feed = () => {
    // like button feature
    const [likes, setLikes] = useState(0);
    const [commentLikes, setCommentLikes] = useState(0);

    
    // comment function
    const addComment = 'https://localhost:3333/comment/add'
    const [userComment, setUserComment] = setState(' ');
    
    const postComment = () => {
        axios.post(addComment, commentData)
        .then((response) => {
            console.log(response)
            alert('Comment Posted')
        })
        .catch((error) => [
            alert(error)
        ])
    }

    // data to insert into table
    const commentData = {
        'id': ' ',
        'channel_id': ' ',
        'text_content' : userComment,
        'likes': likes, 
        'time_stamp': new Date(),
    }

    // fetch functions
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

    // may have to replace for loop with while loop. insert arrays into object and map object into container?
    for (const postFeedback in posts && commentFeedback in comments) {
        return (
            <div className="postContainer">
                {postFeedback}
                <div className="commentContainer">
                    {commentFeedback}
                    <button
                    type='button'
                    onClick={() => {
                        setCommentLikes(commentLikes++)
                    }}
                    >
                    Like 
                    </button>
                    <div>
                        {commentLikes}
                    </div>
                </div>
                <label htmlFor="postComment">Comment on this post
                    <input 
                    type="text"
                    value={userComment}
                    onChange={(e) => {setUserComment(e.target.value)}}
                    />
                    <button 
                    type='submit'
                    onClick={() => {
                        postComment()
                    }}
                    >
                        Comment
                    </button>
                </label>
                <div className="postLikes">
                    <button 
                    type='button'
                    onClick={() => {
                        setLikes(likes++)
                    }}
                    >
                    Like This Post
                    </button>
                    <div>
                    {likes}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Feed;