import React from "react";
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
        {/* <Card>
          <CardContent>
            <div className="moreProductCard_imageAndButton">
              <img src={Management} alt="" />
              <Button variant="outlined">Select</Button>
            </div>
            <div className="moreProductCard_info">
              <Typography variant="h4">
                Professional Indemnity <img src={infoicon} alt="info details" />
              </Typography>
            </div>
            <div className="moreProductCard_bottom">
              <Typography>Click to add this product.</Typography>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="moreProductCard_imageAndButton">
              <img src={Management} alt="" />
              <Button variant="outlined">Select</Button>
            </div>
            <div className="moreProductCard_info">
              <Typography variant="h4">
                Management liability <img src={infoicon} alt="info details" />
              </Typography>
            </div>
            <div className="moreProductCard_bottom">
              <Typography>Click to add this product.</Typography>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="moreProductCard_imageAndButton">
              <img src={cyber} />
              <Button variant="outlined">Select</Button>
            </div>
            <div className="moreProductCard_info">
              <Typography variant="h4">
                Cyber Liability <img src={infoicon} alt="info details" />
              </Typography>
            </div>
            <div className="moreProductCard_bottom">
              <Typography>Click to add this product.</Typography>
            </div>
          </CardContent>
        </Card> */}
        {products.products?.map((product) => {
          return (
            <Card>
              <CardContent key={product.key}>
                <div className="productCard_imageAndButton">
                  <img src={mapTitleToImage(product.title)} alt={product.alt} />
                  <Button variant="outlined">Select</Button>
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
        {/* <Card>
          <CardContent>
            <div className="moreProductCard_imageAndButton">
              <img src={professional} alt="" />
              <Button variant="outlined">Select</Button>
            </div>
            <div className="moreProductCard_info">
              <Typography variant="h4">
                Professional Indemnity <img src={infoicon} alt="info details" />
              </Typography>
            </div>
            <div className="moreProductCard_bottom">
              <Typography>Click to add this product.</Typography>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="moreProductCard_imageAndButton">
              <img src={Management} alt="" />
              <Button variant="outlined">Select</Button>
            </div>
            <div className="moreProductCard_info">
              <Typography variant="h4">
                Management liability <img src={infoicon} alt="info details" />
              </Typography>
            </div>
            <div className="moreProductCard_bottom">
              <Typography>Click to add this product.</Typography>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="moreProductCard_imageAndButton">
              <img src={cyber} />
              <Button variant="outlined">Select</Button>
            </div>
            <div className="moreProductCard_info">
              <Typography variant="h4">
                Cyber Liability <img src={infoicon} alt="info details" />
              </Typography>
            </div>
            <div className="moreProductCard_bottom">
              <Typography>Click to add this product.</Typography>
            </div>
          </CardContent>
        </Card> */}
        {/* <Card>
          <CardContent key={product.key}>
            <div className="moreProductCard_imageAndButton">
              <img src={product.image} alt={product.alt} />
              <Button variant="outlined">Select</Button>
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
        </Card> */}

        {products.moreProducts?.map((product) => {
          return (
            <Card>
              <CardContent key={product.key}>
                <div className="moreProductCard_imageAndButton">
                  <img src={mapTitleToImage(product.title)} alt={product.alt} />
                  <Button variant="outlined">Select</Button>
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
