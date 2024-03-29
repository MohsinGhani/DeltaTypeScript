import React, { useState, ChangeEvent } from "react";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CommonTable from "../Table";

const NewBusiness = () => {
  const [select, setSelect] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelect(event.target.value);
    return event;
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
            <InputLabel>Sort by</InputLabel>
            <Select value={select}>
              <MenuItem value={10}>insured name</MenuItem>
              <MenuItem value={20}>inception date</MenuItem>
              <MenuItem value={30}>product/status </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="newBusiness_table">
        <CommonTable />
      </div>
    </div>
  );
};

export default NewBusiness;
