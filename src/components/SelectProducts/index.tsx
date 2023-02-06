import React, { useEffect, useState } from "react";
import { Card, CardContent, Button, Typography, Divider } from "@mui/material";

import infoicon from "../../assets/images/infoIcon.svg";
import editIcon from "../../assets/images/editIcon.svg";
import products from "../../shared/json/productCards.json";

import ManagementImage from "../../assets/images/Management Liability.jpg";
import ProfessionalImage from "../../assets/images/Professional_Indemnity.png";
import CyberImage from "../../assets/images/Cyber 1.png";
import HealthCareLiabilityImage from "../../assets/images/healthCare liability.png";
import GeneralLiabilityImage from "../../assets/images/General Liability.png";
import CliExpensesImage from "../../assets/images/cli expenses.png";
import axios from "axios";
import Cookies from "js-cookie";

enum ImageUrl {
  Professional = "Professional Indemnity",
  Management = "Management liability",
  Cyber = "Cyber Liability",
  HealthCareLiability = "HealthCare Liability",
  CliExpenses = "CLE Expenses",
  GeneralLiability = "General Liability",
}

const Products = ({ formField }: any) => {
  const [select, setSelect] = useState<number>(0);

  const [secondbuttonText, secondButtonText] = useState("select");

  const [moreProducts, setMoreProducts] = useState<number>();
  let [toggleReload, setToggleReload] = useState(false);
  const mapTitleToImage = (imageUrl: string): string => {
    switch (imageUrl) {
      case ImageUrl.Management:
        return ManagementImage;

      case ImageUrl.Professional:
        return ProfessionalImage;

      case ImageUrl.Cyber:
        return CyberImage;

      case ImageUrl.GeneralLiability:
        return GeneralLiabilityImage;

      case ImageUrl.HealthCareLiability:
        return HealthCareLiabilityImage;

      case ImageUrl.CliExpenses:
        return CliExpensesImage;

      default:
        return ManagementImage;
    }
  };
  useEffect(() => {
    const OwnProducts = async (event: any) => {
      try {
        const token = Cookies.get("token");
        let response = await axios({
          url: "https://u090h4woii.execute-api.ap-southeast-2.amazonaws.com/delta-microservices/client-products-by-suboccupation",
          method: "post",
          data: { setMoreProducts: event },
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status === 200) {
          console.log("response: ", response.data.data);

          setSelect(response.data.data.reverse());
          // setProducts(response.data.data);
        } else {
          console.log("error in api call");
        }
      } catch (e) {
        const staticData = {
          productList: [
            {
              packageId: null,
              productId: 79,
              productSectionId: 104,
              packageName: null,
              productName: "Commercial Legal Expenses",
              productSectionName: "Commercial Legal Expenses",
              lookupTableId: null,
              lookupTableName: null,
              lookupDisplayText: null,
              lookupTableEntryId: null,
              lookupTableEntryLookupText: null,
              lookupTableEntryLookupValue: null,
            },
            {
              packageId: null,
              productId: 105,
              productSectionId: 133,
              packageName: null,
              productName: "Cyber Protection",
              productSectionName: "Cyber Liability",
              lookupTableId: null,
              lookupTableName: null,
              lookupDisplayText: null,
              lookupTableEntryId: null,
              lookupTableEntryLookupText: null,
              lookupTableEntryLookupValue: null,
            },
            {
              packageId: null,
              productId: 100,
              productSectionId: 126,
              packageName: null,
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 156,
              lookupTableName: "PI Increased Retention Discount",
              lookupDisplayText: "PI Increased Retention Discount",
              lookupTableEntryId: 30,
              lookupTableEntryLookupText: "Up to 50%",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: null,
              productId: 100,
              productSectionId: 126,
              packageName: null,
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 156,
              lookupTableName: "PI Increased Retention Discount",
              lookupDisplayText: "PI Increased Retention Discount",
              lookupTableEntryId: 31,
              lookupTableEntryLookupText: "Up to 100%",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: null,
              productId: 100,
              productSectionId: 126,
              packageName: null,
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 156,
              lookupTableName: "PI Increased Retention Discount",
              lookupDisplayText: "PI Increased Retention Discount",
              lookupTableEntryId: 32,
              lookupTableEntryLookupText: "Up to 150%",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: null,
              productId: 100,
              productSectionId: 126,
              packageName: null,
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 156,
              lookupTableName: "PI Increased Retention Discount",
              lookupDisplayText: "PI Increased Retention Discount",
              lookupTableEntryId: 33,
              lookupTableEntryLookupText: "Over 150%",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: null,
              productId: 100,
              productSectionId: 126,
              packageName: null,
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 157,
              lookupTableName: "PI Decreased Retention Loading",
              lookupDisplayText: "PI Decreased Retention Loading",
              lookupTableEntryId: 34,
              lookupTableEntryLookupText: "Up to 50%",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: null,
              productId: 100,
              productSectionId: 126,
              packageName: null,
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 157,
              lookupTableName: "PI Decreased Retention Loading",
              lookupDisplayText: "PI Decreased Retention Loading",
              lookupTableEntryId: 35,
              lookupTableEntryLookupText: "Up to 100%",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: null,
              productId: 100,
              productSectionId: 126,
              packageName: null,
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 157,
              lookupTableName: "PI Decreased Retention Loading",
              lookupDisplayText: "PI Decreased Retention Loading",
              lookupTableEntryId: 36,
              lookupTableEntryLookupText: "Up to 150%",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: null,
              productId: 100,
              productSectionId: 126,
              packageName: null,
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 157,
              lookupTableName: "PI Decreased Retention Loading",
              lookupDisplayText: "PI Decreased Retention Loading",
              lookupTableEntryId: 37,
              lookupTableEntryLookupText: "Over 150%",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: null,
              productId: 100,
              productSectionId: 126,
              packageName: null,
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 158,
              lookupTableName: "PI Quality Discount Factors",
              lookupDisplayText: "PI Quality Discount Factors",
              lookupTableEntryId: 38,
              lookupTableEntryLookupText: "1 factor",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: null,
              productId: 100,
              productSectionId: 126,
              packageName: null,
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 158,
              lookupTableName: "PI Quality Discount Factors",
              lookupDisplayText: "PI Quality Discount Factors",
              lookupTableEntryId: 39,
              lookupTableEntryLookupText: "2 factors",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: null,
              productId: 100,
              productSectionId: 126,
              packageName: null,
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 158,
              lookupTableName: "PI Quality Discount Factors",
              lookupDisplayText: "PI Quality Discount Factors",
              lookupTableEntryId: 40,
              lookupTableEntryLookupText: "3 factors",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: null,
              productId: 100,
              productSectionId: 126,
              packageName: null,
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 159,
              lookupTableName: "PI Claims Free Period",
              lookupDisplayText: "PI Claims Free Period",
              lookupTableEntryId: 41,
              lookupTableEntryLookupText: "1 year",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: null,
              productId: 100,
              productSectionId: 126,
              packageName: null,
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 159,
              lookupTableName: "PI Claims Free Period",
              lookupDisplayText: "PI Claims Free Period",
              lookupTableEntryId: 42,
              lookupTableEntryLookupText: "Two (2) Years",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: null,
              productId: 100,
              productSectionId: 126,
              packageName: null,
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 159,
              lookupTableName: "PI Claims Free Period",
              lookupDisplayText: "PI Claims Free Period",
              lookupTableEntryId: 43,
              lookupTableEntryLookupText: "Three (3) Years",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: null,
              productId: 100,
              productSectionId: 126,
              packageName: null,
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 159,
              lookupTableName: "PI Claims Free Period",
              lookupDisplayText: "PI Claims Free Period",
              lookupTableEntryId: 44,
              lookupTableEntryLookupText: "Five (5) Years ",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: null,
              productId: 100,
              productSectionId: 126,
              packageName: null,
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 160,
              lookupTableName: "PI Loading / Discount",
              lookupDisplayText: "Loading / Discount",
              lookupTableEntryId: null,
              lookupTableEntryLookupText: null,
              lookupTableEntryLookupValue: null,
            },
            {
              packageId: 18,
              productId: 88,
              productSectionId: 114,
              packageName: "Delta Management Liability Package",
              productName: "Commercial Crime ",
              productSectionName: "Commercial Crime",
              lookupTableId: 185,
              lookupTableName: "Crime Internal Controls",
              lookupDisplayText: "Crime Internal Controls",
              lookupTableEntryId: 856,
              lookupTableEntryLookupText: "Weak",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 18,
              productId: 88,
              productSectionId: 114,
              packageName: "Delta Management Liability Package",
              productName: "Commercial Crime ",
              productSectionName: "Commercial Crime",
              lookupTableId: 185,
              lookupTableName: "Crime Internal Controls",
              lookupDisplayText: "Crime Internal Controls",
              lookupTableEntryId: 857,
              lookupTableEntryLookupText: "Average",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 18,
              productId: 88,
              productSectionId: 114,
              packageName: "Delta Management Liability Package",
              productName: "Commercial Crime ",
              productSectionName: "Commercial Crime",
              lookupTableId: 190,
              lookupTableName: "Crime Liability Loading / Discount",
              lookupDisplayText: "Crime Liability Loading / Discount",
              lookupTableEntryId: null,
              lookupTableEntryLookupText: null,
              lookupTableEntryLookupValue: null,
            },
            {
              packageId: 18,
              productId: 79,
              productSectionId: 104,
              packageName: "Delta Management Liability Package",
              productName: "Commercial Legal Expenses",
              productSectionName: "Commercial Legal Expenses",
              lookupTableId: null,
              lookupTableName: null,
              lookupDisplayText: null,
              lookupTableEntryId: null,
              lookupTableEntryLookupText: null,
              lookupTableEntryLookupValue: null,
            },
            {
              packageId: 18,
              productId: 80,
              productSectionId: 105,
              packageName: "Delta Management Liability Package",
              productName: "Directors & Officers and Corporate Legal Liability",
              productSectionName:
                "Directors & Officers and Corporate Legal Liability",
              lookupTableId: 182,
              lookupTableName: "D and O Liability Financial Profile",
              lookupDisplayText: "D and O Liability Financial Profile",
              lookupTableEntryId: 850,
              lookupTableEntryLookupText: "Weak",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 18,
              productId: 80,
              productSectionId: 105,
              packageName: "Delta Management Liability Package",
              productName: "Directors & Officers and Corporate Legal Liability",
              productSectionName:
                "Directors & Officers and Corporate Legal Liability",
              lookupTableId: 182,
              lookupTableName: "D and O Liability Financial Profile",
              lookupDisplayText: "D and O Liability Financial Profile",
              lookupTableEntryId: 851,
              lookupTableEntryLookupText: "Average",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 18,
              productId: 80,
              productSectionId: 105,
              packageName: "Delta Management Liability Package",
              productName: "Directors & Officers and Corporate Legal Liability",
              productSectionName:
                "Directors & Officers and Corporate Legal Liability",
              lookupTableId: 186,
              lookupTableName: "D and O Liability Risk Management controls",
              lookupDisplayText: "D and O Liability Risk Management controls",
              lookupTableEntryId: 858,
              lookupTableEntryLookupText: "Weak",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 18,
              productId: 80,
              productSectionId: 105,
              packageName: "Delta Management Liability Package",
              productName: "Directors & Officers and Corporate Legal Liability",
              productSectionName:
                "Directors & Officers and Corporate Legal Liability",
              lookupTableId: 186,
              lookupTableName: "D and O Liability Risk Management controls",
              lookupDisplayText: "D and O Liability Risk Management controls",
              lookupTableEntryId: 859,
              lookupTableEntryLookupText: "Average",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 18,
              productId: 80,
              productSectionId: 105,
              packageName: "Delta Management Liability Package",
              productName: "Directors & Officers and Corporate Legal Liability",
              productSectionName:
                "Directors & Officers and Corporate Legal Liability",
              lookupTableId: 187,
              lookupTableName: "D and O Liability Loading / Discount",
              lookupDisplayText: "D and O Liability Loading / Discount",
              lookupTableEntryId: null,
              lookupTableEntryLookupText: null,
              lookupTableEntryLookupValue: null,
            },
            {
              packageId: 18,
              productId: 81,
              productSectionId: 106,
              packageName: "Delta Management Liability Package",
              productName: "Employment Practices Liability",
              productSectionName: "Employment Practices Liability",
              lookupTableId: 183,
              lookupTableName:
                "Employment Practices Liability Employment Controls",
              lookupDisplayText:
                "Employment Practices Liability Employment Controls",
              lookupTableEntryId: 852,
              lookupTableEntryLookupText: "Weak",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 18,
              productId: 81,
              productSectionId: 106,
              packageName: "Delta Management Liability Package",
              productName: "Employment Practices Liability",
              productSectionName: "Employment Practices Liability",
              lookupTableId: 183,
              lookupTableName:
                "Employment Practices Liability Employment Controls",
              lookupDisplayText:
                "Employment Practices Liability Employment Controls",
              lookupTableEntryId: 853,
              lookupTableEntryLookupText: "Average",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 18,
              productId: 81,
              productSectionId: 106,
              packageName: "Delta Management Liability Package",
              productName: "Employment Practices Liability",
              productSectionName: "Employment Practices Liability",
              lookupTableId: 188,
              lookupTableName:
                "Employment Practices Liability Loading / Discount",
              lookupDisplayText:
                "Employment Practices Liability Loading / Discount",
              lookupTableEntryId: null,
              lookupTableEntryLookupText: null,
              lookupTableEntryLookupValue: null,
            },
            {
              packageId: 18,
              productId: 84,
              productSectionId: 110,
              packageName: "Delta Management Liability Package",
              productName: "Statutory Liability ",
              productSectionName: "Statutory Liability",
              lookupTableId: 184,
              lookupTableName: "Statutory Liability Risk Management Controls",
              lookupDisplayText: "Statutory Liability Risk Management Controls",
              lookupTableEntryId: 854,
              lookupTableEntryLookupText: "Weak",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 18,
              productId: 84,
              productSectionId: 110,
              packageName: "Delta Management Liability Package",
              productName: "Statutory Liability ",
              productSectionName: "Statutory Liability",
              lookupTableId: 184,
              lookupTableName: "Statutory Liability Risk Management Controls",
              lookupDisplayText: "Statutory Liability Risk Management Controls",
              lookupTableEntryId: 855,
              lookupTableEntryLookupText: "Average",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 18,
              productId: 84,
              productSectionId: 110,
              packageName: "Delta Management Liability Package",
              productName: "Statutory Liability ",
              productSectionName: "Statutory Liability",
              lookupTableId: 189,
              lookupTableName: "Statutory Liability Loading / Discount",
              lookupDisplayText: "Statutory Liability Loading / Discount",
              lookupTableEntryId: null,
              lookupTableEntryLookupText: null,
              lookupTableEntryLookupValue: null,
            },
            {
              packageId: 25,
              productId: 99,
              productSectionId: 125,
              packageName: "Delta MediaTech Package",
              productName: "Commercial Legal Expenses",
              productSectionName: "Commercial Legal Expenses",
              lookupTableId: null,
              lookupTableName: null,
              lookupDisplayText: null,
              lookupTableEntryId: null,
              lookupTableEntryLookupText: null,
              lookupTableEntryLookupValue: null,
            },
            {
              packageId: 25,
              productId: 102,
              productSectionId: 130,
              packageName: "Delta MediaTech Package",
              productName: "General Liability ",
              productSectionName: "Delta General Liability",
              lookupTableId: null,
              lookupTableName: null,
              lookupDisplayText: null,
              lookupTableEntryId: null,
              lookupTableEntryLookupText: null,
              lookupTableEntryLookupValue: null,
            },
            {
              packageId: 25,
              productId: 103,
              productSectionId: 131,
              packageName: "Delta MediaTech Package",
              productName: "MediaTech",
              productSectionName: "Media, Tech & Breach Response Services",
              lookupTableId: null,
              lookupTableName: null,
              lookupDisplayText: null,
              lookupTableEntryId: null,
              lookupTableEntryLookupText: null,
              lookupTableEntryLookupValue: null,
            },
            {
              packageId: 26,
              productId: 99,
              productSectionId: 125,
              packageName: "Delta Professional Liability Package",
              productName: "Commercial Legal Expenses",
              productSectionName: "Commercial Legal Expenses",
              lookupTableId: null,
              lookupTableName: null,
              lookupDisplayText: null,
              lookupTableEntryId: null,
              lookupTableEntryLookupText: null,
              lookupTableEntryLookupValue: null,
            },
            {
              packageId: 26,
              productId: 102,
              productSectionId: 130,
              packageName: "Delta Professional Liability Package",
              productName: "General Liability ",
              productSectionName: "Delta General Liability",
              lookupTableId: null,
              lookupTableName: null,
              lookupDisplayText: null,
              lookupTableEntryId: null,
              lookupTableEntryLookupText: null,
              lookupTableEntryLookupValue: null,
            },
            {
              packageId: 26,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Liability Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 156,
              lookupTableName: "PI Increased Retention Discount",
              lookupDisplayText: "PI Increased Retention Discount",
              lookupTableEntryId: 30,
              lookupTableEntryLookupText: "Up to 50%",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 26,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Liability Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 156,
              lookupTableName: "PI Increased Retention Discount",
              lookupDisplayText: "PI Increased Retention Discount",
              lookupTableEntryId: 31,
              lookupTableEntryLookupText: "Up to 100%",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 26,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Liability Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 156,
              lookupTableName: "PI Increased Retention Discount",
              lookupDisplayText: "PI Increased Retention Discount",
              lookupTableEntryId: 32,
              lookupTableEntryLookupText: "Up to 150%",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 26,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Liability Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 156,
              lookupTableName: "PI Increased Retention Discount",
              lookupDisplayText: "PI Increased Retention Discount",
              lookupTableEntryId: 33,
              lookupTableEntryLookupText: "Over 150%",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 26,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Liability Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 157,
              lookupTableName: "PI Decreased Retention Loading",
              lookupDisplayText: "PI Decreased Retention Loading",
              lookupTableEntryId: 34,
              lookupTableEntryLookupText: "Up to 50%",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 26,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Liability Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 157,
              lookupTableName: "PI Decreased Retention Loading",
              lookupDisplayText: "PI Decreased Retention Loading",
              lookupTableEntryId: 35,
              lookupTableEntryLookupText: "Up to 100%",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 26,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Liability Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 157,
              lookupTableName: "PI Decreased Retention Loading",
              lookupDisplayText: "PI Decreased Retention Loading",
              lookupTableEntryId: 36,
              lookupTableEntryLookupText: "Up to 150%",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 26,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Liability Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 157,
              lookupTableName: "PI Decreased Retention Loading",
              lookupDisplayText: "PI Decreased Retention Loading",
              lookupTableEntryId: 37,
              lookupTableEntryLookupText: "Over 150%",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 26,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Liability Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 158,
              lookupTableName: "PI Quality Discount Factors",
              lookupDisplayText: "PI Quality Discount Factors",
              lookupTableEntryId: 38,
              lookupTableEntryLookupText: "1 factor",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 26,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Liability Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 158,
              lookupTableName: "PI Quality Discount Factors",
              lookupDisplayText: "PI Quality Discount Factors",
              lookupTableEntryId: 39,
              lookupTableEntryLookupText: "2 factors",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 26,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Liability Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 158,
              lookupTableName: "PI Quality Discount Factors",
              lookupDisplayText: "PI Quality Discount Factors",
              lookupTableEntryId: 40,
              lookupTableEntryLookupText: "3 factors",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 26,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Liability Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 159,
              lookupTableName: "PI Claims Free Period",
              lookupDisplayText: "PI Claims Free Period",
              lookupTableEntryId: 41,
              lookupTableEntryLookupText: "1 year",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 26,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Liability Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 159,
              lookupTableName: "PI Claims Free Period",
              lookupDisplayText: "PI Claims Free Period",
              lookupTableEntryId: 42,
              lookupTableEntryLookupText: "Two (2) Years",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 26,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Liability Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 159,
              lookupTableName: "PI Claims Free Period",
              lookupDisplayText: "PI Claims Free Period",
              lookupTableEntryId: 43,
              lookupTableEntryLookupText: "Three (3) Years",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 26,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Liability Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 159,
              lookupTableName: "PI Claims Free Period",
              lookupDisplayText: "PI Claims Free Period",
              lookupTableEntryId: 44,
              lookupTableEntryLookupText: "Five (5) Years ",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 26,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Liability Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 160,
              lookupTableName: "PI Loading / Discount",
              lookupDisplayText: "Loading / Discount",
              lookupTableEntryId: null,
              lookupTableEntryLookupText: null,
              lookupTableEntryLookupValue: null,
            },
            {
              packageId: 24,
              productId: 99,
              productSectionId: 125,
              packageName: "Delta Professional Package",
              productName: "Commercial Legal Expenses",
              productSectionName: "Commercial Legal Expenses",
              lookupTableId: null,
              lookupTableName: null,
              lookupDisplayText: null,
              lookupTableEntryId: null,
              lookupTableEntryLookupText: null,
              lookupTableEntryLookupValue: null,
            },
            {
              packageId: 24,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 156,
              lookupTableName: "PI Increased Retention Discount",
              lookupDisplayText: "PI Increased Retention Discount",
              lookupTableEntryId: 30,
              lookupTableEntryLookupText: "Up to 50%",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 24,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 156,
              lookupTableName: "PI Increased Retention Discount",
              lookupDisplayText: "PI Increased Retention Discount",
              lookupTableEntryId: 31,
              lookupTableEntryLookupText: "Up to 100%",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 24,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 156,
              lookupTableName: "PI Increased Retention Discount",
              lookupDisplayText: "PI Increased Retention Discount",
              lookupTableEntryId: 32,
              lookupTableEntryLookupText: "Up to 150%",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 24,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 156,
              lookupTableName: "PI Increased Retention Discount",
              lookupDisplayText: "PI Increased Retention Discount",
              lookupTableEntryId: 33,
              lookupTableEntryLookupText: "Over 150%",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 24,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 157,
              lookupTableName: "PI Decreased Retention Loading",
              lookupDisplayText: "PI Decreased Retention Loading",
              lookupTableEntryId: 34,
              lookupTableEntryLookupText: "Up to 50%",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 24,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 157,
              lookupTableName: "PI Decreased Retention Loading",
              lookupDisplayText: "PI Decreased Retention Loading",
              lookupTableEntryId: 35,
              lookupTableEntryLookupText: "Up to 100%",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 24,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 157,
              lookupTableName: "PI Decreased Retention Loading",
              lookupDisplayText: "PI Decreased Retention Loading",
              lookupTableEntryId: 36,
              lookupTableEntryLookupText: "Up to 150%",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 24,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 157,
              lookupTableName: "PI Decreased Retention Loading",
              lookupDisplayText: "PI Decreased Retention Loading",
              lookupTableEntryId: 37,
              lookupTableEntryLookupText: "Over 150%",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 24,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 158,
              lookupTableName: "PI Quality Discount Factors",
              lookupDisplayText: "PI Quality Discount Factors",
              lookupTableEntryId: 38,
              lookupTableEntryLookupText: "1 factor",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 24,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 158,
              lookupTableName: "PI Quality Discount Factors",
              lookupDisplayText: "PI Quality Discount Factors",
              lookupTableEntryId: 39,
              lookupTableEntryLookupText: "2 factors",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 24,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 158,
              lookupTableName: "PI Quality Discount Factors",
              lookupDisplayText: "PI Quality Discount Factors",
              lookupTableEntryId: 40,
              lookupTableEntryLookupText: "3 factors",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 24,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 159,
              lookupTableName: "PI Claims Free Period",
              lookupDisplayText: "PI Claims Free Period",
              lookupTableEntryId: 41,
              lookupTableEntryLookupText: "1 year",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 24,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 159,
              lookupTableName: "PI Claims Free Period",
              lookupDisplayText: "PI Claims Free Period",
              lookupTableEntryId: 42,
              lookupTableEntryLookupText: "Two (2) Years",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 24,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 159,
              lookupTableName: "PI Claims Free Period",
              lookupDisplayText: "PI Claims Free Period",
              lookupTableEntryId: 43,
              lookupTableEntryLookupText: "Three (3) Years",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 24,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 159,
              lookupTableName: "PI Claims Free Period",
              lookupDisplayText: "PI Claims Free Period",
              lookupTableEntryId: 44,
              lookupTableEntryLookupText: "Five (5) Years ",
              lookupTableEntryLookupValue: 0,
            },
            {
              packageId: 24,
              productId: 100,
              productSectionId: 126,
              packageName: "Delta Professional Package",
              productName: "Miscellaneous Professional Indemnity",
              productSectionName: "Professional Indemnity",
              lookupTableId: 160,
              lookupTableName: "PI Loading / Discount",
              lookupDisplayText: "Loading / Discount",
              lookupTableEntryId: null,
              lookupTableEntryLookupText: null,
              lookupTableEntryLookupValue: null,
            },
          ],
        };
      }
    };
    // OwnProducts();
  }, [toggleReload]);
  return (
    <div className="products_container">
      <div className="products_header">
        <img src={editIcon} alt="Edit Icon" />
        <Typography variant="h6">Select products</Typography>
      </div>
      <Divider light />
      <div className="products_heading">
        <Typography variant="h6">
          Occupations like this are covered for these products
        </Typography>
        <img src={infoicon} alt="info details" />
      </div>

      <div className="productCard_container">
        {products.products?.map((product) => {
          return (
            <Card
              style={{
                backgroundColor:
                  product.key === select ? "rgba(111, 183, 87, 0.08" : "white",
                color: product.key === moreProducts ? "white" : "#474848",
              }}
            >
              <CardContent key={product.key}>
                <div className="productCard_imageAndButton">
                  <img src={mapTitleToImage(product.title)} alt={product.alt} />
                  <Button
                    style={{
                      backgroundColor:
                        product.key === select ? "#474848" : "white",
                      color: product.key === select ? "white" : "#474848",
                    }}
                    variant="outlined"
                    type="button"
                    onClick={() => {
                      setSelect(product.key);
                      secondButtonText("Selected ✔");
                    }}
                  >
                    {product.key === select ? "Selected ✔" : "select"}
                  </Button>
                </div>
                <div className="productCard_info">
                  <Typography variant="h4">
                    {product.title} <img src={infoicon} alt="info details" />
                  </Typography>
                </div>
                <div className="productCard_bottom">
                  <Typography>Click to add this product.</Typography>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className="moreProducts_heading">
        <Typography variant="h6">More products from Delta</Typography>
        <img src={infoicon} alt="info details" />
      </div>
      <div className="moreProductCard_container">
        {products.moreProducts?.map((product) => {
          return (
            <Card
              style={{
                backgroundColor:
                  product.key === moreProducts
                    ? "rgba(111, 183, 87, 0.08"
                    : "white",
                // color: product.key === moreProducts ? "white" : "#474848",
              }}
            >
              <CardContent key={product.key}>
                <div className="moreProductCard_imageAndButton">
                  <img src={mapTitleToImage(product.title)} alt={product.alt} />
                  <Button
                    style={{
                      backgroundColor:
                        product.key === moreProducts ? "#474848" : "white",
                      color: product.key === moreProducts ? "white" : "#474848",
                    }}
                    variant="outlined"
                    type="button"
                    key={product.key}
                    onClick={() => {
                      setMoreProducts(product.key);
                    }}
                  >
                    {product.key === moreProducts ? "Selected ✔" : "select"}
                  </Button>
                </div>
                <div className="moreProductCard_info">
                  <Typography variant="h4">
                    {product.title} <img src={infoicon} alt="info details" />
                  </Typography>
                </div>
                <div className="moreProductCard_bottom">
                  <Typography>Click to add this product.</Typography>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
export default Products;
