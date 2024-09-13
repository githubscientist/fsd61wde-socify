import { useLoaderData } from "react-router-dom";

const Dashboard = () => {

    const { user, posts } = useLoaderData();

    const popularPosts = posts.sort((a, b) => b.likes.length - a.likes.length).slice(0, 2);

    return (
        <div className="container mt-5">
            <h1>Dashboard</h1>
            <p>Welcome, {user.name}!</p>
            <h2>Popular Posts</h2>
            <ul>
                {popularPosts.map(post => (
                    <li key={post._id}>
                        <h6>{post.description}</h6>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Dashboard;