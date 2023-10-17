import React from "react";

import { FaAngleRight } from "react-icons/fa";

function OrderID() {
  return (
    
<div className="container-fluid" style={{marginTop:"60px"}}>
  <div className="row">
    <div className="col orderid">
    Orders
          <FaAngleRight className="orderidsymbol" />
          <span style={{ textDecoration: "underline" }}>Order32457ABC</span>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6 order">
    Order 32457ABC
    </div>
    <div className="col-md-6 approvebtn">
    <button  style={{marginRight:"20px", borderRadius:"30px"}} type="button" className="btn btn-outline-success">Back</button>
    <button  style={{borderRadius:"30px", backgroundColor:"darkgreen", color:"white"}}type="button" className="btn btn-outline-success">Approve Order</button>

    </div>
  </div>
</div>

  );
}

export default OrderID;

