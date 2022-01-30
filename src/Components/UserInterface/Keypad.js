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
  const requiredItem = Products.find((item) => item.id === entredproductNumber);
  let updatedscreencontent = { P1: "", P2: "", P3: "" };
  const enterProductNumberHandler = () => {
    setdisableclear(true);
    if (!requiredItem) {
      updatedscreencontent.P2 = "Enter a Valid product number please!";
      setproductexist(false);
      dispatch(MachineActions.reset());
    } else {
      if (requiredItem.total === 0) {
        updatedscreencontent.P2 = "Sorry! this product is not available";
        setproductexist(false);
        dispatch(MachineActions.reset());
      } else {
        setproductexist(true);
        setdisableclear(true);
        setbuttondisable(true);
        updatedscreencontent.P1 = `avilable items: ${requiredItem.total}`;
        updatedscreencontent.P2 = "Enter the money in it's place";
        updatedscreencontent.P3 = `Price: ${requiredItem.price}$`;
      }
    }
    dispatch(MachineActions.enterproductnumber(updatedscreencontent));
  };
  let Acceptedmoney = 0;
  let change = 0;
  const insertMoneyHandler = () => {
    const enteredMoney = +moneyRef.current.value;
    const itemPrice = requiredItem.price;

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
        updatedscreencontent.P1 = "";
        updatedscreencontent.P2 = "Take Your Product";
        updatedscreencontent.P3 = "";
      } else if (Acceptedmoney < itemPrice) {
        updatedscreencontent.P1 = `avilable items: ${requiredItem.total}`;
        updatedscreencontent.P2 = "Not Enough money ,insert More!";
        updatedscreencontent.P3 = `Price: ${requiredItem.price}$`;
      } else {
        setbuttondisable(false);
        setproductexist(false);
        dispatch(MachineActions.reset());
        change += Acceptedmoney - itemPrice;

        updatedscreencontent.P1 = "Take your product";
        updatedscreencontent.P2 = "";
        updatedscreencontent.P3 = `Take the change: ${change.toFixed(1)}`;
      }
    } else {
      setbuttondisable(true);
      updatedscreencontent.P1 = updatedscreencontent.P3 = "";
      updatedscreencontent.P2 =
        "This Type of Money is not accepted! insert 0.1,0.2,0.5,1,20 or 50";
    }
    const proccessingscreenContent = { P1: "", P2: "Processing", P3: "" };
    dispatch(MachineActions.insertMoney(proccessingscreenContent));
    setTimeout(() => {
      dispatch(MachineActions.insertMoney(updatedscreencontent));
    }, 3000); //time delay 3 seconds , that the machine takes to complete the proccess of checking the money , producing the product and the change to the customer
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
            <input
              placeholder="enter the money here"
              type="text"
              ref={moneyRef}
            />
            <button onClick={insertMoneyHandler}>insert</button>
          </div>
        )}
      </div>
    </div>
  );
}
