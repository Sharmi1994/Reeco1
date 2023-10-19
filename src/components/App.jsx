import React, { useEffect, useState } from "react";
import data from "../supplierdetail";
import Navbar from "./Navbar";
import OrderID from "./OrderId";
import Orderdetails from "./orderdetails";
import Ordersupply from "./ordersupply";
import data2 from "../itemdetails";

function App() {
  

  return (
    <div>
      <Navbar /> <br></br>
      <OrderID />
      <hr></hr>
      <Orderdetails supplierdata={data} />
      <br></br>
      <Ordersupply itemdetails={data2}  supplierdata={data}/>
      <hr></hr>
    </div>
  );
}

export default App;
