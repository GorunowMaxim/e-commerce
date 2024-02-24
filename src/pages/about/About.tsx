import AboutTabs from "entities/tabs/ui/aboutTabs/AboutTabs";
import "./styles.scss";

const About = () => {
    return (
        <main className="about-main">
            <div className="container">
                <div className="about-wrapper">
                    <AboutTabs />
                </div>
            </div>
        </main>
    );
};

export default About;
