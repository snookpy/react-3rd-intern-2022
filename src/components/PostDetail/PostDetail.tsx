import { useNavigate } from 'react-router'
import Post from '../../models/Post'
import './post-detail.css'

interface PostDetailProps {
    post: Post
}
function PostDetail ({post}: PostDetailProps){

    const navigate = useNavigate()
    return <div className="post">
        <h3>Title: {post.title}</h3>
        <p>
            {post.body}
        </p>
        <button onClick={() => navigate(`/posts/${post.id}`)}>
            Info
        </button>
    </div>
}

export default PostDetail