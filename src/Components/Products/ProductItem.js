import React from "react";
import classes from "./ProductItem.module.css";
export default function ProductItem(props) {
  const { id, title, src } = props;
  return (
    <div className={`${classes.ProductItem} col-2 ml-5`}>
      <img src={src} alt={title} />
      <div className="col-12 text-center">{id}</div>
    </div>
  );
}
