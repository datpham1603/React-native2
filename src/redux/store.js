
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoryReducer from '../redux/slice/category.slice'
import productReducer from "./slice/product.slice";
import productPortfolioReducer from "./slice/productPortfolio.slice";
import signinReducer from "./slice/signin";
import cartReducer from "./slice/cart.slice"



const rootReducer = combineReducers({
    product:productReducer,
    category: categoryReducer,
    cart:cartReducer,
    sign:signinReducer,
    productPortfolio:productPortfolioReducer
});


const store = configureStore({
    reducer: {
        reducer: rootReducer
    }
})

export default store;