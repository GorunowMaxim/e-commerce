import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomTabsBox from "shared/ui/tabs/customTabsBox/CustomTabsBox";
import aboutText from "../../../../../../public/texts/text";

interface AccordionData {
    [index: string]: {
        [index: string]: {
            name: string;
            info: JSX.Element;
        };
    };
}

const accordionData: AccordionData = {
    contactUs: {
        orderReturn: {
            name: "How to cancel an order or start a return",
            info: aboutText.contactUs.howToCancel,
        },
        generalContacts: {
            name: "General Contacts",
            info: aboutText.contactUs.general,
        },
    },
    howToShop: {
        aboutUs: {
            name: "About Us",
            info: aboutText.howToShop.aboutUs,
        },
        findItems: {
            name: "How to Find items",
            info: aboutText.howToShop.findItems,
        },
        order: {
            name: "How to order and pay",
            info: aboutText.howToShop.order,
        },
    },
    orders: {
        taxes: {
            name: "Duties and taxes",
            info: aboutText.orders.taxes,
        },
        tracking: {
            name: "Tracking your order",
            info: aboutText.orders.tracking,
        },
        order: {
            name: "Made-to-order items",
            info: aboutText.orders.order,
        },
    },
};

const TabsBox = ({
    value,
    func,
}: {
    value: number;
    func?: React.Dispatch<React.SetStateAction<number>>;
}) => {
    return (
        <section className="about-info">
            <CustomTabsBox value={value} index={0}>
                <div className="flex-box">
                    <section className="about-info__contacts">
                        <h5 className="about-info__headline">Contact us</h5>
                        <div className="about-info__grid-block">
                            <div className="about-info__grid-item">
                                <h6 className="about-info__grid-headline">
                                    Customer Service
                                </h6>
                                <p className="about-info__grid-text">
                                    <b>Email service hours</b>
                                    <br />
                                    <br />
                                    Monday to Friday: We're available 24 hours a
                                    day
                                    <br />
                                    <br />
                                    Saturday and Sunday: We're available between
                                    08:00-20:00
                                    <br />
                                    <br />
                                    <b>Phone service hours</b>
                                    <br />
                                    <br />
                                    Monday to Friday: We're available between
                                    09:00-18:00
                                </p>
                            </div>
                            <div className="about-info__grid-item">
                                <h6 className="about-info__grid-headline">
                                    FAQs
                                </h6>
                                <p className="about-info__grid-text">
                                    Find the answers you need in our{" "}
                                    <span
                                        className="text text_underline"
                                        onClick={() => func && func(5)}
                                    >
                                        FAQs
                                    </span>
                                </p>
                            </div>
                            <div className="about-info__grid-item">
                                <h6 className="about-info__grid-headline">
                                    We'll be in touch soon
                                </h6>
                                <p className="about-info__grid-text">
                                    We aim to respond within 24 hours, but
                                    during busy periods like holidays, sales and
                                    special campaigns, we may take a little
                                    longer getting back to you.
                                    <br />
                                    <br />
                                    Want to get in touch? Scroll down for more
                                    details.
                                </p>
                            </div>
                        </div>
                    </section>
                    <div className="about-accordion-block">
                        {Object.keys(accordionData.contactUs).map(
                            (el, index) => {
                                return (
                                    <Accordion
                                        key={index}
                                        className="about-accordion"
                                        sx={{
                                            boxShadow:
                                                "0px 1px 1px 0px rgba(0,0,0,0.12)",
                                        }}
                                    >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            className="about-accordion__header"
                                            id="panel1-header"
                                            aria-controls="panel1-content"
                                        >
                                            {accordionData.contactUs[el].name}
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            {accordionData.contactUs[el].info}
                                        </AccordionDetails>
                                    </Accordion>
                                );
                            }
                        )}
                    </div>
                </div>
            </CustomTabsBox>
            <CustomTabsBox value={value} index={1}>
                <div className="flex-box">
                    <h5 className="about-info__headline">How to shop</h5>
                    <div className="about-accordion-block">
                        {Object.keys(accordionData.howToShop).map(
                            (el, index) => {
                                return (
                                    <Accordion
                                        key={index}
                                        className="about-accordion"
                                        sx={{
                                            boxShadow:
                                                "0px 1px 1px 0px rgba(0,0,0,0.12)",
                                        }}
                                    >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            className="about-accordion__header"
                                            id="panel1-header"
                                            aria-controls="panel1-content"
                                        >
                                            {accordionData.howToShop[el].name}
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            {accordionData.howToShop[el].info}
                                        </AccordionDetails>
                                    </Accordion>
                                );
                            }
                        )}
                    </div>
                </div>
            </CustomTabsBox>
            <CustomTabsBox value={value} index={2}>
                <div className="flex-box">
                    <h5 className="about-info__headline">
                        Orders and delivery
                    </h5>
                    <div className="about-accordion-block">
                        {Object.keys(accordionData.orders).map((el, index) => {
                            return (
                                <Accordion
                                    key={index}
                                    className="about-accordion"
                                    sx={{
                                        boxShadow:
                                            "0px 1px 1px 0px rgba(0,0,0,0.12)",
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        className="about-accordion__header"
                                        id="panel1-header"
                                        aria-controls="panel1-content"
                                    >
                                        {accordionData.orders[el].name}
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {accordionData.orders[el].info}
                                    </AccordionDetails>
                                </Accordion>
                            );
                        })}
                    </div>
                </div>
            </CustomTabsBox>
            <CustomTabsBox value={value} index={3}>
                <div className="flex-box">
                    <h5 className="about-info__headline">Accessibility</h5>
                    <div style={{ lineHeight: "170%" }}>
                        <p>
                            At MoonSoon, we want to ensure the products and
                            services offered on our website and apps are
                            accessible to everyone. Our goal is to prioritise
                            accessibility and usability throughout the
                            development and release of our digital media. We
                            have a team monitoring the accessibility of our
                            website and apps and to coordinate training, testing
                            and consulting.
                        </p>
                        <p>
                            As we continue to enhance our usability, we’ll
                            provide updates as they become available.
                        </p>
                        <p>
                            If you have any questions about any accessibility
                            features or require assistance, please get in touch
                            at&nbsp; accessibility@farfetch.com
                        </p>
                        <p>March 2022</p>
                    </div>
                </div>
            </CustomTabsBox>
        </section>
    );
};

export default TabsBox;
