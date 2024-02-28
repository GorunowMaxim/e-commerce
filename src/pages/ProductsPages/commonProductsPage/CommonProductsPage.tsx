import { ReactElement, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchingProducts } from "app/store/slices/productsSlice/productsSlice";

import type { AppDispatch, RootState } from "app/store/store";
import type { RenderProductProps } from "shared/interfaces";

import Filter from "widgets/filter/Filter";
import Sort from "features/sort/Sort";
import ProductsContainer from "shared/ui/productsContainer/ProductsContainer";

import "../styles.scss";

interface CommonProductPageProps {
    func: ({
        appStatus,
        source,
    }: RenderProductProps) => ReactElement | ReactElement[];
    url: string;
}

const CommonProductsPage = ({ func, url }: CommonProductPageProps) => {
    const [filterState, setFilterState] = useState(false);
    const [openSort, setOpenSort] = useState(false);
    const { source } = useSelector((state: RootState) => state.products);
    const { appStatus } = useSelector(
        (state: RootState) => state.app.configState
    );
    const { category } = useSelector((state: RootState) => state.categories);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchingProducts({ url, category }));
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
                <div className="products-sort">
                    <Sort openSort={openSort} setOpenSort={setOpenSort} />
                </div>
                <div className="products-box">
                    {func({ appStatus, source })}
                </div>
            </div>
        </ProductsContainer>
    );
};

export default CommonProductsPage;
