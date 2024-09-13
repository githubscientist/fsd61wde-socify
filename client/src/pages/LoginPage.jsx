import { useSelector } from "react-redux";
import { selectEmail, setEmail, setPassword } from "../redux/features/auth/loginSlice";
import { selectPassword } from "../redux/features/auth/loginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authServices from "../services/authServices";

const LoginPage = () => {

    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Here you can add your login logic
        authServices.login({ email, password })
            .then((response) => {
                alert(response.data.message);

                // clear the form
                dispatch(setEmail(""));
                dispatch(setPassword(""));

                // Redirect to the dashboard page
                setTimeout(() => {
                    navigate("/");
                    window.location.reload();
                }, 500);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
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
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default LoginPage