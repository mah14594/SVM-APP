import React from "react";
import classes from "./Screen.module.css";
import { useSelector } from "react-redux";
export default function Screen(props) {
  const screenContent = useSelector((state) => state.screencontent);
  return (
    <div className={`container  ${classes.screen}`}>
      <div className="row">
        <div className="col-3 text-center">{screenContent.p1}</div>
        <div className="col-6 text-center">{screenContent.p2}</div>
        <div className="col-3 text-center">{screenContent.p3}</div>
      </div>
    </div>
  );
}
