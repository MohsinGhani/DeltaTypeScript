import React, { useState } from "react";
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

enum ImageUrl {
  Professional = "Professional Indemnity",
  Management = "Management liability",
  Cyber = "Cyber Liability",
  HealthCareLiability = "HealthCare Liability",
  CliExpenses = "CLE Expenses",
  GeneralLiability = "General Liability",
}

const Products = () => {
  const [select, setSelect] = useState<number>(0);
  const [buttonText, setButtonText] = useState("select");
  const [secondbuttonText, secondButtonText] = useState("select");
  const [buttonColor, setButtonColor] = useState("white");
  const [iconOneColor, setIconOneColor] = useState("white");
  const [oneButtonColor, setOneButtonColor] = useState("black");
  const [moreProducts, setMoreProducts] = useState<number>(0);

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
                // color: product.key === moreProducts ? "white" : "#474848",
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
                    type="submit"
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
                    type="submit"
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
