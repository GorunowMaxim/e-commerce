import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import "./styles.scss";
import TabsBox from "./tabsBox/TabsBox";

import { a11yProps } from "entities/tabs/model";

export default function AboutTabs() {
    const [value, setValue] = useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

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
