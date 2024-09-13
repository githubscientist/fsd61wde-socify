import { useLoaderData, useRevalidator } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import postServices from "../services/postServices";

const Posts = () => {

    const { user, posts } = useLoaderData();
    const { revalidate } = useRevalidator();

    const handleLikeToggle = (postId) => {
        postServices.likePost(postId);

        revalidate();
    }

    return (
        <div className="container mt-5">
            <h1>My Posts</h1>
            <div className="row">
                {posts
                    .filter(post => post.user._id === user._id)
                    .map(post => (
                        <div key={post._id} className="col-8 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <strong className="card-title text-small">{post.user && post.user.name}</strong>
                                    <p className="card-text">{post.description}</p>
                                    <p className="card-text text-muted small">{post.createdAt.substring(0, 10)}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-link" onClick={() => handleLikeToggle(post._id)}>
                                        {
                                            post.likes.includes(user._id) ? (
                                                <FontAwesomeIcon icon={solidHeart} />
                                            ) : (
                                                <FontAwesomeIcon icon={regularHeart} />
                                            )
                                        }
                                    </button>
                                    <span>{post.likes.length}</span>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Posts;