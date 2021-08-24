import axios from "axios";
import Comments from "./Comments";
import Users from "./Users";
import { useState, useEffect } from "react";
import LikeButton from "./LikeButton";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const getPosts = `http://localhost:3333/post/show_posts/${props.channel_id}`;
    const response = await fetch(getPosts)
      .then((response) => response.json())
      .catch((err) => alert(err));
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
          {posts.map((entry, index) => (
            <li
              className="postItem"
              key={index}
              borderWidth="bottom"
              border="3px"
            >
              <h4>{entry.title}</h4>
              <p>{entry.text_content}</p>
              <p>
                <Users user_id={entry.user_id} />
              </p>
              <p>Posted:{entry.time_stamp}</p>
              <div className="comments">
                <Comments post_id={entry.id} />
              </div>
              <button onClick={<LikeButton />}>Like</button>
              <button onClick={<Comments />}>Comment</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Empty</p>
      )}
    </div>
  );

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
};

export default Posts;
