import React, { useEffect } from "react";
import CardContent from "@mui/material/CardContent";
import InfoIcon from "../../assets/images/infoIcon.svg";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Select from "@mui/material/Select";
import EditIcon from "../../assets/images/editIcon.svg";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import Cookies from "js-cookie";
import { FormControl, InputLabel } from "@mui/material";
import axios from "axios";

const ClientDetailForm = ({ values, errors, handleChange }: any) => {
  const [clientsNames, setClientsName] = React.useState<any>([]);
  const [businessNumber, setBusinessNumber] = React.useState<string | null>(
    null
  );
  const [occupationNames, setOccupationNames] = React.useState<any>([]);
  useEffect(() => {
    if (businessNumber) {
      getOccupationNames(businessNumber);
    }
  }, [businessNumber]);

  const getabnNumber = async (event: any) => {
    try {
      const token = Cookies.get("token");

      const data = await axios.post(
        "https://u090h4woii.execute-api.ap-southeast-2.amazonaws.com/delta-microservices/delta-microservices-client-get-abn-clients-by-name",
        event?.target?.value,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          // Credentials: "include",
        }
      );

      // const data = await axios({
      //   method: "post",
      //   url: "https://u090h4woii.execute-api.ap-southeast-2.amazonaws.com/delta-microservices/delta-microservices-client-get-abn-clients-by-name",
      //   data: event?.target?.value,
      //   headers: { Authorization: `Bearer ${token}` },
      // });
      let tempData = data.data.result.slice(0, 12).map((item: any) => item);
      setClientsName(data.data.result.slice(0, 12).map((item: any) => item));
      // let tempData = data.data.result.slice(0, 8).map((item: { organizationName: any; businessNumber: any; }) => ({
      //   companyName: item["organizationName"],
      //   value: item["businessNumber"],
      // }));
      // console.log("new data: ", tempData);
      // setClientsName(data.data.result.slice(0, 8).map((item: { organizationName: any; businessNumber: any; }) => ({
      //   ...item.organizationName,
      //   value: item["businessNumber"],
      // })));
    } catch (error: any) {
      setClientsName([]);
      throw new Error(error);
    }
  };

  const getOccupationNames = async (businessNumber: string): Promise<any> => {
    try {
      const token = Cookies.get("token");

      const data = await axios({
        method: "post",
        url: "https://u090h4woii.execute-api.ap-southeast-2.amazonaws.com/delta-microservices/delta-microservices-client-get-suboccupation",
        data: JSON.stringify(businessNumber),

        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setOccupationNames(data.data);
    } catch (error: any) {
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
            Please provide the insured’s details to view available products
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
              autoSelect={values?.companyName}
              options={clientsNames}
              defaultValue={values.companyName}
              getOptionLabel={(e: any) => {
                return e?.organizationName ?? values?.companyName;
              }}
              renderInput={(params) => (
                <TextField
                  error={errors.companyName}
                  placeholder="Search"
                  className="khana-khalo"
                  {...params}
                  onChange={getabnNumber}
                  value={values["companyName"]}
                />
              )}
              onChange={(_, selectedValue) => {
                setBusinessNumber(selectedValue?.businessNumber);
                handleChange({
                  target: {
                    name: "companyName",
                    value: selectedValue?.organizationName,
                  },
                });

                handleChange({
                  target: {
                    name: "businessNumber",
                    value: selectedValue?.businessNumber,
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
              autoSelect={values.occupation}
              options={occupationNames}
              getOptionLabel={(e: any) => e?.name ?? values.occupation}
              renderInput={(params) => {
                return (
                  <TextField
                    placeholder="Search"
                    className="khana-khalo"
                    error={errors.occupation}
                    {...params}
                  />
                );
              }}
              onChange={(_, selectedValue) => {
                // console.log("kaho na piyar hai", selectedValue);
                // setOccupationNames(selectedValue?.suboccupationId);
                handleChange({
                  target: {
                    name: "occupation",

                    value: selectedValue?.name,
                  },
                });
                handleChange({
                  target: {
                    name: "subOccupationID",
                    value: selectedValue?.id,
                  },
                });
              }}
              value={values["occupation"]}
            />
          </div>

          <div className="clientDetailForm_formBottomContainer">
            <div className="clientDetailForm_employees">
              <div className="clientDetailForm_employeesHeading">
                <Typography variant="subtitle1">Number of employees</Typography>
                <img src={InfoIcon} alt="Client details" />
              </div>
              <div className="clientDetailForm_employeesSelect">
                <FormControl fullWidth>
                  {/* <InputLabel>Select number</InputLabel>
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
                    <MenuItem value={"70"}>15+</MenuItem> */}
                  {/* </Select> */}
                  <TextField
                    id="outlined-multiline-flexibles"
                    name="numberOfEmployees"
                    onChange={handleChange}
                    label="Enter number"
                    // multiline
                    value={values["numberOfEmployees"]}
                    error={errors.numberOfEmployees}
                    type="number"
                    maxRows={4}
                  />
                </FormControl>
              </div>
            </div>

            <div className="clientDetailForm_annualTurnover">
              <div className="clientDetailForm_annualHeading">
                <Typography variant="subtitle1">
                  Estimated annual turnover
                </Typography>
                <img src={InfoIcon} alt="Client details" />
              </div>
              <div className="clientDetailForm_annualSelect">
                <FormControl fullWidth>
                  {/* <InputLabel>Select Turnover</InputLabel>
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
                  </Select> */}
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Enter Turnover"
                    // multiline
                    // value={turnOver}
                    name="turnOver"
                    onChange={handleChange}
                    value={values["turnOver"]}
                    error={errors.turnOver}
                    type="number"
                    maxRows={4}
                  />
                  {/* <TextField
                    label="Size"
                    id="outlined-size-normal"
                    defaultValue="Normal"
                  /> */}
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
