import React from "react";
import { Card, CardContent, Button, Typography, Divider } from "@mui/material";

import infoicon from "../../assets/images/infoIcon.svg";
import editIcon from "../../assets/images/editIcon.svg";
import products from "../../shared/json/productCards.json";
import Management from "../../assets/images/Management Liability.jpg";
import professional from "../../assets/images/Professional_Indemnity.png";

const Products = () => {
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
            <Card>
              <CardContent key={product.key}>
                <div className="productCard_imageAndButton">
                  <img src={product.image} alt={product.alt} />
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
        {products.moreProducts?.map((product) => {
          return (
            <Card>
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
            </Card>
          );
        })}
      </div>
    </div>
  );
};
export default Products;
