import axios from "axios"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async (category_id, thunkApi) => {
        try {
            const data = await axios.get("http://192.168.18:3000/v1/getproductByCategoryId", {
                params: {
                    category_id: category_id
                }
            });
            return data.data
        } catch (error) {
            console.log(err)
            throw error;
        }
    }
);
export const fetchProductById = createAsyncThunk(
    'product/fetchProductById',
    async (_id, thunkApi) => {
        try {
            const data = await axios.get("http://192.168.18:3000/v1/getproductbyId", {
                params: {
                    _id
                }
            });
            return data.data
        } catch (error) {
            console.log(err)
            throw error;
        }
    }
);
export const getProductCart = createAsyncThunk(
    'product/getProductCart',
    async (arrIdProduct, thunkApi) => {
        try {
            
            const data = await axios.get("http://192.168.18:3000/v1/getProductCart", {
                params: {
                    arrIdProduct
                }
            });
            return data.data
        } catch (error) {
            console.log(err)
            throw error;
        }
    }
);

const initialState = {
    quantity:0,
    productCart:{},
    products: {},
    product:{},
    isLoading: false,
    isErr: null
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct(state,action){
           state.quantity +1
        },
        removeProduct(state,action){
          if(state.quantity === 0){
            state.quantity = state.quantity
            return;
          }
          state.quantity-1;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.products = action.payload
            state.isLoading = false
        })
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isErr = action.err.message;
        })
        builder.addCase(fetchProductById.fulfilled, (state, action) => {
            state.product = action.payload
            state.isLoading = false
        })
        builder.addCase(fetchProductById.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchProductById.rejected, (state, action) => {
            state.isLoading = false;
            state.isErr = action.err.message;
        })
        builder.addCase(getProductCart.fulfilled, (state, action) => {
            state.productCart = action.payload
            state.isLoading = false
        })
        builder.addCase(getProductCart.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getProductCart.rejected, (state, action) => {
            state.isLoading = false;
            state.isErr = action.err.message;
        })
    }
})
export default productSlice.reducer

