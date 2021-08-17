import { Component } from 'react';

class NewChannel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            uniqueName: false,
            description: ''
        }
    }

    _handleChange = (field, val) => {
        this.setState({
            [field]: val,
        });
    };

   // _nameValidate = 


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
                            }
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