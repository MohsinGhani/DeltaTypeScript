import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import HomePage from "../HomePage";
import Header from "../Header";
import CreateQuoteForm from "../createQuoteStepper";
import Resources from "../ResourceTab";
import QuoteTabs from "../Quotes/quoteTab";
import PolicyTabs from "../Policies/policyTab";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";

const MenuTabs = () => {
  const param = useParams();
  const navigation = useNavigate();

  const rendComp = () => {
    // eslint-disable-next-line default-case
    switch (param?.tab) {
      case "home":
        return (
          <div className="homePage">
            <HomePage />
          </div>
        );
      case "quotes":
        return (
          <div className="quotePage">
            <QuoteTabs />
          </div>
        );
      case "policies":
        return (
          <div className="policyPage">
            <PolicyTabs />
          </div>
        );
      case "create-quote":
        return (
          <div className="createQuoteForm">
            <CreateQuoteForm />
          </div>
        );
      case "resources":
        return (
          <div className="resourcesPage">
            <Resources />
          </div>
        );
    }
  };

  const tabs = [
    { label: "Home", link: "/home" },
    { label: "Quotes", link: "/quotes" },
    { label: "Policies", link: "/policies" },
    { label: "Create quote", link: "/create-quote" },
    { label: "Resources", link: "/resources" },
  ];

  const breadcrumbTabs: { [key: number]: string } = {
    0: "Home",
    1: "Quotes",
    2: "Policies",
    3: "Create quote",
    4: "Resources",
  };

  const breadcrumbText: { [key: number]: string } = {
    0: "Welcome back, Ben",
    1: "Your quotes",
    2: "Your Policies",
    3: "Get Started",
    4: " Resources",
  };

  const activeTab = tabs.findIndex(
    (tab) => tab.link === `/${param?.tab || ""}`
  );

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  if (activeTab === -1) return <div className="homePage">404</div>;

  return (
    <div className="tabs_container">
      <Header />
      <div className="tabs_tabContainer">
        <Box sx={{ border: 1, borderColor: "divider" }}>
          <Tabs value={activeTab}>
            {tabs.map((tab) => (
              <Tab
                disableRipple
                label={tab.label}
                onClick={() => navigation(tab.link)}
              />
            ))}
          </Tabs>
        </Box>
      </div>
      <div className="tab_main">
        <div className="tab_contentContainer">
          <Breadcrumbs>
            {activeTab !== 0 && <Link to="/home">Home</Link>}
            <Typography variant="subtitle1">
              {breadcrumbTabs[activeTab]}
            </Typography>
          </Breadcrumbs>
          <h3>{breadcrumbText[activeTab]}</h3>
          {/* <div className="tab_welcomeText">
            <p>Home</p>
            <h3>Welcome back, Ben</h3>
          </div> */}
          <div className="tab_content">{rendComp()}</div>
        </div>
      </div>
    </div>
  );
};

export default MenuTabs;
