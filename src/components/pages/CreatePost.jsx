import { useState } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import "../Posts.css";

const CreatePost = () => {
  const addPost = "http:/localhost:3333/post/add";
  const [post, setPost] = useState(" ");
  const [title, setTitle] = useState(" ");
  const postToApi = () => {
    axios
      .post(addPost, postData)
      .then((response) => console.log(response))
      .catch((error) => alert(error));
  };

  const postData = {
    user_id: " ",
    channel_id: " ",
    title: title,
    text_content: post,
  };

  return (
    <>
      <div className="mainDisplay1">
        <div className="postTitle">Create a new Post</div>
        <div className="postBody">
          <div className="createPost">
            <label htmlFor="" className="titlePost">
              Title of post:
              <input
                className="input1"
                type="text"
                placeholder="Give your post a title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />{" "}
              Description
              <input
                className="input2"
                type="text"
                placeholder="Type Something..."
                value={post}
                onChange={(e) => {
                  setPost(e.target.value);
                }}
              />
              <Button
                onClick={() => {
                  postToApi();
                }}
                type="submit"
                size="md"
                height="40px"
                width="80px"
                border="4px"
                borderColor="#718096"
                color="white"
              >
                Post
              </Button>
            </label>
          </div>
        </div>
      </div>

      {/* <div className="createPost">
        <label htmlFor="">
          Create a new post
          <input
            type="text"
            placeholder="Give your post a title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Type Something..."
            value={post}
            onChange={(e) => {
              setPost(e.target.value);
            }}
          />
          <button
            className="postButton"
            type="submit"
            onClick={() => {
              postToApi();
            }}
          >
            Post
          </button>
        
        </label>
      </div> */}
    </>
  );
};

export default CreatePost;
