import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchingProducts } from "app/store/slices/productsSlice/productsSlice";

import type { AppDispatch, RootState } from "app/store/store";
import type { RenderProductProps } from "shared/interfaces";

import Filter from "widgets/filter/Filter";
import Product from "entities/product/Product";
import Sort from "features/sort/Sort";
import ProductsContainer from "shared/ui/productsContainer/ProductsContainer";
import ProductSkeleton from "shared/ui/skeletons/productSkeleton/ProductSkeleton";

import "../styles.scss";

const url = "https://65c52bc7dae2304e92e4009d.mockapi.io/items";

function renderProduct({ appStatus, searchData }: RenderProductProps) {
    switch (appStatus) {
        case "loading":
            return [...new Array(16)].map((_, index) => (
                <ProductSkeleton key={index} />
            ));
        case "success":
            return searchData && searchData.map((product, index) => (
                <Product key={index} product={product} />
            ));
        case "error":
            return (
                <h3 className="error-title">
                    Ooops..., we have some problem, <br />
                    reload page or try later
                </h3>
            );
        default:
            return null;
    }
}

const SearchResultPage = () => {
    const [filterState, setFilterState] = useState(false);
    const [openSort, setOpenSort] = useState(false);
    const { appStatus } = useSelector(
        (state: RootState) => state.app.configState
    );
    const { currentSearchValue } = useSelector(
        (state: RootState) => state.search
    );
    const { searchData } = useSelector((state: RootState) => state.search);
    const { category } = useSelector((state: RootState) => state.categories);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        if (currentSearchValue) {
            dispatch(fetchingProducts({ url, category, currentSearchValue }));
        }
    }, [category]);

    const dataState = {
        filterState,
        openSort,
        setFilterState,
        setOpenSort,
    };

    return (
        <ProductsContainer dataState={dataState}>
            <Filter
                url={url}
                filterState={filterState}
                setFilterState={setFilterState}
            />
            <div className="products">
                <h4 className="result-headline">
                    search results for "{currentSearchValue}"
                </h4>
                <div className="products-sort">
                    <Sort openSort={openSort} setOpenSort={setOpenSort} />
                </div>
                <div className="products-box">
                    {renderProduct({ appStatus, searchData })}
                </div>
            </div>
        </ProductsContainer>
    );
};

export default SearchResultPage;
