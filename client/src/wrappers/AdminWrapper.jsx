import { Navigate, Outlet, useLoaderData } from "react-router-dom"

const AdminWrapper = () => {

    const user = useLoaderData();

    if (!user || user.role !== "admin") {
        return <Navigate to="/login" />
    }

    return <Outlet />
}

export default AdminWrapper