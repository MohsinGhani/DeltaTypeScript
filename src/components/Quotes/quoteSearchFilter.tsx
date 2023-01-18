import React, { useState } from "react";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import QuoteTable from ".";
import { SelectChangeEvent } from "@mui/material/Select";

const NewBusinessQuoteTab = () => {
  const [select, setSelect] = useState("");

  const handleChange = (event : SelectChangeEvent<string>) => {
    setSelect(event.target.value);
  };

  return (
    <div className="newBusiness_contianer">
      <div className="newBusiness_table_filter">
        <div className="newBusiness_searchBox">
          <TextField
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="newBusiness_selectBox">
          <FormControl>
            <InputLabel>Sort By: </InputLabel>
            <Select value={select} onChange={handleChange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="newBusiness_table">
        <QuoteTable />
      </div>
    </div>
  );
};

export default NewBusinessQuoteTab;
