import React from "react";
import Col from "react-bootstrap/Col";
import styles from "./ProductItem.module.css";

const ProductItem = (props) => {
  return (
    <Col xs={12} className={styles.container + " p-4 border-bottom"}>
      <h5 className="font-weight-light">{props.value.name}</h5>{" "}
      <h4>${props.value.price}</h4>
    </Col>
  );
};

export default ProductItem;
