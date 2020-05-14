import React from "react";
import { useFirestoreCollectionData, useFirestore } from "reactfire";

import ProductItem from "./ProductItem/ProductItem.jsx";

const ProductList = () => {
  const productsRef = useFirestore().collection("products");
  const products = useFirestoreCollectionData(productsRef);

  const list = products.map((product) => (
    <ProductItem key={product.id} value={product} />
  ));
  return <>{list}</>;
};

export default ProductList;
