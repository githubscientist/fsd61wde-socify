import authLoader from "../units/authLoader";
import postsLoader from "../units/postsLoader";

const feedLoader = async () => {
    try {
        const user = await authLoader();
        const posts = await postsLoader();

        return {
            user,
            posts
        };
    } catch (error) {
        return null;
    }
}

export default feedLoader;