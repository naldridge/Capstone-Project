import { Component } from 'react';

class CreatePosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channel: '',
            user: '',
            title: '',
            textContent: '',
            multimediaContent: '',
            linkContent: '',
        }
    }

    _handleChange = (field, val) => {
        this.setState({
            [field]: val,
        });
    };

    _handleSubmit = async (e) => {
        e.preventDefault();
        //const url = backend address
        //const response = await fetch(url).then(response => response.json());
    }

    render() {
        return (
            <div className="PostContainer">
                <form>
                    <div className="PostTitle">
                        <input 
                        type="text" 
                        value={this.state.title} 
                        placeholder="Post Title" 
                        onChange={(e) => {
                            this._handleChange('title', e.target.value)}}
                        />
                    </div>
                    <div className="PostTextContent">
                        <input 
                        type="text" 
                        value={this.state.textContent}  
                        placeholder="Post Content" 
                        onChange={(e) => {
                            this._handleChange('textContent', e.target.value)}}
                        />
                    </div>
                    <div className="PostMultiMediaContent">
                        <input 
                        type="file" 
                        accept="image/*,.pdf,video/*" 
                        value={this.state.multimediaContent} 
                        placeholder="Upload image, PDF, or video" 
                        onChange={(e) => {
                            this._handleChange('multimediaContent', e.target.value)}}
                        />
                    </div>
                    <div className="PostLinkContent">
                        <input 
                        type="url" 
                        value={this.state.linkContent} 
                        placeholder="Post a Link" 
                        onChange={(e) => {
                            this._handleChange('linkContent', e.target.value)}}
                        />
                    </div>
                    <button type="Submit">Post</button>
                </form>
            </div>
        );
    }

}

export default CreatePosts;