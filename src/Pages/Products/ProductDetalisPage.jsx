import React from "react";
import NavCategories from "../../Components/NavCategories";
import CardDetails from "../../Components/Products/CardDetails";
import Row from "../../Components/Utility/Row";
import CardElement from "../../Components/Products/Card";

const ProductDetalisPage = () => {
  return (
    <div>
      <NavCategories />
      <CardDetails />
      <Row>
        <CardElement />
        <CardElement />
        <CardElement />
        <CardElement />
        <CardElement />
        <CardElement />
        <CardElement />
        <CardElement />
      </Row>
    </div>
  );
};

export default ProductDetalisPage;
