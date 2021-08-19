import { Component } from 'react';
import { useParams } from 'react-router-dom';

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

    componentDidMount() {
        const { slug } = useParams();
 

        this._fetchChannel({slug});

        
    }

   async _fetchChannel(slug) {
        const url = `http:localhost:3333/channel/${slug}`;
        const response = await fetch(url).then(response => response.json());

        this.setState({
            channel_id: response.channel_id,
            name: response.channel_name,
            description: response.description,
        })
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