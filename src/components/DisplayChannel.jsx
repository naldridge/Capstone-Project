import { Component } from 'react';
import { withRouter } from 'react-router';


class DisplayChannel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channel_id: '',
            name: '',
            description: '',
            members_list: [],
            moderators_list: [],
        }
    }

    componentDidMount() {
        const slug = this.props.match.params.slug;
        this._fetchChannel(slug);
    }

    async _fetchChannel(slug) {

        const url = `http://localhost:3333/channel/${slug}`;
        console.log("url: ", url);
        const response = await fetch(url).then(response => response.json());

        console.log("response", response);


        this.setState({
            channel_id: response.channel_id,
            name: response.channel_name,
            description: response.description,
        })
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
                    <ul>
                        {/* map through members_list array */}
                    </ul>
                </div>
                <div className="ModsList">
                    {/* map through moderators_list array */}
                </div>

                <div className="PostsDisplay">
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
                </div>
                <div className="PostsFilter">{/* Filter Posts by date, etc. */}</div>
                <div className="ShowPosts">
                    {/* Map through Posts */}
                </div>
            </div>
        )
    }
}

export default withRouter(DisplayChannel);