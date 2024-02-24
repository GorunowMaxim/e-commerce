import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { a11yProps } from "entities/tabs/model";

import CustomTabsBox from "shared/ui/customTabsBox/CustomTabsBox";

interface ProductTabs {
    description: string | undefined;
}

const ProductTabs = ({ description }: ProductTabs) => {
    const [value, setValue] = useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const tabNames: string[] = ["description", "sizing", "shipping", "returns"];

    return (
        <>
            <Tabs
                TabIndicatorProps={{ sx: { backgroundColor: "black" } }}
                sx={{ borderBottom: "1px solid #ede2e2" }}
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
            >
                {tabNames.map((el, index) => (
                    <Tab
                        key={index}
                        sx={{
                            color: "black !important",
                            fontSize: 12,
                            fontWeight: 800,
                        }}
                        label={el}
                        {...a11yProps(index)}
                    />
                ))}
            </Tabs>
            <CustomTabsBox value={value} index={0}>
                <p className="text">{description}</p>
            </CustomTabsBox>
            <CustomTabsBox value={value} index={1}>
                <ul className="tab-list text">
                    <li className="tab-list__item text">
                        Please note sizes may vary between brand and may not
                        match the conversions provided
                    </li>
                    <li className="tab-list__item text">Fits true to size</li>
                    <li className="tab-list__item text">
                        Model is 5ft 10in/1.78m, with a 26"/66cm waist, a
                        34"/86cm bust, and is wearing a size 26"
                    </li>
                </ul>
            </CustomTabsBox>
            <CustomTabsBox value={value} index={2}>
                <ul className="tab-list text">
                    <li className="tab-list__item tab-list__item_bold text">
                        £6.99 via DPD 2-3 Day Standard Service
                    </li>
                    <li className="tab-list__item tab-list__item_bold text">
                        £9.99 via DPD Next Working Day Priority Service
                    </li>
                    <li className="tab-list__item tab-list__item_bold text">
                        FREE DPD 2-3 Day Standard Service on orders over
                    </li>
                </ul>
            </CustomTabsBox>
            <CustomTabsBox value={value} index={3}>
                <p className="text">
                    If for some reason you are not happy with your purchase you
                    can return it to us within 30 days for an exchange or
                    refund.
                    <br />
                    <br />
                    We are now offering FREE UK returns. For more information
                    please visit our returns page
                </p>
            </CustomTabsBox>
        </>
    );
};

export default ProductTabs;
