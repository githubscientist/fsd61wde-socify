import { useLoaderData, useRevalidator } from "react-router-dom"
import userServices from "../services/userServices";

const ProfilePage = () => {

    const user = useLoaderData();
    const { revalidate } = useRevalidator();

    const handleUpdateProfilePicture = async (e) => {
        // get the file
        const file = e.target.files[0];

        // create a new FormData
        const formData = new FormData();

        // append the file to FormData
        formData.append('profilePicture', file);

        userServices.updateProfilePicture(formData)
            .then(response => {
                alert(response.data.message);
                revalidate();
            })
            .catch(error => {
                alert(error.response.data.message);
            });
    }

    return (
        <div className="container mt-5">
            <h1>Profile</h1>
            <div className="row">
                <div className="col-8">
                    <div className="form-group">
                        <img
                            src={user.profilePicture ? 'https://fsd61wde-be.onrender.com/' + user.profilePicture : 'https://www.gravatar.com/avatar/' + user.email + '?s=200'}
                            alt="Profile"
                        />
                        <input
                            type="file"
                            className="form-control mt-3"
                            accept="image/*"
                            onChange={handleUpdateProfilePicture}
                        />
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" value={user.name} disabled />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={user.email} disabled />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage