import { NavLink, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useState } from "react";
import { changeSearchUiState } from "app/store/slices/searchSlice/searchSlice";
import { changeOverlayState } from "app/store/slices/overlaySlice/overlaySlice";

import Cart from "widgets/cart/Cart";
import Search from "widgets/search/Search";
import Authorization from "features/auth/Authorization";
import Overlay from "shared/ui/overlay/Overlay";

import logo from "/public/images/logo.svg";
import searchIcon from "/public/images/search.svg";

import "./styles.scss";

const linksData: { [index: string]: string } = {
    women: "Women",
    men: "Men",
    aboutUs: "about",
};

const TheHeader = () => {
    function isActive({ isActive }: { [isActive: string]: boolean }): string {
        return isActive ? "link link_active" : "link";
    }
    const [overlayState, setOverlayState] = useState(false);

    const handleClickSearchButton = () => {
        dispatch(changeSearchUiState());
        dispatch(changeOverlayState());
        setOverlayState(true);
    };

    const dispatch = useDispatch();
    return (
        <>
            <header className="header">
                <div className="header-wrapper">
                    <div className="container">
                        <div className="main-header">
                            <Link className="header-logo" to="/">
                                <img
                                    src={logo}
                                    style={{ width: 75 }}
                                    alt="logo"
                                />
                            </Link>
                            <div className="header-icons">
                                <button
                                    onClick={handleClickSearchButton}
                                    className="header-search-button"
                                >
                                    <img src={searchIcon} alt="" />
                                </button>
                                <Authorization />
                                <Cart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-wrapper">
                    <div className="container">
                        <div className="sub-header">
                            <nav className="sub-header-navigation">
                                <ul className="sub-header-navigation__list">
                                    {Object.keys(linksData).map(
                                        (link, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="sub-header-navigation__item"
                                                >
                                                    <NavLink
                                                        className={isActive}
                                                        to={`/${linksData[link]}`}
                                                    >
                                                        {linksData[link]}
                                                    </NavLink>
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <Search setOverlayState={setOverlayState} />
            {overlayState && <Overlay />}
        </>
    );
};

export default TheHeader;
