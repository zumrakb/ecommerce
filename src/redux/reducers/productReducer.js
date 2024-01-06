import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    products: [],
    originalProducts: [],
    product: {},
    loading: true,
    cart: [],
    totalPrice: 0
}

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            return response.data; 
        } catch (error) {
            throw Error(error);
        }
    }
);


export const fetchProductById = createAsyncThunk(
    'product/fetchProductById',
    async (productId) => {
        try {
            console.log(productId)
            const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            return response.data; 
        } catch (error) {
            throw Error(error);
        }
    }
);

const productReducer = createSlice({
    initialState,
    name: 'product',
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
            state.totalPrice += action.payload?.price;
        },
        filterBySearch: (state, action) => {
            const searchKeyword = action.payload?.toLowerCase();
            state.products = state.originalProducts.filter(p => p.title?.toLowerCase()?.includes(searchKeyword));
        }
    },    
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.originalProducts = action.payload;
            state.loading = false;
        })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.loading = true;
                state.product = action.payload;
                state.loading = false;
            });
    }
})

export const { addToCart,filterBySearch } = productReducer.actions

export default productReducer.reducer;