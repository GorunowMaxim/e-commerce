import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeSearchUiState } from "app/store/slices/searchSlice/searchSlice";
import { changeOverlayState } from "app/store/slices/overlaySlice/overlaySlice";

import Cart from "widgets/cart/Cart";
import Search from "widgets/search/Search";
import Overlay from "shared/ui/overlay/Overlay";

import logo from "/public/images/logo.svg";
import user from "/public/images/user.svg";
import searchIcon from "/public/images/search.svg";

import "./styles.scss";



export function Header() {
    function isActive({ isActive }: { [isActive: string]: boolean }): string {
        return isActive ? "link link_active" : "link";
    }
    const [overlayState, setOverlayState] = useState(false);

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
                                    onClick={() => {
                                        dispatch(changeSearchUiState());
                                        dispatch(changeOverlayState());
                                        setOverlayState(true)
                                    }}
                                    className="header-search-button"
                                >
                                    <img src={searchIcon} alt="" />
                                </button>
                                <button className="header-icons__button">
                                    <img src={user} alt="" />
                                </button>
                                <Cart />
                            </div>
                            {/* <div className="header-theme"></div>
                        <div className="header-language"></div> */}
                        </div>
                    </div>
                </div>
                <div className="header-wrapper">
                    <div className="container">
                        <div className="sub-header">
                            <nav className="sub-header-navigation">
                                <ul className="sub-header-navigation__list">
                                    <li className="sub-header-navigation__item">
                                        <NavLink className={isActive} to="/">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="sub-header-navigation__item">
                                        <NavLink
                                            className={isActive}
                                            to="/women"
                                        >
                                            Women
                                        </NavLink>
                                    </li>
                                    <li className="sub-header-navigation__item">
                                        <NavLink className={isActive} to="/men">
                                            Men
                                        </NavLink>
                                    </li>
                                    <li className="sub-header-navigation__item">
                                        <NavLink
                                            className={isActive}
                                            to="/sale"
                                        >
                                            Sale
                                        </NavLink>
                                    </li>
                                    <li className="sub-header-navigation__item">
                                        <NavLink
                                            className={isActive}
                                            to="/about"
                                        >
                                            About us
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <Search setOverlayState={setOverlayState}/>
            {overlayState && <Overlay />}
        </>
    );
}
