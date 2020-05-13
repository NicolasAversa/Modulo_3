import React from "react";
import ProductList from "../../components/ProductList/ProductList.jsx";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Home = () => {
	return (
		<Container>
			<Row>
				<ProductList />
			</Row>
		</Container>
	);
};

export default Home;
