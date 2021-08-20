import { Component } from 'react';

class NewChannel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            uniqueName: false,
            description: '',
            channel_id: '',
        }
    }

    async _fetchAddChannel() {
        const url = `http://localhost:3333/channel/add_channel`;
        const requestData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ channel_name: this.state.name, channel_description: this.state.description })
        };

        const response = await fetch(url, requestData).then(response => response.json());

        //show us what the response looks like so we know what to reference to update the state
        console.log("The API response is: ", response);

        //reset the state to incorporate the new channel_id
    }

    _handleChange = (field, val) => {
        this.setState({
            [field]: val,
        });
    };

   // _nameValidate = 


    _handleSubmit = async (e) => {
        e.preventDefault();

    }

    render() {
        const { name, uniqueName, description } = this.state;

        return (
            <div className="CreateChannelContainer">
                <h1>Create a New Channel</h1>
                <div className="CreateChannelForm">
                    <form>
                        Channel Name: <input
                            type="text"
                            value={name}
                            onChange={(e) => {
                                this._handleChange('name', e.target.value)
                            }}
                        />
                        {uniqueName ?
                            <div>
                                <input type="text" placehoder="Describe your channel..." />
                                <button type="submit">Create Channel!</button>
                            </div>
                            :
                            <button type="submit">Check Name</button>
                        }
                    </form>
                </div>
            </div>
        )
    }
}

export default NewChannel;