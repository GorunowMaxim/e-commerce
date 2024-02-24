import { Link } from "react-router-dom";

import "./styles.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <section className="footer-subscribe">
                    <div className="container">
                        <div className="footer-subscribe__wrapper">
                            <div className="footer-subscribe__info">
                                <h4 className="footer-subscribe__info-headline">
                                    SIGN UP TO THE MoonSoon MAILING LIST
                                </h4>
                                <p className="footer-subscribe__info-text">
                                    Sign up for exclusive early sale access and
                                    <br />
                                    tailored new arrivals
                                </p>
                            </div>
                            <form className="footer-subscribe__form">
                                <label className="footer-subscribe__form-label">
                                    <p className="footer-subscribe__form-text">
                                        email address
                                    </p>
                                    <div className="footer-subscribe__form-wrapper">
                                        <input
                                            type="email"
                                            className="footer-subscribe__form-input"
                                        />
                                        <button className="footer-subscribe__form-button">subscribe</button>
                                    </div>
                                </label>
                            </form>
                        </div>
                    </div>
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
        </footer>
    );
};

export default Footer;
