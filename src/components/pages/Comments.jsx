import axios from 'axios';
import { useState, useEffect } from 'react';
import LikeButton from './LikeButton';

const Comments = (props) => {

    const addComment = 'http://localhost:3333/comment/add'
    const [userComment, setUserComment] = useState(' ');
    const [comments, setComments] = useState([])



    useEffect(async () => {
        const getComments = `http://localhost:3333/comment/show_comments/${props.post_id}`;
        const response = await fetch(getComments).then(response => response.json()).catch(err => alert(err));
        setComments(response);

    }, [setComments]);

    /* 
        const postComment = () => {
            axios.post(addComment, commentData)
                .then((response) => {
                    console.log(response)
                    alert('Comment Posted')
                })
                .catch((error) => [
                    alert(error)
                ])
        } */

    // data to insert into table
    /*     const commentData = {
            'channel_id': ' ',
            'text_content': userComment,
            'likes': useState(<LikeButton likes={this.likes} />),
        } */




    return (
        <div className="commentContainer">
            {comments.length > 0 ? (
                <ul>
                    {comments.map((entry, index) => (
                        <li key={index}>
                            <p>{entry.text_content}</p>
                            <p>{entry.user_id}</p>
                            <p>{entry.date_stamp}</p>
                        </li>
                    ))}

                </ul>
            )
                :
                null}


            )
        </div>
    )
}


export default Comments;