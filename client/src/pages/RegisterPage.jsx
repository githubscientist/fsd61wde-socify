import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectEmail, selectName, selectPassword, setEmail, setName, setPassword } from "../redux/features/auth/registerSlice";
import authServices from "../services/authServices";

const RegisterPage = () => {

    const name = useSelector(selectName);
    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        // Register logic here
        authServices.register({ name, email, password })
            .then((response) => {
                alert(response.data.message);

                // clear form
                dispatch(setName(""));
                dispatch(setEmail(""));
                dispatch(setPassword(""));

                // Redirect to login page
                setTimeout(() => {
                    navigate("/login");
                }, 500);
            })
            .catch((error) => {
                alert(error.response.data.message);
            });
    }

    return (
        <div className="container mt-5">
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name"
                        value={name}
                        onChange={(e) => dispatch(setName(e.target.value))}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email"
                        value={email}
                        onChange={(e) => dispatch(setEmail(e.target.value))}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password"
                        value={password}
                        onChange={(e) => dispatch(setPassword(e.target.value))}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}

export default RegisterPage