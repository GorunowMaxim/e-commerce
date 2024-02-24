import { Link } from "react-router-dom";

import "./styles.scss";

export function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <section className="footer-subscribe">
                        <div className="footer-subscribe__info"></div>
                        <form className="footer-subscribe__form">
                            <label htmlFor="" className="footer-subscribe__label">
                                <input type="email" className="footer-subscribe__input" />
                                <button className="footer-subscribe__button"></button>
                            </label>
                        </form>
                    </section>
                    <section className="footer-links">
                        <nav className="footer-navigation">
                            <ul className="footer-navigation__list">
                                <li className="footer-navigation__item">
                                    <Link className="link" to="#">
                                        Home
                                    </Link>
                                </li>
                                <li className="footer-navigation__item">
                                    <Link className="link" to="#">
                                        Home
                                    </Link>
                                </li>
                                <li className="footer-navigation__item">
                                    <Link className="link" to="#">
                                        Home
                                    </Link>
                                </li>
                                <li className="footer-navigation__item">
                                    <Link className="link" to="#">
                                        Home
                                    </Link>
                                </li>
                                <li className="footer-navigation__item">
                                    <Link className="link" to="#">
                                        Home
                                    </Link>
                                </li>
                            </ul>
                            <ul className="footer-navigation__list">
                                <li className="footer-navigation__item">
                                    <Link className="link" to="#">
                                        Home
                                    </Link>
                                </li>
                                <li className="footer-navigation__item">
                                    <Link className="link" to="#">
                                        Home
                                    </Link>
                                </li>
                                <li className="footer-navigation__item">
                                    <Link className="link" to="#">
                                        Home
                                    </Link>
                                </li>
                                <li className="footer-navigation__item">
                                    <Link className="link" to="#">
                                        Home
                                    </Link>
                                </li>
                                <li className="footer-navigation__item">
                                    <Link className="link" to="#">
                                        Home
                                    </Link>
                                </li>
                            </ul>
                            <ul className="footer-navigation__list">
                                <li className="footer-navigation__item">
                                    <Link className="link" to="#">
                                        Home
                                    </Link>
                                </li>
                                <li className="footer-navigation__item">
                                    <Link className="link" to="#">
                                        Home
                                    </Link>
                                </li>
                                <li className="footer-navigation__item">
                                    <Link className="link" to="#">
                                        Home
                                    </Link>
                                </li>
                                <li className="footer-navigation__item">
                                    <Link className="link" to="#">
                                        Home
                                    </Link>
                                </li>
                                <li className="footer-navigation__item">
                                    <Link className="link" to="#">
                                        Home
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </section>
                </div>
            </div>
        </footer>
    );
}
