import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./reducers/productReducer";
const store = configureStore({
    reducer: {
        product: productReducer
    }
});

export default store;