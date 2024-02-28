import { ReactNode } from "react";

import "./styles.scss";
import { changeOverlayState } from "app/store/slices/overlaySlice/overlaySlice";
import { useDispatch } from "react-redux";

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
    const { setFilterState,  setOpenSort } = dataState;
    const dispatch = useDispatch();
    return (
        <main className="products-main">
            <div className="container">
                <section className="products-section">
                    <div className="products-menu">
                        <button
                            onClick={() => {
                                setFilterState(true);
                                dispatch(changeOverlayState());
                            }}
                            className="products-menu__button"
                        >
                            filter
                        </button>
                        <button
                            onClick={() => {
                                setOpenSort(true);
                                dispatch(changeOverlayState());
                            }}
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
