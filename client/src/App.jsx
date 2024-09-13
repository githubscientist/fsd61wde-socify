import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LayoutWrapper from "./wrappers/LayoutWrapper"
import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import AuthWrapper from "./wrappers/AuthWrapper"
import ProfilePage from "./pages/ProfilePage"
import CreatePostPage from "./pages/CreatePostPage"
import AdminWrapper from "./wrappers/AdminWrapper"
import AdminDashboardPage from "./pages/AdminDashboardPage"
import ManageUsersPage from "./pages/ManageUsersPage"
import ManagePostsPage from "./pages/ManagePostsPage"
import authLoader from "./loaders/units/authLoader"
import Logout from "./components/Logout"
import Dashboard from "./pages/Dashboard"
import Posts from "./pages/Posts"
import Feed from "./pages/Feed"
import postsLoader from "./loaders/units/postsLoader"
import feedLoader from "./loaders/combined/feedLoader"

const router = createBrowserRouter([
  {
    element: <LayoutWrapper />,
    loader: authLoader,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/register",
        element: <RegisterPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/logout",
        element: <Logout />
      },
      {
        element: <AuthWrapper />,
        loader: authLoader,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
            loader: feedLoader
          },
          {
            path: "/feed",
            element: <Feed />,
            loader: feedLoader
          },
          {
            path: "/posts",
            element: <Posts />,
            loader: feedLoader
          },
          {
            path: "/createPost",
            element: <CreatePostPage />
          },
          {
            path: "/profile",
            element: <ProfilePage />,
            loader: authLoader
          },
        ]
      },
      {
        element: <AdminWrapper />,
        loader: authLoader,
        children: [
          {
            path: "/admin/dashboard",
            element: <AdminDashboardPage />
          },
          {
            path: "/admin/users",
            element: <ManageUsersPage />
          },
          {
            path: "/admin/posts",
            element: <ManagePostsPage />
          }
        ]
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App