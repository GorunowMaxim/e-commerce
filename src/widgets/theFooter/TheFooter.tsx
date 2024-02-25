import { Link } from "react-router-dom";

import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import "./styles.scss";

interface FooterData {
    [index: string]: {
        groupName: string;
        links: string[];
    };
}

const footerData: FooterData = {
    about: {
        groupName: "About",
        links: ["Our Purpose", "Careers", "Affiliates", "Press", "Stores"],
    },
    customerService: {
        groupName: "Customer Service",
        links: ["Help", "Shipping", "Returns", "Payments", "Your Order"],
    },
};

const TheFooter = () => {
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
                            <div className="footer-subscribe__connect">
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
                                            <button className="footer-subscribe__form-button">
                                                subscribe
                                            </button>
                                        </div>
                                    </label>
                                </form>
                                <div className="footer-subscribe__socials">
                                    <Link
                                        to="#"
                                        className="footer-subscribe__socials-link"
                                    >
                                        <TwitterIcon />
                                    </Link>
                                    <Link
                                        to="#"
                                        className="footer-subscribe__socials-link"
                                    >
                                        <InstagramIcon />
                                    </Link>
                                    <Link
                                        to="#"
                                        className="footer-subscribe__socials-link"
                                    >
                                        <FacebookIcon />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="footer-links">
                    <div className="container">
                        <div className="footer-links__wrapper">
                            <nav className="footer-navigation">
                                {Object.keys(footerData).map((el, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="footer-navigation__column"
                                        >
                                            <h5 className="footer-navigation__column-headline">
                                                {footerData[el].groupName}
                                            </h5>
                                            <ul className="footer-navigations__list">
                                                {footerData[el].links.map(
                                                    (link, index) => {
                                                        return (
                                                            <li
                                                                key={index}
                                                                className="footer-navigation__item"
                                                            >
                                                                <Link
                                                                    className="footer-link "
                                                                    to="#"
                                                                >
                                                                    {link}
                                                                </Link>
                                                            </li>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        </div>
                                    );
                                })}
                                <div className="footer-navigation__column">
                                    <h5 className="footer-navigation__column-headline">
                                        Contact us
                                    </h5>
                                    <ul className="footer-navigations__list">
                                        <li className="footer-navigation__item">
                                            <Link
                                                className="footer-link "
                                                to="#"
                                            >
                                                +44 (0)333 323 7728
                                            </Link>
                                        </li>
                                        <li className="footer-navigation__item">
                                            <Link
                                                className="footer-link "
                                                to="#"
                                            >
                                                moonsoon@gmail.com
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
};

export default TheFooter;
