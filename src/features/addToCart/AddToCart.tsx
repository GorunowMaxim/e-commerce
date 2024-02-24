import { useDispatch } from "react-redux";
import { addToCart } from "app/store/slices/cartSlice/cartSlice";


import "./styles.scss";


const AddToCart = () => {
    const dispatch = useDispatch();

    return (
        <>
            <button onClick={() => dispatch(addToCart())} className="button-add-to-cart">
                add to cart
            </button>
        </>
    );
};

export default AddToCart;
