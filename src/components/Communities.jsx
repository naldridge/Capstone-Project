import React, { Component } from 'react';
import { FiSidebar } from 'react-icons/fi';
import Sidebar from './Sidebar';

class Communities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channel: [],
        }
    }

    componentDidMount() {
        this._fetchDefaultChannels();
        console.log("state: ", this.state.channel);
    }

    async _fetchDefaultChannels() {
        const url = "http://localhost:3333/channel/default";
        const response = await fetch(url).then(response => response.json());

        const defaultChannels = response;
        console.log("default channels: ", defaultChannels);

        this.setState({
            channel: [defaultChannels]
        });
    }

    render() {
        const { channel } = this.state;

        return (
            <div className="DefaultChannels">
                {!!channel.length > 0 ? (<Sidebar channel={channel} />) : null}
            </div>
        );
    }
}

export default Communities;