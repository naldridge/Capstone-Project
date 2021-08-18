import { Component } from 'react';

class DisplayChannel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channel_id: '',
            name: '',
            description: '',
            members_list: [],
            moderators_list: [],
        }
    }


    render() {
        return (
            <div className="ChannelDisplayContainer">
                <div className="ChannelTitle">
                    <h2>{this.state.name}</h2>
                </div>
                <div className="ChannelDescription">
                    <p>{this.state.description}</p>
                </div>
                <div className="MembersList">
                    <ul>
                        {/* map through members_list array */}
                    </ul>
                </div>
                <div className="ModsList">
                    {/* map through moderators_list array */}
                </div>
                <div className="PostsDisplay">
                    <div className="PostsFilter">{/* Filter Posts by date, etc. */}</div>
                    <div className="ShowPosts">
                        {/* Map through Posts */}
                    </div>
                </div>
            </div>
        )
    }
}

export default DisplayChannel;