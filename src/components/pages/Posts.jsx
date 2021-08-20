import axios from 'axios';

const Posts = () => {

    const [likes, setLikes] = useState(0);
    const [posts, setPosts] = useState([ ]);
    const getPosts = 'https://localhost:3333/post/showposts';

    useEffect(() => {
        axios.get(getPosts)
        .then((response) => {
            setPosts(response.data);
        })
        .catch(error => {
            alert(error)
        })
    });

    for (const postFeedback in posts) {
        return (
            <div className="postContainer">
                <div className="title">
                {postFeedback.title}
                </div>
                <div className="content">
                {postFeedback.text_content}
                </div>
                <div className="postLikes">
                    <button 
                    type='button'
                    onClick={() => {
                        setLikes(likes++)
                    }}
                    >
                    Like This Post
                    </button>
                    <div>
                    {likes}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Posts;