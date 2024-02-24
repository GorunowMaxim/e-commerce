import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { startLoading, getSuccess, hasError } from "../mainSlice/mainSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ProductData } from "shared/interfaces";
import axios from "axios";

interface initialProductsState {
    source: ProductData[];
    products: ProductData[];
    filterConfig: {
        brand: string | null;
        color: string | null;
        size: string | null;
        price: string | null;
    };
}

const initialState: initialProductsState = {
    source: [],
    products: [],
    filterConfig: {
        brand: null,
        color: null,
        size: null,
        price: null,
    },
};

export const fetchingProducts = createAsyncThunk(
    "products/fetchingFiltredProducts",
    async ({ url, category, currentSearchValue }: { url: string; category: string, currentSearchValue?: string }, thunkAPI) => {
        thunkAPI.dispatch(startLoading());
        try {
            const response = await axios.get(
                `${url}?${currentSearchValue ? `search=${currentSearchValue}` : ''}&${
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
        clearProducts(state) {
            state.source = [];
        },
        changeFilterConfigBrand(state, action: PayloadAction<string>) {
            state.filterConfig.brand = action.payload;
        },
        changeFilterConfigColor(state, action: PayloadAction<string>) {
            state.filterConfig.color = action.payload;
        },
        changeFilterConfigSize(state, action: PayloadAction<string>) {
            state.filterConfig.size = action.payload;
        },
        clearFilterProperties(state) {
            state.filterConfig.size = null;
            state.filterConfig.brand = null;
            state.filterConfig.color = null;
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
                        (!filters.size || product.sizes.includes(filters.size))
                    );
                });
            }
        );
    },
});

export const {
    clearProducts,
    changeFilterConfigBrand,
    changeFilterConfigColor,
    changeFilterConfigSize,
    clearFilterProperties,
} = productsSlice.actions;

export default productsSlice.reducer;
