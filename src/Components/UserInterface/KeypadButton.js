import React from "react";
import classes from "./KeypadButton.module.css";
import { MachineActions } from "../Store";
import { useDispatch } from "react-redux";
export default function KeypadButton(props) {
  const dispatch = useDispatch();
  const pressNumberHandler = () => {
    props.clearHanlder();
    dispatch(MachineActions.insertNumber(props.buttontext));
  };
  return (
    <div className="col-4">
      <button
        className={`${classes.button}`}
        onClick={pressNumberHandler}
        disabled={props.disablebutton}
      >
        {props.buttontext}
      </button>
    </div>
  );
}
