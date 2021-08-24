import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Communities.css";
import CreateCommunityButton from "./CreateCommunityButton";

class Communities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: [],
    };
  }

  componentDidMount() {
    this._fetchAllChannels();
  }

  async _fetchAllChannels() {
    const url = "http://localhost:3333/channel/";
    const response = await fetch(url).then((response) => response.json());

    const channels = response;
    console.log("all channels: ", channels);

    this.setState({
      channel: channels,
    });

    console.log("state: ", this.state);
  }

  render() {
    const { channel } = this.state;

    return (
      <>
        <div>
          <CreateCommunityButton />
        </div>
        <div className="AllChannels">
        <h2>Communities List:</h2>
          {channel.length > 0 ? (
            <ul>
              
              {channel.map((page, index) => (
                <li className="channelItem" key={index}>
                  <Link to={`/channel/${page.slug}`}>
                    {page.channel_name}
                  </Link>
                </li>
              ))
              }
            </ul>
          ) : null}
        </div>
      </>
    );
  }
}

export default Communities;
