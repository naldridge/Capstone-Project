import { Component } from 'react';

class NewChannel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            moderators: [],
            members: [],
        }
    }


    render() {
        const { name } = this.state;

        return(
            <div className="ChannelContainer">
                <h1>{ name }</h1>
            </div>
        )
    }
}

export default NewChannel;