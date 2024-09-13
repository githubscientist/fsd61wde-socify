import { Outlet, useLoaderData, useRevalidator } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutWrapper = () => {

    const user = useLoaderData();

    return (
        <>
            <Navbar
                user={user}
            />
            <div className="container">
                <Outlet />
            </div>
        </>
    )
}

export default LayoutWrapper;