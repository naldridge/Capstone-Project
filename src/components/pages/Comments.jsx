import axios from 'axios';
import { useState, useEffect } from 'react';
import LikeButton from './LikeButton';

const Comments = () => {
    const getComments = 'http://localhost:3333/comment/show_comments'
    const addComment = 'http://localhost:3333/comment/add'
    const [userComment, setUserComment] = useState(' ');
    const [comment, setComment] = useState([ ])
    
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
        'likes': useState(<LikeButton likes={this.likes} />), 
        'time_stamp': new Date(),
    }

    useEffect(() => {
        axios.get(getComments)
        .then((response) => {
                setComment(response.data)} 
        )
        .catch(error => alert(error))
    })
   

    for (let comments in comment) {
    return (
        <div className="commentContainer">
            <div className="display">
                {comments.text_content}
            </div>
            <div className="addComment">
                <label htmlFor="">Make a comment
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
                Post Comment
                </button>
                </label>
            </div>
            <div className="likeButton">
                <LikeButton />
            </div>
        </div>
    )}
}

export default Comments;