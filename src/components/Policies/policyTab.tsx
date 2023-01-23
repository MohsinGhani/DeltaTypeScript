import React, { useState } from "react";
import { Button, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";

import NewBusinessPolicyTab from "./policiesSearchFilter";
import Modal from "../Modal";
import { ReactNode } from "react";

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
      id={`${index}`}
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

const PolicyTabs = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

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
      <div className="quoteTabs_tabmodal">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Your Clients" {...a11yProps(0)} />
        </Tabs>
        <Button onClick={() => setOpen(!open)}>Create Quote</Button>
      </div>
      <TabPanel value={value} index={0}>
        <NewBusinessPolicyTab />
      </TabPanel>
      {open && (
        <Modal
          open={open}
          handleClose={() => setOpen(!open)}
          title="Manage client"
          subtitle="Select an action to manage your client"
        />
      )}
    </div>
  );
};

export default PolicyTabs;
