import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cartSlice/cartSlice";
import products from "./slices/productsSlice/productsSlice";
import categories from "./slices/categoriesSlice/categoriesSlice";
import overlay from "./slices/overlaySlice/overlaySlice";
import search from "./slices/searchSlice/searchSlice";
import app from './slices/mainSlice/mainSlice'

export const store = configureStore({
    reducer: {
        app,
        cart,
        products,
        categories,
        overlay,
        search,
    },
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
