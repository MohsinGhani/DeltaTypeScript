import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import InfoIcon from "../../assets/images/infoIcon.svg";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import EditIcon from "../../assets/images/editIcon.svg";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import Cookies from "js-cookie";
import { FormControl, FormControlLabel, InputLabel } from "@mui/material";
import axios from "axios";

const ClientDetailForm = ({ values, errors, handleChange }: any) => {
  const [turnOver, setTurnOver] = useState<string>("");
  const [number, setNumber] = useState<string>();
  const [clientsNames, setClientsName] = React.useState<any>([]);
  const [occupationNames, setOccupationNames] = React.useState<any>([]);

  const handleOnChange = (event: SelectChangeEvent<string>) => {
    setTurnOver(event.target.value);
  };

  const handleClick = (event: SelectChangeEvent<string>) => {
    setNumber(event.target.value);
  };

  const getabnNumber = async (event: any) => {
    try {
      const token = Cookies.get("token");

      const data = await axios({
        method: "post",
        url: "https://u090h4woii.execute-api.ap-southeast-2.amazonaws.com/delta-microservices/delta-microservices-client-get-abn-clients-by-name",
        data: { clientName: event?.target?.value },
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log(data);
    } catch (error: any) {
      const staticData = {
        abnClientsList: [
          {
            businessNumber: "81061021814",
            isCurrentName: "Y",
            organizationName: "DELTA INSURANCE AGENCY PTY LTD",
            isCurrentAddress: "Y",
            postcode: "3152",
            stateCode: "VIC",
            searchRelevance: "100",
            fullName: null,
            givenName: null,
            otherGivenName: null,
            familyName: null,
            tradingName: null,
            businessName: null,
          },
          {
            businessNumber: "78082286897",
            isCurrentName: "N",
            organizationName: "DELTA BLOODSTOCK & INSURANCE BROKERS PTY LTD",
            isCurrentAddress: "Y",
            postcode: "2073",
            stateCode: "NSW",
            searchRelevance: "97",
            fullName: null,
            givenName: null,
            otherGivenName: null,
            familyName: null,
            tradingName: null,
            businessName: null,
          },
        ],
      };

      setClientsName(
        staticData?.abnClientsList.map((item) => ({
          ...item,
          value: item["businessNumber"],
        }))
      );

      console.log("MAIN VILLAN HOUN", error);
      throw new Error(error);
    }
  };

  const getOccupationNames = async (event: any) => {
    try {
      const token = Cookies.get("token");

      const data = await axios({
        method: "post",
        url: ": https://u090h4woii.execute-api.ap-southeast-2.amazonaws.com/delta-microservices/client-product-packages-by-suboccupation",
        data: { occupationNames: event?.target?.value },
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log(data);
    } catch (error: any) {
      const staticData = {
        occupationNamesList: [
          {
            id: 1101,
            name: "Medical and Other Health Care Services",
            subOccupations: [
              {
                id: 1725,
                name: "Dentists",
                occupation: null,
              },
            ],
          },
        ],
      };

      setOccupationNames(staticData?.occupationNamesList);

      console.log("MAIN VILLAN HOUN", error);
      throw new Error(error);
    }
  };

  return (
    <form className="clientDetailForm_container">
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
          <div className="text">
            <Autocomplete
              placeholder="Search"
              className="search"
              id="auto-select"
              // renderOption={values.organizationName}
              // setClientsName={values.organizationName}
              inputValue={values["companyName"]}
              autoSelect={values.organizationName}
              options={clientsNames}
              getOptionLabel={(e: any) => e?.organizationName}
              renderInput={(params) => (
                <TextField
                  error={errors.companyName}
                  placeholder="Search"
                  className="khana-khalo"
                  {...params}
                  // value={values["companyName"]}
                  onChange={getabnNumber}
                  // aria-required={true}
                />
              )}
              onChange={(_, selectedValue) => {
                handleChange({
                  target: {
                    name: "companyName",
                    value: selectedValue?.organizationName,
                  },
                });
              }}
            />
          </div>

          <div className="clientDetailForm_checkbox">
            <Typography variant="subtitle1">
              Trading name (if different)
            </Typography>
            <div>
              <Checkbox
                color="primary"
                name="tradingName"
                value={values?.tradingName}
                // checked={values.tradingName}
                // error={errors.tradingName}
                onChange={(e) => {
                  handleChange({
                    target: {
                      name: "tradingName",
                      value: e.target.checked,
                    },
                  });
                }}
              />
              <Typography variant="subtitle1">
                Same or not applicable
              </Typography>
            </div>
          </div>

          <div className="clientDetailForm_occupation">
            <Typography variant="subtitle1">Occupation / Industry</Typography>
            <img src={InfoIcon} alt="Client details" />
          </div>
          <div className="text">
            <Autocomplete
              placeholder="Search"
              className="search"
              id="auto-select"
              autoSelect={values.name}
              options={occupationNames}
              // inputValue={values["occupation"]}
              getOptionLabel={(e: any) => e?.name}
              renderInput={(params) => (
                <TextField
                  placeholder="Search"
                  className="khana-khalo"
                  error={errors.occupation}
                  {...params}
                  onChange={getOccupationNames}
                  // value={values["occupationNames"]}
                  // value={values.occupation}
                />
              )}
              onChange={(_, selectedValue) => {
                handleChange({
                  target: {
                    name: "occupation",
                    value: selectedValue?.name,
                  },
                });
              }}
            />
          </div>

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
                    // value={number}
                    name="numberOfEmployees"
                    onChange={handleChange}
                    value={values["numberOfEmployees"]}
                    error={errors.numberOfEmployees}
                    label="Select number"
                  >
                    <MenuItem value={"10"}>1</MenuItem>
                    <MenuItem value={"20"}>2-3</MenuItem>
                    <MenuItem value={"30"}>3-5</MenuItem>
                    <MenuItem value={"50"}>6-10</MenuItem>
                    <MenuItem value={"60"}>10-15</MenuItem>
                    <MenuItem value={"70"}>15+</MenuItem>
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
                    placeholder="Search"
                    className="turnOver"
                    // value={turnOver}
                    name="turnOver"
                    onChange={handleChange}
                    value={values["turnOver"]}
                    error={errors.turnOver}
                    label="Select number"
                  >
                    <MenuItem value={"10"}>$100,000</MenuItem>
                    <MenuItem value={"20"}>$200,000</MenuItem>
                    <MenuItem value={"30"}>$300,000</MenuItem>
                    <MenuItem value={"50"}>$400,000</MenuItem>
                    <MenuItem value={"60"}>$500,000</MenuItem>
                    <MenuItem value={"70"}>$1,000,000</MenuItem>
                    <MenuItem value={"80"}>$1,500,000</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </form>
  );
};

export default ClientDetailForm;
