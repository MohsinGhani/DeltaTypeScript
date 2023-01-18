import React, { useState } from "react";
import FilterBySearch from "./searchField";
import CardContent from "@mui/material/CardContent";
import InfoIcon from "../../assets/images/infoIcon.svg";
import FilterByIndustrySearch from "./industrySearchField";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import EditIcon from "../../assets/images/editIcon.svg";
import { FormControl, InputLabel } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ClientDetailForm = () => {
  const [turnOver, setTurnOver] = useState<string>("");
  const [number, setNumber] = useState<string>();


  const handleChange = (event : SelectChangeEvent<string>) => {
    setTurnOver(event.target.value);
  };

  const handleClick = (event: SelectChangeEvent<string>) => {
    setNumber(event.target.value);
  };
  
  return (
    <div className="clientDetailForm_container">
      <div className="clientDetailForm_header">
        <img src={EditIcon} alt="Client details" />
        <Typography variant="subtitle1">Client Details</Typography>
      </div>
      <Divider light />
      <div className="clientDetailForm_form">
        <CardContent>
          <Typography
            variant="subtitle1"
            className="clientDetailForm_cardContentHead"
          >
            Provide the insured’s details to view available products
          </Typography>

          <div className="clientDetailForm_companyName">
            <Typography variant="subtitle1">
              Company name or ABN Number
            </Typography>
            <img src={InfoIcon} alt="Client details" />
          </div>

          <FilterBySearch />

          <div className="clientDetailForm_checkbox">
            <Typography variant="subtitle1">
              Trading name (if different)
            </Typography>
            <div>
              <Checkbox className="check" {...label} />
              <Typography variant="subtitle1">
                Same or not applicable
              </Typography>
            </div>
          </div>

          <div className="clientDetailForm_occupation">
            <Typography variant="subtitle1">Occupation / Industry</Typography>
            <img src={InfoIcon} alt="Client details" />
          </div>

          <FilterByIndustrySearch />

          <div className="clientDetailForm_formBottomContainer">
            <div className="clientDetailForm_employees">
              <div className="clientDetailForm_employeesHeading">
                <Typography variant="subtitle1">Number of Employees</Typography>
                <img src={InfoIcon} alt="Client details" />
              </div>
              <div className="clientDetailForm_employeesSelect">
                <FormControl fullWidth>
                  <InputLabel>Select number</InputLabel>
                  <Select
                    placeholder="Search"
                    className="number"
                    value={number}
                    onChange={handleClick}
                    label="Select number"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="clientDetailForm_annualTurnover">
              <div className="clientDetailForm_annualHeading">
                <Typography variant="subtitle1">
                  Estimated Annual Turnover
                </Typography>
                <img src={InfoIcon} alt="Client details" />
              </div>
              <div className="clientDetailForm_annualSelect">
                <FormControl fullWidth>
                  <InputLabel>Select Turnover</InputLabel>
                  <Select
                    value={turnOver}
                    onChange={handleChange}
                    label="Select Turnover"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </div>
  );
};

export default ClientDetailForm;
