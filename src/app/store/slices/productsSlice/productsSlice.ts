import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { startLoading, getSuccess, hasError } from "../mainSlice/mainSlice";

import type { ProductData } from "shared/interfaces";

interface initialProductsState {
    source: ProductData[];
    products: ProductData[];
    filterConfig: {
        brand: string | null;
        color: string | null;
        size: string | null;
        minPrice: number;
        maxPrice: number;
    };
}

const initialState: initialProductsState = {
    source: [],
    products: [],
    filterConfig: {
        brand: null,
        color: null,
        size: null,
        minPrice: 0,
        maxPrice: 1000,
    },
};

export const fetchingProducts = createAsyncThunk(
    "products/fetchingFiltredProducts",
    async (
        {
            url,
            category,
            currentSearchValue,
        }: { url: string; category: string; currentSearchValue?: string },
        thunkAPI
    ) => {
        thunkAPI.dispatch(startLoading());
        try {
            const response = await axios.get(
                `${url}?${
                    currentSearchValue ? `search=${currentSearchValue}` : ""
                }&${
                    category !== "default"
                        ? `sortBy=price&order=${category}`
                        : ""
                }`
            );
            thunkAPI.dispatch(getSuccess());
            return response.data;
        } catch (error) {
            console.log(error);
            thunkAPI.dispatch(hasError());
        }
    }
);

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        changeFilterConfigBrand(state, action: PayloadAction<string>) {
            state.filterConfig.brand = action.payload;
        },
        changeFilterConfigColor(state, action: PayloadAction<string>) {
            state.filterConfig.color = action.payload;
        },
        changeFilterConfigSize(state, action: PayloadAction<string>) {
            state.filterConfig.size = action.payload;
        },
        changeFilterConfigMinPrice(state, action: PayloadAction<number>) {
            console.log("min-price", state.filterConfig.minPrice);
            console.log("res", action.payload);
            state.filterConfig.minPrice = action.payload;
        },
        changeFilterConfigMaxPrice(state, action: PayloadAction<number>) {
            state.filterConfig.maxPrice = action.payload;
        },
        clearFilterProperties(state) {
            state.filterConfig.size = null;
            state.filterConfig.brand = null;
            state.filterConfig.color = null;
            state.filterConfig.minPrice = 0;
            state.filterConfig.maxPrice = 1000;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchingProducts.fulfilled,
            (state, action: PayloadAction<ProductData[]>) => {
                state.source = action.payload.filter((product) => {
                    const filters = state.filterConfig;
                    return (
                        (!filters.brand || product.brand === filters.brand) &&
                        (!filters.color ||
                            product.filterColor === filters.color) &&
                        (!filters.size ||
                            product.sizes.includes(filters.size)) &&
                        product.price >= filters.minPrice &&
                        product.price <= filters.maxPrice
                    );
                });
            }
        );
    },
});

export const {
    changeFilterConfigBrand,
    changeFilterConfigColor,
    changeFilterConfigSize,
    clearFilterProperties,
    changeFilterConfigMinPrice,
    changeFilterConfigMaxPrice,
} = productsSlice.actions;

export default productsSlice.reducer;
