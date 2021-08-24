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
        <div className="mainDisplay">
          <div className="AllChannels">
            {channel.length > 0 ? (
              <ul>
                {channel.map((page, index) => (
                  <li className="channelItem" key={index}>
                    <Link to={`/channel/${page.slug}`}>
                      {page.channel_name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div className="DefaultChannels">
          <div className="mainDisplay">
            <div className="communityName">
              [Name of Community] Posted by [User] 3 months ago
            </div>
            <div className="postTitle">This Is The Title</div>
            <div className="postBody">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est,
            </div>
            <div className="postComments">4 comments</div>
          </div>
          <div className="commentDisplay">
            <div className="commentorTitle">Comment as davey</div>
            <form className="commentForm">
              <textarea
                className="commentInput"
                type="text"
                placeholder="what are your thoughts"
              />
              <input className="submitComment" type="submit" value="comment" />
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Communities;
