import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";

import { useRef } from "react";
import { changeOverlayState } from "app/store/slices/overlaySlice/overlaySlice";
import type { RootState } from "app/store/store";
import type { CartProductData } from "shared/interfaces";
import CloseButton from "shared/ui/closeButton/CloseButton";
import CartProduct from "entities/cartProduct/CartProduct";
import cart from "/public/images/shopping-bag.svg";

import "./styles.scss";

interface CartState {
    state: boolean;
    setState: (boolean: boolean) => void;
    setOverlayState: (boolean: boolean) => void;
}

function countTotalPrice(products: CartProductData[]): number {
    return products.reduce((acc, product): number => {
        return acc + (product.price * product.quantity || 0);
    }, 0);
}

const ProductList = ({ products }: { products: CartProductData[] }) =>
    products.length !== 0 ? (
        products.map((product, index) => (
            <CartProduct key={index} cartProduct={product} />
        ))
    ) : (
        <div className="cart-body__item cart-body__item_empty">
            <img src={cart} alt="" />
            <p className="cart-body__item-text">your cart is empty</p>
        </div>
    );

const CartResult = ({
    totalPrice,
    products,
}: {
    totalPrice: number;
    products: CartProductData[];
}) =>
    products.length > 0 && (
        <div className="cart-result">
            <p className="cart-result__text">Total:</p>
            <p className="cart-result__price">${totalPrice}</p>
        </div>
    );

const CartContainer = ({ state, setState, setOverlayState }: CartState) => {
    const { products } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    const totalPrice = countTotalPrice(products);
    const cartRef = useRef<HTMLElement | null>(null);

    const handleClickCloseButton = () => {
        dispatch(changeOverlayState());
        setOverlayState(false);
        setState(false);
    };

    return (
        <>
            <section
                ref={cartRef}
                className={cn(state ? "cart cart_visible" : "cart")}
            >
                <div className="cart-wrapper">
                    <div className="cart-header">
                        <CloseButton
                            className={"cart-header__button"}
                            onClick={handleClickCloseButton}
                        />
                        <h5 className="cart-header__name">your cart</h5>
                    </div>
                    <div className="cart-body">
                        <ProductList products={products} />
                    </div>
                    <CartResult totalPrice={totalPrice} products={products} />
                </div>
            </section>
        </>
    );
};

export default CartContainer;
