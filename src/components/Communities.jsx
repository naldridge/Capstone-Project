import React, { Component } from "react";
import { FiSidebar } from "react-icons/fi";
import Sidebar from "./Sidebar";
import "./Communities.css";

class Communities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: [],
    };
  }

  componentDidMount() {
    this._fetchDefaultChannels();
    console.log("state: ", this.state.channel);
  }

  async _fetchDefaultChannels() {
    const url = "http://localhost:3333/channel/default";
    const response = await fetch(url).then((response) => response.json());

    const defaultChannels = response;
    console.log("default channels: ", defaultChannels);

    this.setState({
      channel: [defaultChannels],
    });
  }

  render() {
    const { channel } = this.state;

    return (
      <div className="DefaultChannels">
        <div className="channelItem">
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
        <div className="channelItem">
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
        <div className="channelItem">
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
        <div className="channelItem">
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
      </div>
    );
  }
}

export default Communities;
