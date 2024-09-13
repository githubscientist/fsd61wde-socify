import { useDispatch, useSelector } from "react-redux";
import { selectDescription, setDescription } from "../redux/features/post/postSlice";
import postServices from "../services/postServices";
import { useNavigate } from "react-router-dom";


const CreatePostPage = () => {

    const description = useSelector(selectDescription);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleCreatePost = (e) => {
        e.preventDefault();

        postServices.createPost({ description })
            .then(response => {
                alert(response.data.message);

                // clear the description field
                dispatch(setDescription(''));

                // redirect to feed page
                setTimeout(() => {
                    navigate('/feed');
                })
            })
            .catch(error => {
                alert(error.response.data.message);
            });
    }

    return (
        <div className="container mt-5">
            <h1>Create Post</h1>
            <form onSubmit={handleCreatePost}>
                <div className="form-group mb-4">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" rows="3"
                        value={description}
                        onChange={(e) => dispatch(setDescription(e.target.value))}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default CreatePostPage;