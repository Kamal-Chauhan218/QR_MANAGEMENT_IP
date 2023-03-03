import React, { useState, useEffect } from "react";
import Pincode from "react-pincode";

function Test() {
  const [pincodeData, setPincodeData] = useState("");
  console.log(pincodeData);
  return (
    <div className="App">
      <Pincode
        invalidError="Please check pincode"
        lengthError="check length"
        cityInput={{ width: "200px" }}
        getData={(data) => setPincodeData(data)}
      />
    </div>
  );
}
export default Test;
