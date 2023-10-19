import React from "react";
function QuantityChange() {
  return (
    <div style={{display:"flex"}}>
      <div>
        {" "}
        <img
          src="https://media.istockphoto.com/id/94929126/photo/avocados-isolated-on-white.jpg?s=612x612&w=0&k=20&c=c0BSuWnUTAkZyj-cYHKzR5dXtZWQ1_3PXcea3M92Z4I="
          alt="avd.png"
          style={{height:"100px", width:"100px"}}
        />
      </div>
      <div>
        <div className="incrementqty">Price   <div ><input className="inputtext" type="text"/></div></div>
        <div className="incrementqty">Quantity   <div><input  className="inputtext" type="text"/>  </div></div>
        <div className="incrementqty">Total   <div><input  className="inputtext" type="text"/></div></div>
      </div>
     
    </div>
  );
}
export default QuantityChange;
