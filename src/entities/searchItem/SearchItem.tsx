import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeSearchUiState } from "app/store/slices/searchSlice/searchSlice";
import type { ProductData } from "shared/interfaces";

import "./styles.scss";
import { changeOverlayState } from "app/store/slices/overlaySlice/overlaySlice";

interface SearchItemProps {
    searchItem: ProductData;
    setOverlayState: (boolean: boolean) => void;
}

const SearchItem = ({ searchItem, setOverlayState }: SearchItemProps) => {
    const { id, imageUrl, name } = searchItem;
    const dispatch = useDispatch();

    const handleClickLink = () => {
        dispatch(changeSearchUiState());
        dispatch(changeOverlayState());
        setOverlayState(false);
    }

    return (
        <Link
            onClick={() => handleClickLink()}
            to={`/product/${id}`}
            className="search-item"
        >
            <div className="search-item__image">
                <img src={imageUrl[0]} alt="" />
            </div>
            <div className="search-item__name">{name}</div>
        </Link>
    );
};

export default SearchItem;
