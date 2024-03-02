import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import "./styles.scss";
import TabsBox from "./tabsBox/TabsBox";

export default function AboutTabs() {
    const [value, setValue] = useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            "aria-controls": `simple-tabpanel-${index}`,
        };
    }

    const tabNames: string[] = [
        "Contact us",
        "How to shop",
        "Orders and Delivery",
        "Accessibility",
    ];

    return (
        <section className="about">
            <aside className="about-tabs">
                <Tabs
                    TabIndicatorProps={{ sx: { backgroundColor: "black" } }}
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    {tabNames.map((el, index) => (
                        <Tab
                            key={index}
                            sx={{ color: "black !important" }}
                            label={el}
                            {...a11yProps(index)}
                        />
                    ))}
                </Tabs>
            </aside>
            <TabsBox value={value} func={setValue} />
        </section>
    );
}
