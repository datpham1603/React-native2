import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCategoryData } from "../../services/category.sevice";
import axios from "axios";

export const fetchCategory = createAsyncThunk(
    'category/fetchCategory',
    async (userData, thunkApi) => {
        try {
            const response = await fetchCategoryData();
            return response;
        } catch (error) {
            console.log(err)
            throw error;
        }
    }
);


const initialState = {
    categories: {},
    loading: false,
    error: null
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            state.categories = action.payload
            state.loading = false;
            state.error = null;
        });
        builder.addCase(fetchCategory.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

    }
});

export default categorySlice.reducer
