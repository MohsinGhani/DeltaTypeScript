import React, { ReactNode, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NewBusiness from "../NewBusiness";

type Iprops = {
  children: ReactNode;
  value: number;
  index: number;
  other?: string | undefined;
};
function TabPanel(props: Iprops) {
  const { children, value, index, ...other } = props;

  return (
    <>
      <div
        hidden={value !== index}
        id={index.toString()}
        aria-labelledby={index.toString()}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    </>
  );
}

const HomePageQuoteTab = () => {
  const [value, setValue] = useState(0);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div className="quoteTabs_container">
      <Tabs value={value} onChange={handleChange}>
        <Tab label="New business" {...a11yProps(0)} />
        <Tab label="Renewals" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <NewBusiness />
      </TabPanel>
      <TabPanel value={value} index={1}>
        _ _ _ _ _ _ _ _ _
      </TabPanel>
    </div>
  );
};

export default HomePageQuoteTab;
