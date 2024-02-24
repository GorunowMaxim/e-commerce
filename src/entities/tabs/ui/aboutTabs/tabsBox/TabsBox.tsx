import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomTabsBox from "shared/ui/customTabsBox/CustomTabsBox";

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
                        <Accordion
                            className="about-accordion"
                            sx={{
                                boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.12)",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="about-accordion__header"
                                id="panel1-header"
                                aria-controls="panel1-content"
                            >
                                How to cancel an order or start a return
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Delectus aliquid blanditiis,
                                nam amet itaque harum voluptatibus animi tempore
                                reprehenderit expedita?
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className="about-accordion"
                            sx={{
                                boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.12)",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="about-accordion__header"
                                id="panel1-header"
                                aria-controls="panel1-content"
                            >
                                Header
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Delectus aliquid blanditiis,
                                nam amet itaque harum voluptatibus animi tempore
                                reprehenderit expedita?
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className="about-accordion"
                            sx={{
                                boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.12)",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="about-accordion__header"
                                id="panel1-header"
                                aria-controls="panel1-content"
                            >
                                General contacts
                            </AccordionSummary>
                            <AccordionDetails>
                                GENERAL CONTACTS Customer Service Email:
                                customerservice@farfetch.com Phone number: +44
                                (0)20 3962 2362 During busy periods like
                                holidays, sales and special campaigns you might
                                experience higher waiting times from our
                                Customer Service team. Your deliveries may take
                                longer than usual to get to you, but don’t worry
                                — you’ll receive a confirmation email as soon as
                                your order is sent. For more information, visit
                                the FAQs Press Email: press@farfetch.com If
                                you're a journalist and require images for
                                editorial purposes, please email your requests
                                to press@farfetch.com. We don't hold samples,
                                but we may be able to put you in touch with our
                                brands and partner boutiques. Retail Partners
                                Email: retailpartners@farfetch.com If you would
                                like to join FARFETCH as a retail partner, email
                                retailpartners@farfetch.com. Please include all
                                the details and the website address if you have
                                one. Jobs Interested in a career at FARFETCH?
                                Visit our careers page here Please do not email
                                your CV. Applicants will only be considered if
                                they apply for a job role through our careers
                                page. Buying FARFETCH operates as a marketplace
                                for our brands and partner boutiques. We don't
                                have a buying department or buy stock directly
                                from brands. FARFETCH UK Ltd, The Bower, 211 Old
                                Street, London, EC1V 9NR Please note, returns
                                will not be accepted at this address.
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </CustomTabsBox>
            <CustomTabsBox value={value} index={1}>
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
                        <Accordion
                            className="about-accordion"
                            sx={{
                                boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.12)",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="about-accordion__header"
                                id="panel1-header"
                                aria-controls="panel1-content"
                            >
                                How to cancel an order or start a return
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Delectus aliquid blanditiis,
                                nam amet itaque harum voluptatibus animi tempore
                                reprehenderit expedita?
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className="about-accordion"
                            sx={{
                                boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.12)",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="about-accordion__header"
                                id="panel1-header"
                                aria-controls="panel1-content"
                            >
                                Header
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Delectus aliquid blanditiis,
                                nam amet itaque harum voluptatibus animi tempore
                                reprehenderit expedita?
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className="about-accordion"
                            sx={{
                                boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.12)",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="about-accordion__header"
                                id="panel1-header"
                                aria-controls="panel1-content"
                            >
                                General contacts
                            </AccordionSummary>
                            <AccordionDetails>
                                GENERAL CONTACTS Customer Service Email:
                                customerservice@farfetch.com Phone number: +44
                                (0)20 3962 2362 During busy periods like
                                holidays, sales and special campaigns you might
                                experience higher waiting times from our
                                Customer Service team. Your deliveries may take
                                longer than usual to get to you, but don’t worry
                                — you’ll receive a confirmation email as soon as
                                your order is sent. For more information, visit
                                the FAQs Press Email: press@farfetch.com If
                                you're a journalist and require images for
                                editorial purposes, please email your requests
                                to press@farfetch.com. We don't hold samples,
                                but we may be able to put you in touch with our
                                brands and partner boutiques. Retail Partners
                                Email: retailpartners@farfetch.com If you would
                                like to join FARFETCH as a retail partner, email
                                retailpartners@farfetch.com. Please include all
                                the details and the website address if you have
                                one. Jobs Interested in a career at FARFETCH?
                                Visit our careers page here Please do not email
                                your CV. Applicants will only be considered if
                                they apply for a job role through our careers
                                page. Buying FARFETCH operates as a marketplace
                                for our brands and partner boutiques. We don't
                                have a buying department or buy stock directly
                                from brands. FARFETCH UK Ltd, The Bower, 211 Old
                                Street, London, EC1V 9NR Please note, returns
                                will not be accepted at this address.
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </CustomTabsBox>
            <CustomTabsBox value={value} index={2}>
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
                        <Accordion
                            className="about-accordion"
                            sx={{
                                boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.12)",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="about-accordion__header"
                                id="panel1-header"
                                aria-controls="panel1-content"
                            >
                                How to cancel an order or start a return
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Delectus aliquid blanditiis,
                                nam amet itaque harum voluptatibus animi tempore
                                reprehenderit expedita?
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className="about-accordion"
                            sx={{
                                boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.12)",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="about-accordion__header"
                                id="panel1-header"
                                aria-controls="panel1-content"
                            >
                                Header
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Delectus aliquid blanditiis,
                                nam amet itaque harum voluptatibus animi tempore
                                reprehenderit expedita?
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className="about-accordion"
                            sx={{
                                boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.12)",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="about-accordion__header"
                                id="panel1-header"
                                aria-controls="panel1-content"
                            >
                                General contacts
                            </AccordionSummary>
                            <AccordionDetails>
                                GENERAL CONTACTS Customer Service Email:
                                customerservice@farfetch.com Phone number: +44
                                (0)20 3962 2362 During busy periods like
                                holidays, sales and special campaigns you might
                                experience higher waiting times from our
                                Customer Service team. Your deliveries may take
                                longer than usual to get to you, but don’t worry
                                — you’ll receive a confirmation email as soon as
                                your order is sent. For more information, visit
                                the FAQs Press Email: press@farfetch.com If
                                you're a journalist and require images for
                                editorial purposes, please email your requests
                                to press@farfetch.com. We don't hold samples,
                                but we may be able to put you in touch with our
                                brands and partner boutiques. Retail Partners
                                Email: retailpartners@farfetch.com If you would
                                like to join FARFETCH as a retail partner, email
                                retailpartners@farfetch.com. Please include all
                                the details and the website address if you have
                                one. Jobs Interested in a career at FARFETCH?
                                Visit our careers page here Please do not email
                                your CV. Applicants will only be considered if
                                they apply for a job role through our careers
                                page. Buying FARFETCH operates as a marketplace
                                for our brands and partner boutiques. We don't
                                have a buying department or buy stock directly
                                from brands. FARFETCH UK Ltd, The Bower, 211 Old
                                Street, London, EC1V 9NR Please note, returns
                                will not be accepted at this address.
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </CustomTabsBox>
            <CustomTabsBox value={value} index={3}>
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
                        <Accordion
                            className="about-accordion"
                            sx={{
                                boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.12)",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="about-accordion__header"
                                id="panel1-header"
                                aria-controls="panel1-content"
                            >
                                How to cancel an order or start a return
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Delectus aliquid blanditiis,
                                nam amet itaque harum voluptatibus animi tempore
                                reprehenderit expedita?
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className="about-accordion"
                            sx={{
                                boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.12)",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="about-accordion__header"
                                id="panel1-header"
                                aria-controls="panel1-content"
                            >
                                Header
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Delectus aliquid blanditiis,
                                nam amet itaque harum voluptatibus animi tempore
                                reprehenderit expedita?
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className="about-accordion"
                            sx={{
                                boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.12)",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="about-accordion__header"
                                id="panel1-header"
                                aria-controls="panel1-content"
                            >
                                General contacts
                            </AccordionSummary>
                            <AccordionDetails>
                                GENERAL CONTACTS Customer Service Email:
                                customerservice@farfetch.com Phone number: +44
                                (0)20 3962 2362 During busy periods like
                                holidays, sales and special campaigns you might
                                experience higher waiting times from our
                                Customer Service team. Your deliveries may take
                                longer than usual to get to you, but don’t worry
                                — you’ll receive a confirmation email as soon as
                                your order is sent. For more information, visit
                                the FAQs Press Email: press@farfetch.com If
                                you're a journalist and require images for
                                editorial purposes, please email your requests
                                to press@farfetch.com. We don't hold samples,
                                but we may be able to put you in touch with our
                                brands and partner boutiques. Retail Partners
                                Email: retailpartners@farfetch.com If you would
                                like to join FARFETCH as a retail partner, email
                                retailpartners@farfetch.com. Please include all
                                the details and the website address if you have
                                one. Jobs Interested in a career at FARFETCH?
                                Visit our careers page here Please do not email
                                your CV. Applicants will only be considered if
                                they apply for a job role through our careers
                                page. Buying FARFETCH operates as a marketplace
                                for our brands and partner boutiques. We don't
                                have a buying department or buy stock directly
                                from brands. FARFETCH UK Ltd, The Bower, 211 Old
                                Street, London, EC1V 9NR Please note, returns
                                will not be accepted at this address.
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </CustomTabsBox>
            <CustomTabsBox value={value} index={4}>
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
                        <Accordion
                            className="about-accordion"
                            sx={{
                                boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.12)",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="about-accordion__header"
                                id="panel1-header"
                                aria-controls="panel1-content"
                            >
                                How to cancel an order or start a return
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Delectus aliquid blanditiis,
                                nam amet itaque harum voluptatibus animi tempore
                                reprehenderit expedita?
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className="about-accordion"
                            sx={{
                                boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.12)",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="about-accordion__header"
                                id="panel1-header"
                                aria-controls="panel1-content"
                            >
                                Header
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Delectus aliquid blanditiis,
                                nam amet itaque harum voluptatibus animi tempore
                                reprehenderit expedita?
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className="about-accordion"
                            sx={{
                                boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.12)",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="about-accordion__header"
                                id="panel1-header"
                                aria-controls="panel1-content"
                            >
                                General contacts
                            </AccordionSummary>
                            <AccordionDetails>
                                GENERAL CONTACTS Customer Service Email:
                                customerservice@farfetch.com Phone number: +44
                                (0)20 3962 2362 During busy periods like
                                holidays, sales and special campaigns you might
                                experience higher waiting times from our
                                Customer Service team. Your deliveries may take
                                longer than usual to get to you, but don’t worry
                                — you’ll receive a confirmation email as soon as
                                your order is sent. For more information, visit
                                the FAQs Press Email: press@farfetch.com If
                                you're a journalist and require images for
                                editorial purposes, please email your requests
                                to press@farfetch.com. We don't hold samples,
                                but we may be able to put you in touch with our
                                brands and partner boutiques. Retail Partners
                                Email: retailpartners@farfetch.com If you would
                                like to join FARFETCH as a retail partner, email
                                retailpartners@farfetch.com. Please include all
                                the details and the website address if you have
                                one. Jobs Interested in a career at FARFETCH?
                                Visit our careers page here Please do not email
                                your CV. Applicants will only be considered if
                                they apply for a job role through our careers
                                page. Buying FARFETCH operates as a marketplace
                                for our brands and partner boutiques. We don't
                                have a buying department or buy stock directly
                                from brands. FARFETCH UK Ltd, The Bower, 211 Old
                                Street, London, EC1V 9NR Please note, returns
                                will not be accepted at this address.
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </CustomTabsBox>
            <CustomTabsBox value={value} index={5}>
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
                        <Accordion
                            className="about-accordion"
                            sx={{
                                boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.12)",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="about-accordion__header"
                                id="panel1-header"
                                aria-controls="panel1-content"
                            >
                                How to cancel an order or start a return
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Delectus aliquid blanditiis,
                                nam amet itaque harum voluptatibus animi tempore
                                reprehenderit expedita?
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className="about-accordion"
                            sx={{
                                boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.12)",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="about-accordion__header"
                                id="panel1-header"
                                aria-controls="panel1-content"
                            >
                                Header
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Delectus aliquid blanditiis,
                                nam amet itaque harum voluptatibus animi tempore
                                reprehenderit expedita?
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className="about-accordion"
                            sx={{
                                boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.12)",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="about-accordion__header"
                                id="panel1-header"
                                aria-controls="panel1-content"
                            >
                                General contacts
                            </AccordionSummary>
                            <AccordionDetails>
                                GENERAL CONTACTS Customer Service Email:
                                customerservice@farfetch.com Phone number: +44
                                (0)20 3962 2362 During busy periods like
                                holidays, sales and special campaigns you might
                                experience higher waiting times from our
                                Customer Service team. Your deliveries may take
                                longer than usual to get to you, but don’t worry
                                — you’ll receive a confirmation email as soon as
                                your order is sent. For more information, visit
                                the FAQs Press Email: press@farfetch.com If
                                you're a journalist and require images for
                                editorial purposes, please email your requests
                                to press@farfetch.com. We don't hold samples,
                                but we may be able to put you in touch with our
                                brands and partner boutiques. Retail Partners
                                Email: retailpartners@farfetch.com If you would
                                like to join FARFETCH as a retail partner, email
                                retailpartners@farfetch.com. Please include all
                                the details and the website address if you have
                                one. Jobs Interested in a career at FARFETCH?
                                Visit our careers page here Please do not email
                                your CV. Applicants will only be considered if
                                they apply for a job role through our careers
                                page. Buying FARFETCH operates as a marketplace
                                for our brands and partner boutiques. We don't
                                have a buying department or buy stock directly
                                from brands. FARFETCH UK Ltd, The Bower, 211 Old
                                Street, London, EC1V 9NR Please note, returns
                                will not be accepted at this address.
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </CustomTabsBox>
            <CustomTabsBox value={value} index={6}>
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
                        <Accordion
                            className="about-accordion"
                            sx={{
                                boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.12)",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="about-accordion__header"
                                id="panel1-header"
                                aria-controls="panel1-content"
                            >
                                How to cancel an order or start a return
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Delectus aliquid blanditiis,
                                nam amet itaque harum voluptatibus animi tempore
                                reprehenderit expedita?
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className="about-accordion"
                            sx={{
                                boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.12)",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="about-accordion__header"
                                id="panel1-header"
                                aria-controls="panel1-content"
                            >
                                Header
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Delectus aliquid blanditiis,
                                nam amet itaque harum voluptatibus animi tempore
                                reprehenderit expedita?
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className="about-accordion"
                            sx={{
                                boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.12)",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="about-accordion__header"
                                id="panel1-header"
                                aria-controls="panel1-content"
                            >
                                General contacts
                            </AccordionSummary>
                            <AccordionDetails>
                                GENERAL CONTACTS Customer Service Email:
                                customerservice@farfetch.com Phone number: +44
                                (0)20 3962 2362 During busy periods like
                                holidays, sales and special campaigns you might
                                experience higher waiting times from our
                                Customer Service team. Your deliveries may take
                                longer than usual to get to you, but don’t worry
                                — you’ll receive a confirmation email as soon as
                                your order is sent. For more information, visit
                                the FAQs Press Email: press@farfetch.com If
                                you're a journalist and require images for
                                editorial purposes, please email your requests
                                to press@farfetch.com. We don't hold samples,
                                but we may be able to put you in touch with our
                                brands and partner boutiques. Retail Partners
                                Email: retailpartners@farfetch.com If you would
                                like to join FARFETCH as a retail partner, email
                                retailpartners@farfetch.com. Please include all
                                the details and the website address if you have
                                one. Jobs Interested in a career at FARFETCH?
                                Visit our careers page here Please do not email
                                your CV. Applicants will only be considered if
                                they apply for a job role through our careers
                                page. Buying FARFETCH operates as a marketplace
                                for our brands and partner boutiques. We don't
                                have a buying department or buy stock directly
                                from brands. FARFETCH UK Ltd, The Bower, 211 Old
                                Street, London, EC1V 9NR Please note, returns
                                will not be accepted at this address.
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </CustomTabsBox>
            <CustomTabsBox value={value} index={7}>
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
                        <Accordion
                            className="about-accordion"
                            sx={{
                                boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.12)",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="about-accordion__header"
                                id="panel1-header"
                                aria-controls="panel1-content"
                            >
                                How to cancel an order or start a return
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Delectus aliquid blanditiis,
                                nam amet itaque harum voluptatibus animi tempore
                                reprehenderit expedita?
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className="about-accordion"
                            sx={{
                                boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.12)",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="about-accordion__header"
                                id="panel1-header"
                                aria-controls="panel1-content"
                            >
                                Header
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Delectus aliquid blanditiis,
                                nam amet itaque harum voluptatibus animi tempore
                                reprehenderit expedita?
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className="about-accordion"
                            sx={{
                                boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.12)",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="about-accordion__header"
                                id="panel1-header"
                                aria-controls="panel1-content"
                            >
                                General contacts
                            </AccordionSummary>
                            <AccordionDetails>
                                GENERAL CONTACTS Customer Service Email:
                                customerservice@farfetch.com Phone number: +44
                                (0)20 3962 2362 During busy periods like
                                holidays, sales and special campaigns you might
                                experience higher waiting times from our
                                Customer Service team. Your deliveries may take
                                longer than usual to get to you, but don’t worry
                                — you’ll receive a confirmation email as soon as
                                your order is sent. For more information, visit
                                the FAQs Press Email: press@farfetch.com If
                                you're a journalist and require images for
                                editorial purposes, please email your requests
                                to press@farfetch.com. We don't hold samples,
                                but we may be able to put you in touch with our
                                brands and partner boutiques. Retail Partners
                                Email: retailpartners@farfetch.com If you would
                                like to join FARFETCH as a retail partner, email
                                retailpartners@farfetch.com. Please include all
                                the details and the website address if you have
                                one. Jobs Interested in a career at FARFETCH?
                                Visit our careers page here Please do not email
                                your CV. Applicants will only be considered if
                                they apply for a job role through our careers
                                page. Buying FARFETCH operates as a marketplace
                                for our brands and partner boutiques. We don't
                                have a buying department or buy stock directly
                                from brands. FARFETCH UK Ltd, The Bower, 211 Old
                                Street, London, EC1V 9NR Please note, returns
                                will not be accepted at this address.
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </CustomTabsBox>
        </section>
    );
};

export default TabsBox;
