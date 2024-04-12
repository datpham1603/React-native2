import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCategoryData } from "../../services/category.sevice";
import axios from "axios";


export const fetchSubcate = createAsyncThunk(
    'category/fetchsubcate',
    async (categoryId, thunkApi) => {
        try {
            const response = await axios.get(`http://192.168.18.105:3000/v1/getsubcategory?parent_id=${categoryId}`)
            return response.data
        } catch (error) {
            console.log(err)
            throw error;
        }
    }
)

const initialState = {
    subcate: {},
    loading: false,
    error: null
};

const productPortfolioSlice = createSlice({
    name: 'productPortfolio',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSubcate.fulfilled, (state, action) => {
            state.subcate = action.payload
            state.loading = false;
            state.error = null;
        });
        builder.addCase(fetchSubcate.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchSubcate.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

    }
});

export default productPortfolioSlice.reducer
