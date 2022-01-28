import { Fragment } from "react";
import Products from "./Components/Products/Products";
import Keypad from "./Components/UserInterface/Keypad";
function App() {
  return (
    <Fragment>
      <Products></Products>
      <Keypad></Keypad>
    </Fragment>
  );
}

export default App;
