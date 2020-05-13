import React from "react";
import Col from "react-bootstrap/Col";
import styles from "./ProductItem.module.css";

const ProductItem = (props) => {
	return (
		<>
			<Col xs={12} className={styles.container + " p-4 border-bottom"}>
				{props.value.name} {props.value.surname}
			</Col>
		</>
	);
};

export default ProductItem;
