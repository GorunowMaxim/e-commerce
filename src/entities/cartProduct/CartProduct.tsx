import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";

import { removeCartItem } from "app/store/slices/cartSlice/cartSlice";
import ChangeQuantity from "features/changeQuantity/ChangeQuantity";
import type { CartProductData } from "shared/interfaces";

import "./styles.scss";

interface CartProductProps {
    cartProduct: CartProductData;
}

const CartProduct: React.FC<CartProductProps> = ({ cartProduct }) => {
    const { name, color, price, image, size } = cartProduct;
    const dispatch = useDispatch();
    return (
        <div className="cart-product">
            <div className="cart-product__img">
                <img src={image} alt="" />
            </div>
            <div className="cart-product__info">
                <h6 className="cart-product__name">{name}</h6>
                <p className="cart-product__color">{color}</p>
                <p className="cart-product__price">Size: {size}</p>
                <div className="cart-product__price-block">
                    <ChangeQuantity cartProduct={cartProduct} />
                    <p className="product-cart__price">${price}</p>
                </div>
            </div>
            <button
                onClick={() => dispatch(removeCartItem(cartProduct))}
                className="cart-product__button"
            >
                <DeleteIcon />
            </button>
        </div>
    );
};

export default CartProduct;
