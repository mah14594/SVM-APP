import React, { useRef, useState } from "react";
import KeypadButton from "./KeypadButton";
import Screen from "./Screen";
import classes from "./Keypad.module.css";
import { useSelector, useDispatch } from "react-redux";
import { MachineActions } from "../Store";
export default function Keypad() {
  const dispatch = useDispatch();
  const moneyRef = useRef();
  const [productexist, setproductexist] = useState(false); //to activate money action
  const [buttondisable, setbuttondisable] = useState(false);
  const [disableclear, setdisableclear] = useState(true);
  const enableclearhandler = () => {
    setdisableclear(false);
  };
  const ButtonsList = ["A", "B", "C", "D", "E", "1", "2", "3", "4", "5"];
  const ButtonsListMapping = ButtonsList.map((id) => {
    return (
      <KeypadButton
        key={id}
        buttontext={id}
        disablebutton={buttondisable}
        clearHanlder={enableclearhandler}
      ></KeypadButton>
    );
  });
  const entredproductNumber = useSelector((state) => state.insertednumber); //get the product number entered with keypad
  const Products = useSelector((state) => state.initialProducts);
  const itemexists = Products.findIndex(
    (item) => item.id === entredproductNumber
  );
  let updateScreencontet = { P1: "", P2: "", P3: "" };
  const enterProductNumberHandler = () => {
    setdisableclear(true);
    if (itemexists === -1) {
      updateScreencontet.P2 = "Enter a Valid product number please!";
      setproductexist(false);
      dispatch(MachineActions.reset());
    } else {
      if (Products[itemexists].total === 0) {
        updateScreencontet.P2 = "Sorry! this product is not available";
        setproductexist(false);
        dispatch(MachineActions.reset());
      } else {
        setproductexist(true);
        setdisableclear(true);
        setbuttondisable(true);
        updateScreencontet.P1 = `avilable items: ${Products[itemexists].total}`;
        updateScreencontet.P2 = "Enter the money in it's place";
        updateScreencontet.P3 = `Price: ${Products[itemexists].price}$`;
      }
    }
    dispatch(MachineActions.enterproductnumber(updateScreencontet));
  };
  let Acceptedmoney = 0;
  let change = 0;
  const insertMoneyHandler = () => {
    const enteredMoney = +moneyRef.current.value;
    const itemPrice = Products[itemexists].price;
    if (
      enteredMoney === 0.1 ||
      enteredMoney === 0.2 ||
      enteredMoney === 0.5 ||
      enteredMoney === 1 ||
      enteredMoney === 20 ||
      enteredMoney === 50
    ) {
      Acceptedmoney += enteredMoney;
      if (Acceptedmoney === itemPrice) {
        setbuttondisable(false);
        setproductexist(false);
        dispatch(MachineActions.reset());
        updateScreencontet.P1 = "";
        updateScreencontet.P2 = "Take Your Product";
        updateScreencontet.P3 = "";
      } else if (Acceptedmoney < itemPrice) {
        updateScreencontet.P1 = `avilable items: ${Products[itemexists].total}`;
        updateScreencontet.P2 = "Not Enough money ,insert More!";
        updateScreencontet.P3 = `Price: ${Products[itemexists].price}$`;
      } else {
        setbuttondisable(false);
        setproductexist(false);
        dispatch(MachineActions.reset());
        change += Acceptedmoney - itemPrice;
        updateScreencontet.P1 = "Take your product";
        updateScreencontet.P2 = "";
        updateScreencontet.P3 = `Take your change: ${change}`;
      }
    } else {
      setbuttondisable(true);
      updateScreencontet.P1 = updateScreencontet.P3 = "";
      updateScreencontet.P2 =
        "This Type of Money is not accepted! insert 0.1,0.2,0.5,1,20,50";
    }
    console.log(Acceptedmoney);

    dispatch(MachineActions.insertMoney(updateScreencontet));
  };
  const ClearHandler = () => {
    dispatch(MachineActions.clearScreen());
  };
  return (
    <div className={`container ${classes.keypad}`}>
      <div className="row">
        <div className="col-12">
          <Screen></Screen>
        </div>
        {ButtonsListMapping}
        <div className={`col-4 ${classes.actions}`}>
          <button onClick={enterProductNumberHandler}>Enter</button>
          <button onClick={ClearHandler} disabled={disableclear}>
            Clear
          </button>
        </div>
        {productexist && (
          <div className={`col-4 ${classes.moneyactions}`}>
            <button onClick={insertMoneyHandler}>insert</button>
            <input
              placeholder="enter the money here"
              type="text"
              ref={moneyRef}
            />
          </div>
        )}
      </div>
    </div>
  );
}
