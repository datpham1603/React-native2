import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCartData } from "../../services/cart/cartService";
import axios from "axios";

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async ({ userId, productId, quantity }, thunkApi) => {
    console.log(productId);
    try {
      const response = await axios.post('http://192.168.18.105:3000/v1/addproductfromcart', {
        userId,
        productId,
        quantity
      })
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
export const getCart = createAsyncThunk(
  'cart/getCart',
  async (userId, thunkApi) => {
    console.log("kkkk" + userId);
    try {
      const response = await axios.get(`http://192.168.18.105:3000/v1/getcart`, {
        params: {
          userId
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  giohang: {},
  cart: [],
  loading: false,
  error: null
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchCart.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.giohang = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getCart.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },

});

export default cartSlice.reducer;
