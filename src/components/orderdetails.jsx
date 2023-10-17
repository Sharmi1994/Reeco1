import React from "react";
import { FaAnchor,FaAmbulance, FaBeer, FaBabyCarriage, FaCamera, FaSchool}from  "react-icons/fa"

function Orderdetails(props) {
  return (
    <div className="container text-center supplierdetails">
      <div className="row align-items-center">
        <div className="col inner">
          supplier <br></br>
          <span className="supplydata">{props.supplierdata.supplier}</span>
        </div>
        <div className="col inner">
          Shipping Date<br></br>
          <span className="supplydata">{props.supplierdata.ShippingDate}</span>
        </div>
        <div className="col inner">
          Total<br></br>
          <span className="supplydata">{props.supplierdata.Total}</span>
        </div>
        <div className="col inner">
          Category<br></br>
          <span className="supplydata">

           <FaSchool  className="fonticon"/>
           <FaAmbulance className="fonticon"/>
           <FaBabyCarriage className="fonticon"/><br></br>
           <FaBeer className="fonticon"/>
           <FaCamera className="fonticon"/>
           <FaAnchor className="fonticon"/>
          </span>
        </div>
        <div className="col inner">
          Department<br></br>
          <span className="supplydata">{props.supplierdata.department}</span>
        </div>
        <div className="col inner">
          Status<br></br>
          <span className="supplydata">{props.supplierdata.Status}</span>
        </div>
      </div>
    </div>
  );
}

export default Orderdetails;
