import { useState } from "react"; 

const LikeButton = () => {
    let [likes, setLikes] = useState(0)

    return (

        <button 
        type='button'
        onClick={() => {
            setLikes(likes++)
        }}
        >
            <div className="likeCount">
            {likes}
            </div>
        Like
        </button>
    )
}
export default LikeButton;