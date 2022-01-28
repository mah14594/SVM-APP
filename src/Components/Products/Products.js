import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
export default function Products() {
  const Products = useSelector((state) => state.initialProducts);
  //For Styling:
  const ProductsA = Products.filter((item) => {
    return item.id[1] === "1";
  });
  const ProductsB = Products.filter((item) => {
    return item.id[1] === "2";
  });
  const ProductsC = Products.filter((item) => {
    return item.id[1] === "3";
  });
  const ProductsD = Products.filter((item) => {
    return item.id[1] === "4";
  });
  const ProductsE = Products.filter((item) => {
    return item.id[1] === "5";
  });

  const productsAMapping = ProductsA.map((item) => {
    return (
      <ProductItem
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        total={item.total}
        src={item.src}
      ></ProductItem>
    );
  });
  const productsBMapping = ProductsB.map((item) => {
    return (
      <ProductItem
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        total={item.total}
        src={item.src}
      ></ProductItem>
    );
  });
  const productsCMapping = ProductsC.map((item) => {
    return (
      <ProductItem
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        total={item.total}
        src={item.src}
      ></ProductItem>
    );
  });
  const productsDMapping = ProductsD.map((item) => {
    return (
      <ProductItem
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        total={item.total}
        src={item.src}
      ></ProductItem>
    );
  });
  const productsEMapping = ProductsE.map((item) => {
    return (
      <ProductItem
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        total={item.total}
        src={item.src}
      ></ProductItem>
    );
  });
  return (
    <div className={`${classes.products} container text-center mt-5 `}>
      <div className="row mt-5 d-flex justify-content-center">
        {productsAMapping}
      </div>
      <div className="row d-flex justify-content-center">
        {productsBMapping}
      </div>
      <div className="row d-flex justify-content-center">
        {productsCMapping}
      </div>
      <div className="row d-flex justify-content-center">
        {productsDMapping}
      </div>
      <div className="row mb-5 d-flex justify-content-center">
        {productsEMapping}
      </div>
    </div>
  );
}
