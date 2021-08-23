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
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
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

          <div className="mainDisplay">
            <div className="communityName">
              [Name of Community] Posted by [User] 2 months ago
            </div>

            <div className="postTitle"> This is the Title</div>
            <div className="postBody">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              mollitia ut obcaecati? Reprehenderit minima iste error eaque
              repudiandae nobis, architecto provident corporis voluptatem
              nesciunt facilis qui iure impedit numquam consectetur.
            </div>
          </div>
          <div className="postComments"> 8 comments</div>
          <div className="commentDisplay">
            <div className="commentorTitle">Comment as bri</div>
            <form className="commentForm">
              <textarea
                className="commentInput"
                type="text"
                placeholder="What are your thoughts"
              />
              <input className="submitComment" type="submit" value="comment" />
            </form>

            <div className="mainDisplay">
              <div className="communityName">
                [Name of Community] Posted by [User] 12 days ago
              </div>

              <div className="postTitle"> This is the Title</div>
              <div className="postBody">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas asperiores, corporis saepe, enim quod magnam blanditiis
                consectetur earum fugiat pariatur ipsam quae nulla beatae?
                Inventore excepturi numquam repellendus temporibus magnam.
              </div>
            </div>
          </div>
          <div className="postComments">2 Comments</div>
          <div className="commentDisplay">
            <div className="commentorTitle">Comment as immanuel</div>
            <form className="commentsForm">
              <textarea
                className="commentInput"
                type="text"
                placeholder="What are your thoughts"
              />
              <input className="submitComment" type="submit" value="comment" />
            </form>
            <div className="mainDisplay">
              <div className="communityName">
                [Name of Community Posted by [User] 1 day ago]
              </div>

              <div className="postTitle">This is the Title</div>
              <div className="postBody">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
                maiores nesciunt excepturi accusamus error, enim rerum dolor
                temporibus fugit voluptatibus aut voluptatum perferendis
                dolores. Deleniti debitis at distinctio. Doloribus, provident.
              </div>
            </div>
            <div className="postComments"> 3 comments</div>
            <div className="commentDisplay">
              <div className="commentorTitle">Comment as nick</div>
              <form className="commentForm">
                <textarea
                  className="commentInput"
                  type="text"
                  placeholder="What are your thoughts"
                />
                <input
                  className="submitComment"
                  type="submit"
                  value="comment"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Communities;
