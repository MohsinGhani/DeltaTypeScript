import { Tab, Tabs, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import React, { ReactNode, useState } from "react";
import NewBusinessQuoteTab from "./quoteSearchFilter";

type Iprops = {
  children: ReactNode;
  value: number;
  index: number;
};
function TabPanel(props: Iprops) {
  const { children, value, index, ...other } = props;

  return (
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
  );
}

const QuoteTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div className="quoteTabs_container">
      <div className="your_quotes">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="New business" {...a11yProps(0)} />
          <Tab label="Renewals" {...a11yProps(1)} />
        </Tabs>

        <Button>Create quote</Button>
      </div>

      <TabPanel value={value} index={0}>
        <NewBusinessQuoteTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        _ _ _ _ _ _ _ _ _ _ _
      </TabPanel>
    </div>
  );
};

export default QuoteTabs;
