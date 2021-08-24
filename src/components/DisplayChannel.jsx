import { Component } from "react";
import { withRouter } from "react-router";
import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";

class DisplayChannel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channel_id: "",
      name: "",
      description: "",
      members_list: [],
      moderators_list: [],
    };
  }

  componentDidMount() {
    const slug = this.props.match.params.slug;
    this._fetchChannel(slug);
  }

  async _fetchChannel(slug) {
    const url = `http://localhost:3333/channel/${slug}`;
    const response = await fetch(url).then((response) => response.json());

    this.setState({
      channel_id: response.id,
      name: response.channel_name,
      description: response.description,
    });
  }

  render() {
    return (
      <div className="ChannelDisplayContainer">
        <div className="ChannelTitle">
          <h2>{this.state.name}</h2>
        </div>
        <div className="ChannelDescription">
          <p>{this.state.description}</p>
        </div>
        <div className="MembersList">
          <ul>{/* map through members_list array */}</ul>
        </div>
        <div className="ModsList">
          {/* map through moderators_list array */}
        </div>
        <div className="createPost">
          <CreatePost />
        </div>
        <div className="PostsDisplay">
          <div className="PostsFilter">{/* Filter Posts by date, etc. */}</div>
          <div className="ShowPosts">
            {!!this.state.channel_id ? (
              <Posts channel_id={this.state.channel_id} />
            ) : null}
          </div>
          {/* <div className="postComments">4 comments</div> */}
        </div>
        {/* <div className="commentDisplay">
                    <div className="commentorTitle">Comment as davey</div>
                    <form className="commentForm">
                        <textarea
                            className="commentInput"
                            type="text"
                            placeholder="what are your thoughts"
                        />
                        <input className="submitComment" type="submit" value="comment" />
                    </form>
                </div> */}
        <div className="PostsFilter">{/* Filter Posts by date, etc. */}</div>
        <div className="ShowPosts">{/* Map through Posts */}</div>
      </div>
    );
  }
}

export default withRouter(DisplayChannel);
