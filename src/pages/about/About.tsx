import AboutTabs from "shared/ui/tabs/aboutTabs/AboutTabs";
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
