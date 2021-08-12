import { Component } from 'react';

class CreatePosts extends Component {

    render() {
        return (
            <div className="PostContainer">
                <form>
                    <input type="text" placeholder="Post Title" />
                    <input type="text" placeholder="Post Content" />
                    <button type="Submit">Post</button>
                </form>
            </div>
        );
    }

}

export default CreatePosts;