import React from "react";
import { FaPrint, FaCheck, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

function Ordersupply(props) {
  const [values, setValues] = useState([]);

  useEffect(() => {
    setValues(props.itemdetails);
  }, [props.itemdetails]);

  console.log(values);

  return (
    <div className="container text-center supplydetails">
      <div className="row srchAddItm">
        <div className="col-md-6 input-group rounded">
          <input
            type="search"
            className="form-control rounded icon-rtl"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
        </div>
        <div
          className="col-md-6 "
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <div className="col-sm approvebtn">
            <button
              style={{ marginRight: "20px", borderRadius: "30px" }}
              type="button"
              className="btn btn-outline-success"
            >
              Add item
            </button>

            <FaPrint className="print" />
          </div>
        </div>
      </div>
      {/* item detailss */}
      <table className="table" style={{ marginTop: "15px" }}>
        <thead>
          <tr>
            <th className="tablefont" scope="col">
              ProductName
            </th>
            <th className="tablefont" scope="col">
              Brand
            </th>
            <th className="tablefont" scope="col">
              Price
            </th>
            <th className="tablefont" scope="col">
              Quantity
            </th>
            <th className="tablefont" scope="col">
              Total
            </th>
            <th className="tablefont" scope="col">
              Status
            </th>
            <th className="tablefont" scope="col"></th>
            <th className="tablefont" scope="col"></th>
            <th className="tablefont" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {values.map((val) => {
            return (
              <tr>
                <th className="tablefont" style={{width:"300px"}} scope="col">
                  <img src={val.Img} alt="alt.img" className="avacado" />
                  {val.ProductName}
                </th>
                <th className="tablefont" scope="col">
                  {val.Brand}
                </th>
                <th className="tablefont" scope="col">
                  {val.Price}
                </th>
                <th className="tablefont" scope="col">
                  {val.Quantity}
                </th>
                <th className="tablefont" scope="col">
                  {val.Total}
                </th>
                <th className="tablefont" scope="col">
                  {val.Status}
                </th>
                <th scope="col">
                  <FaCheck className="tablefont" />
                </th>
                <th scope="col">
                  <FaTimes className="tablefont" />
                </th>
                <th scope="col">
                  <button className="tablefont"> Edit</button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Ordersupply;
