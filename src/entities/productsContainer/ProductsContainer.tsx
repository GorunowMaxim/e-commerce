import { useDispatch } from "react-redux";

import { ReactNode } from "react";
import { changeOverlayState } from "app/store/slices/overlaySlice/overlaySlice";

import "./styles.scss";

interface ProductsContainerProps {
    dataState: {
        filterState: boolean;
        openSort: boolean;
        setFilterState: (bol: boolean) => void;
        setOpenSort: (bol: boolean) => void;
    };
    children: ReactNode;
}

const ProductsContainer = ({ dataState, children }: ProductsContainerProps) => {
    const dispatch = useDispatch();
    const { setFilterState, setOpenSort } = dataState;

    const handleClickFilter = () => {
        setFilterState(true);
        dispatch(changeOverlayState());
    };
    const handleClickSort = () => {
        setOpenSort(true);
        dispatch(changeOverlayState());
    };

    return (
        <main className="products-main">
            <div className="container">
                <section className="products-section">
                    <div className="products-menu">
                        <button
                            onClick={handleClickFilter}
                            className="products-menu__button"
                        >
                            filter
                        </button>
                        <button
                            onClick={handleClickSort}
                            className="products-menu__button"
                        >
                            sort
                        </button>
                    </div>
                    <div className="products-wrapper grid">{children}</div>
                </section>
            </div>
        </main>
    );
};

export default ProductsContainer;
