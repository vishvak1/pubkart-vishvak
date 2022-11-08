import React, { Component, useEffect, useState } from "react";
import ProductModel from "../../models/product.model";
import Product from "../product/product.component";

export default function ProductList() {
  const [products, setProducts] = useState<ProductModel[]>();
  let deleteAProduct = (productId: number) => {
    let newProductList = products?.filter((p) => p.id != productId);
    setProducts(newProductList);
  };
  useEffect(() => {
    (async () => {
      let res = await fetch("http://localhost:4000/products");

      if (res.ok) {
        let products: ProductModel[] = await res.json();
        setProducts(products);
      }
    })();
  }, []);
  let productsToBeCreated = products?.map((product) => (
    <Product
      key={product.id}
      productdetails={product}
      deleteAProduct={(productId: number) => deleteAProduct(productId)}
    />
  ));
  return (
    <div>
      <h1 className="text-center">Pubkart</h1>
      <div className="row">{productsToBeCreated}</div>
    </div>
  );
}
