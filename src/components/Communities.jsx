import React, { Component } from 'react';

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
        const { name } = this.state;

        return (
            <div className="DisplayDefaultChannels">
                {name.map((channel, index) => {
                    <div key={index}>
                        {channel.name}
                    </div>
                })}
            </div>
        );
    }
}

export default Communities;