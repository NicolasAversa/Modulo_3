import React from "react";
import { useFirestoreCollectionData, useFirestore } from "reactfire";

import ProductItem from "./ProductItem/ProductItem.jsx";

const ProductList = () => {
	const usersRef = useFirestore().collection("users");
	const users = useFirestoreCollectionData(usersRef);

	const list = users.map((user) => <ProductItem key={user.id} value={user} />);
	return <>{list}</>;
};

export default ProductList;
