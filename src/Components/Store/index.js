import { createSlice, configureStore } from "@reduxjs/toolkit";
const Products = [
  {
    id: "A1",
    title: "Snickers",
    price: 2,
    total: 0,
    src: "../Images/Snickers.png",
  },
  {
    id: "B1",
    title: "BlueGalaxy",
    price: 5.5,
    total: 0,
    src: "../Images/BlueGalaxy.png",
  },
  {
    id: "C1",
    title: "Twix",
    price: 2,
    total: 9,
    src: "../Images/Twix.png",
  },
  {
    id: "D1",
    title: "Bounty",
    price: 2,
    total: 6,
    src: "../Images/Bounty.png",
  },
  {
    id: "E1",
    title: "KitKat",
    price: 2.5,
    total: 6,
    src: "../Images/KitKat.png",
  },
  {
    id: "A2",
    title: "RedDoritos",
    price: 3.2,
    total: 7,
    src: "../Images/RedDoritos.png",
  },
  {
    id: "B2",
    title: "Grinkles",
    price: 3.2,
    total: 5,
    src: "../Images/Grinkles.png",
  },
  {
    id: "C2",
    title: "BlueDoritos",
    price: 3.2,
    total: 10,
    src: "../Images/BlueDoritos.png",
  },
  {
    id: "D2",
    title: "Roysters",
    price: 4.6,
    total: 9,
    src: "../Images/Roysters.png",
  },
  {
    id: "E2",
    title: "Rizadas",
    price: 5.3,
    total: 10,
    src: "../Images/Rizadas.png",
  },
  {
    id: "A3",
    title: "RedPringles",
    price: 6.4,
    total: 3,
    src: "../Images/RedPringles.png",
  },
  {
    id: "B3",
    title: "GreenPringles",
    price: 6.4,
    total: 4,
    src: "../Images/GreenPringles.png",
  },
  {
    id: "C3",
    title: "BlackPringles",
    price: 6,
    total: 8,
    src: "../Images/BlackPringles.png",
  },
  {
    id: "D3",
    title: "OrangePringles",
    price: 3.5,
    total: 8,
    src: "../Images/OrangePringles.png",
  },
  {
    id: "E3",
    title: "Triscuit",
    price: 10.5,
    total: 10,
    src: "../Images/Triscuit.png",
  },
  {
    id: "A4",
    title: "Cokies",
    price: 4.9,
    total: 2,
    src: "../Images/Cokies.png",
  },
  {
    id: "B4",
    title: "Red m&m's",
    price: 4,
    total: 3,
    src: "../Images/RedMms.png",
  },
  {
    id: "C4",
    title: "Yellow m&m's",
    price: 4,
    total: 6,
    src: "../Images/YellowMms.png",
  },
  {
    id: "D4",
    title: "Skittles",
    price: 2,
    total: 8,
    src: "../Images/Skittles.png",
  },
  {
    id: "E4",
    title: "Haribo",
    price: 3,
    total: 7,
    src: "../Images/Haribo.png",
  },
  {
    id: "A5",
    title: "Nesquik",
    price: 3.5,
    total: 6,
    src: "../Images/Nesquik.png",
  },
  {
    id: "B5",
    title: "GoldGalaxy",
    price: 5.5,
    total: 6,
    src: "../Images/GoldGalaxy.png",
  },
  {
    id: "C5",
    title: "KinderEgg",
    price: 6.1,
    total: 4,
    src: "../Images/KinderEgg.png",
  },
  {
    id: "D5",
    title: "KinderChoclate",
    price: 4.2,
    total: 5,
    src: "../Images/KinderChoclate.png",
  },
  {
    id: "E5",
    title: "Ewedel",
    price: 6,
    total: 4,
    src: "../Images/Ewedel.png",
  },
];
const Machineinitialstate = {
  initialProducts: Products,
  insertedmoney: 0,
  insertednumber: "",
  screencontent: {
    p1: "",
    p2: "enter the product number",
    p3: "",
  },
};
const MachineSlice = createSlice({
  name: "userSlice",
  initialState: Machineinitialstate,
  reducers: {
    reset(state) {
      state.insertednumber = "";
      state.screencontent.p2 = "";
    },
    insertNumber(state, action) {
      state.insertednumber += action.payload;
      state.screencontent.p2 = state.insertednumber;
      state.screencontent.p1 = "";
      state.screencontent.p3 = "";
    },
    enterproductnumber(state, action) {
      state.screencontent.p1 = action.payload.P1;
      state.screencontent.p2 = action.payload.P2;
      state.screencontent.p3 = action.payload.P3;
    },
    clearScreen(state) {
      state.insertednumber = "";
      state.screencontent.p1 = "";
      state.screencontent.p2 = "";
      state.screencontent.p3 = "";
    },
    insertMoney(state, action) {
      state.screencontent.p1 = action.payload.P1;
      state.screencontent.p2 = action.payload.P2;
      state.screencontent.p3 = action.payload.P3;
    },
  },
});
const Store = configureStore({ reducer: MachineSlice.reducer });

export const MachineActions = MachineSlice.actions;
export default Store;
