import postServices from "../../services/postServices";

const postsLoader = async () => {
    try {
        const response = await postServices.getAllPosts();

        return response.data;
    } catch (error) {
        return null;
    }
}

export default postsLoader;