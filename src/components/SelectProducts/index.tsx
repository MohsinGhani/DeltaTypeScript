import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  Divider,
  Grid,
} from "@mui/material";

import infoicon from "../../assets/images/infoIcon.svg";
import editIcon from "../../assets/images/editIcon.svg";

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

const Products = ({ values, errors, handleChange }: any) => {
  const [select, setSelect] = useState<number[]>([]);

  const [abc, setProducts] = useState<any>([]);

  const [secondbuttonText, secondButtonText] = useState<number[]>([]);

  const [moreProducts, setMoreProducts] = useState<number[]>();

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
    const token = Cookies.get("token");

    axios({
      url: "https://u090h4woii.execute-api.ap-southeast-2.amazonaws.com/delta-microservices/quote-get-products",
      method: "post",
      // data: { id: values?.["subOccupationID"] },
      data: JSON.stringify("1661"),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setProducts(res?.data?.products);
        setMoreProducts(res?.data?.packages);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return (
    <div className="products_container">
      <div className="products_header">
        <img src={editIcon} alt="Edit Icon" />
        <Typography variant="h6">Select products</Typography>
      </div>
      <Divider light />
      <div className="products_heading">
        <Typography variant="h6">
          The following products are available for the insured
        </Typography>
        <img src={infoicon} alt="info details" />
      </div>

      <Grid container spacing={1} className="productCard_container">
        {abc?.map((abc: any) => {
          return (
            <>
              <Grid item xs={3.6}>
                <Card
                  style={{
                    backgroundColor: select.includes(abc.id)
                      ? "rgba(111, 183, 87, 0.08"
                      : "white",
                    color: abc.id === moreProducts ? "white" : "#474848",
                  }}
                >
                  <CardContent
                    onClick={() => {
                      if (select.includes(abc.id)) {
                        const selectedArray = [...select].filter(
                          (key) => key !== abc.id
                        );
                        setSelect(selectedArray);
                        handleChange({
                          target: {
                            name: "products",
                            value: selectedArray,
                          },
                        });
                      } else {
                        const selectedArray = [...select];
                        selectedArray.push(abc.id);
                        setSelect(selectedArray);
                        handleChange({
                          target: {
                            name: "products",
                            value: selectedArray,
                          },
                        });
                        // secondButtonText("Selected ✔");
                      }
                    }}
                    key={abc.id}
                  >
                    <div className="productCard_imageAndButton">
                      <img
                        src={mapTitleToImage(abc.name)}
                        alt={abc.productSectionName}
                      />
                      {/* <Button
                        style={{
                          backgroundColor: select.includes(abc.id)
                            ? "#474848"
                            : "white",
                          color: select.includes(abc.id) ? "white" : "#474848",
                        }}
                        variant="outlined"
                        type="button"
                        onClick={() => {
                          if (select.includes(abc.id)) {
                            const selectedArray = [...select].filter(
                              (key) => key !== abc.id
                            );
                            setSelect(selectedArray);
                            handleChange({
                              target: {
                                name: "products",
                                value: selectedArray,
                              },
                            });
                          } else {
                            const selectedArray = [...select];
                            selectedArray.push(abc.id);
                            setSelect(selectedArray);
                            handleChange({
                              target: {
                                name: "products",
                                value: selectedArray,
                              },
                            });
                            // secondButtonText("Selected ✔");
                          }
                        }}
                      >
                        {select.includes(abc.id) ? "Selected ✔" : "select"}
                      </Button> */}
                    </div>
                    <div className="productCard_info">
                      <Typography variant="h4">
                        {abc.name} <img src={infoicon} alt="info details" />
                      </Typography>
                    </div>
                    {/* <div className="productCard_bottom">
                      <Typography>Click to add this product.</Typography>
                    </div> */}
                  </CardContent>
                </Card>
              </Grid>
            </>
          );
        })}
      </Grid>
      <div className="moreProducts_heading">
        <Typography variant="h6">
          Unfortunately due to occupation or size, the following products are
          not available to the insured
        </Typography>
        <img src={infoicon} alt="info details" />
      </div>
      <Grid container spacing={1} className="moreProductCard_container">
        {moreProducts?.map((moreProducts: any) => {
          // {moreProducts?.map((moreProducts: any) => {
          return (
            <Grid item xs={3.6}>
              <Card
                style={{
                  backgroundColor: secondbuttonText.includes(moreProducts.id)
                    ? "rgba(111, 183, 87, 0.08"
                    : "white",
                  color: moreProducts.id === moreProducts ? "white" : "#474848",
                }}
              >
                <CardContent
                  onClick={() => {
                    if (secondbuttonText.includes(moreProducts.id)) {
                      const selectedArray = [...secondbuttonText].filter(
                        (key) => key !== moreProducts.id
                      );
                      secondButtonText(selectedArray);
                      handleChange({
                        target: {
                          name: "packages",
                          value: selectedArray,
                        },
                      });
                    } else {
                      const selectedArray = [...secondbuttonText];
                      selectedArray.push(moreProducts.id);
                      secondButtonText(selectedArray);
                      handleChange({
                        target: {
                          name: "packages",
                          value: selectedArray,
                        },
                      });
                      // secondButtonText("Selected ✔");
                    }
                  }}
                  key={moreProducts.id}
                >
                  <div className="moreProductCard_imageAndButton">
                    <img
                      src={mapTitleToImage(moreProducts.name)}
                      alt={moreProducts.productSectionName}
                    />
                    {/* <Button
                      style={{
                        backgroundColor: secondbuttonText.includes(
                          moreProducts.id
                        )
                          ? "#474848"
                          : "white",
                        color: secondbuttonText.includes(moreProducts.id)
                          ? "white"
                          : "#474848",
                      }}
                      variant="outlined"
                      type="button"
                      onClick={() => {
                        if (secondbuttonText.includes(moreProducts.id)) {
                          const selectedArray = [...secondbuttonText].filter(
                            (key) => key !== moreProducts.id
                          );
                          secondButtonText(selectedArray);
                          handleChange({
                            target: {
                              name: "packages",
                              value: selectedArray,
                            },
                          });
                        } else {
                          const selectedArray = [...secondbuttonText];
                          selectedArray.push(moreProducts.id);
                          secondButtonText(selectedArray);
                          handleChange({
                            target: {
                              name: "packages",
                              value: selectedArray,
                            },
                          });
                          // secondButtonText("Selected ✔");
                        }
                      }}
                    >
                      {secondbuttonText.includes(moreProducts.id)
                        ? "Selected ✔"
                        : "select"}
                    </Button> */}
                  </div>
                  <div className="moreProductCard_info">
                    <Typography variant="h4">
                      {moreProducts.name}{" "}
                      <img src={infoicon} alt="info details" />
                    </Typography>
                  </div>
                  {/* <div className="moreProductCard_bottom">
                    <Typography>Click to add this product.</Typography>
                  </div> */}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
export default Products;
