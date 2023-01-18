import React from "react";
import HomePageQuoteTab from "../Tabs/homePageQuoteTab";

const RecentQuotes = () => {
  return (
    <div className="recentQuotes_container">
      <p>Recent Quotes</p>
      <div className="recentQuotes_tab_container">
        <HomePageQuoteTab />
      </div>
    </div>
  );
};

export default RecentQuotes;
