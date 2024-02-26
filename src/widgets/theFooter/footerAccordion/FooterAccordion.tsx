import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./styles.scss";
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
}

const FooterAccordion = () => {
    return (
        <div className="footer-accordion">
            {Object.keys(footerData).map((el, index) => {
                return (
                    <Accordion key={index} className="accordion-header">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            className="accordion-name"
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <h5 className="accordion-name">
                                {footerData[el].groupName}
                            </h5>
                        </AccordionSummary>
                        <AccordionDetails sx={{ borderRadius: 0 }}>
                            <ul className="footer-navigations__list">
                                {footerData[el].links.map((link, index) => {
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
                                })}
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </div>
    );
};

export default FooterAccordion;
