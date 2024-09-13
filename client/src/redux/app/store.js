import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/auth/registerSlice";
import loginReducer from "../features/auth/loginSlice";
import postReducer from "../features/post/postSlice";

const store = configureStore({
    reducer: {
        register: registerReducer,
        login: loginReducer,
        post: postReducer,
    }
});

export default store;