import { Link } from "react-router-dom";


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
    contactUs: {
        groupName: "Contact Us",
        links: ['+44 (0)333 323 7728', 'moonsoon@gmail.com'],
    },
};

const FooterNavigation = () => {
    return (
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
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default FooterNavigation;
