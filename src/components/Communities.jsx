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
    }

    async _fetchDefaultChannels() {
        const url = "http://localhost:3333/channel/default";
        const response = await fetch(url).then(response => response.json());

        const defaultChannels = response;

        this.setState({
            channel: [defaultChannels]
        });
    }

    render() {
        const { channel } = this.state;

        return (
            <div className="DefaultChannels">
                {!!channel ? (<Sidebar channel={channel} />) : null}
            </div>
        );
    }
}

export default Communities;