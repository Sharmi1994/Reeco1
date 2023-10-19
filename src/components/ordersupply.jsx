import React, { useEffect, useState } from "react";
import { FaPrint, FaCheck, FaTimes } from "react-icons/fa";

function Ordersupply(props) {
   
  const [values, setValues] = useState([]);
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    setValues(props.itemdetails);
  }, [props.itemdetails]);

  function handlePlaceEvent(id, isFAcheck) {
    const currentDate=new Date()
    let ShippingDate=new Date(props.supplierdata.ShippingDate)

   if(ShippingDate>currentDate){
    const updatedValues = [...values];
    const itemIndex = updatedValues.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      //check if the element available in the array
      updatedValues[itemIndex].Status =
        isFAcheck === 0
          ? "Order Approved"
          : isFAcheck === 2
          ? "Missing"
          : isFAcheck === 3
          ? "Missing-Urgent"
          : updatedValues[itemIndex].Status; //if facheck is not =0,2,3 then no change in the content

      setValues(updatedValues);
     
    }
   }
   else{
    alert("Date Expired")
   }

   
    
  }

  function getButtonClass(status) {
    switch (status) {
      case "Order Approved":
        return "buttonApproved";

      case "Missing":
        return "buttonMissing";

      case "Missing-Urgent":
        return "buttonUrgent";
      default:
        return "null";
    }
  }

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
          {values.map((val, index) => {
            const modalId = `exampleModalCenter${index}`; // Unique modal ID
            return (
              <tr key={val.id}>
                <th
                  className="tablefont"
                  style={{ width: "300px" }}
                  scope="col"
                >
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
                <th
                  className={`tablefont ${getButtonClass(val.Status)}`}
                  scope="col"
                >
                  {val.Status}
                </th>
                <th scope="col">
                  <FaCheck
                    className="tablefont"
                    onClick={() => handlePlaceEvent(val.id, 0)}
                  />
                </th>

                <th scope="col">
                  <FaTimes
                    className="tablefont"
                    data-toggle="modal"
                    data-target={`#${modalId}`}
                  />

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id={modalId}
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="exampleModalLongTitle"
                          >
                            Mising Product
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          Is "Chicken Breast fillets,Boneless....urgent?"
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-light"
                            data-dismiss="modal"
                            onClick={() => handlePlaceEvent(val.id, 2)}
                          >
                            No
                          </button>
                          <button
                            type="button"
                            className="btn btn-light"
                            data-dismiss="modal"
                            onClick={() => handlePlaceEvent(val.id, 3)}
                          >
                            Yes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </th>
                <th scope="col">
                  <button
                    type="button"
                    // data-toggle="modal"
                    // data-target="#exampleModalCenter"
                    className="btn btn-light"
                  >
                    {" "}
                    Edit
                  </button>
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
