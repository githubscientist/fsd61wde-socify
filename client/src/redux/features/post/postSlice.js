import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        description: '',
    },
    reducers: {
        setDescription: (state, action) => {
            state.description = action.payload;
        },
    }
});

export const { setDescription } = postSlice.actions;

export const selectDescription = state => state.post.description;

export default postSlice.reducer;