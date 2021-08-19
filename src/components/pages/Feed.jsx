
import { useState } from 'react';
import axios from 'axios';

const Feed = () => {
    const [posts, setPosts] = useState([ ]);
    // const [comments, setComments] = useState([ ]);
   
    axios({
        method: 'GET',
        url: 'http://localhost:3333/post/showposts',
    })
    .then((response) => {
        console.log(response);
        setPosts(response.data)
    })
    .catch(error => {
        alert(error)
    })

    for (const post in posts) {
        return (
            <div className="postContainer">
                {post}
            </div>
        )
    }
}

export default Feed;