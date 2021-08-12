import { Component } from 'react';

class CreatePosts extends Component {

    render() {
        return (
            <div className="PostContainer">
                <form>
                    <div className="PostTitle">
                        <input type="text" placeholder="Post Title" />
                    </div>
                    <div className="PostContent">
                        <input type="text" placeholder="Post Content" />
                    </div>
                    <button type="Submit">Post</button>
                </form>
            </div>
        );
    }

}

export default CreatePosts;