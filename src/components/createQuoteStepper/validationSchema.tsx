import * as Yup from "yup";

export default [
  Yup.object().shape({
    companyName: Yup.string().required(`Company name is required.`),
    tradingName: Yup.boolean(),
    occupation: Yup.string().required(`Occupation name is required.`),
    numberOfEmployees: Yup.string().required(`Select the number of employees`),
    turnOver: Yup.string().required(`Select the turnover`),
    // products: Yup.array().required(`Select the products`),
    overseas: Yup.boolean().oneOf([true], "PLEASE CHECK ATLEAST ONE CHECK BOX"),
  }),
  Yup.object().shape({}),
];
