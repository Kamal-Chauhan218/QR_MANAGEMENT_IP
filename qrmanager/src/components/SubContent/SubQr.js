import React from "react";
import Axios from "axios";
import { saveAs } from "file-saver";

import { useState } from "react";
function SubQr() {
  const downloadImage = () => {
    var x = document.getElementsByClassName("qr-code");
    var src = x[0].src;

    saveAs(`${src}`, `${RollNumber}.jpg`); // Put your image url here.
  };
  const [RollNumber, setRollNumber] = useState("2010991907");
  const [input, setInput] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    _id: "",
    CurrentAddress: "",
    City: "",
    classNames: "1st Class",
    Pincode: "",
    Age: "",
    Gender: "Male",
    ContactNumber: "",
    FatherName: "",
    MotherName: "",
    ResidentialAddress: "",
    FatherNumber: "",
    MotherNumber: "",
    SchoolName: "",
    SchoolNumber: "",
    SchoolAddress: "",
    PoliceStationName: "",
    PoliceStationAddress: "",
    BloodGroup: "",
  });
  const changeRollNumber = async () => {
    const response = await Axios(
      `http://localhost:3001/api/v1/alldata/${RollNumber}`
    );
    setInput(response.data.data);
    console.log(response);
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <img
          src={`https://chart.googleapis.com/chart?cht=qr&chl=+'%0D'
          Email+:${input.email}+'%0A'+
		      Password: +${input.password}+'%0A'+
      First Name: +${input.firstName}+'%0A'+
      Last Name: +${input.lastName}+'%0A'+
      Roll Number:+ ${input._id}+'%0A'+
      Home Address:+ ${input.CurrentAddress}+'%0A'+
      City:+ ${input.City}+'%0A'+
      Class Name:+ ${input.classNames}+'%0A'+
      Pincode:+ ${input.Pincode}+'%0A'+
      Age:+ ${input.Age}+'%0A'+
      Gender:+ ${input.Gender}+'%0A'+
      Father Name:+ ${input.FatherName}+'%0A'+
      Mother Name:+ ${input.MotherName}+'%0A'+
      Resendential Address:+ ${input.ResidentialAddress}+'%0A'+
      Father Contact Number:+ ${input.FatherNumber}+'%0A'+
      Mother Contact Number:+ ${input.MotherNumber}+'%0A'+
      School Name:+ ${input.SchoolName}+'%0A'+
      School Contact:+ ${input.SchoolNumber}+'%0A'+
      School Address:+ ${input.SchoolAddress}+'%0A'+
      Police Station Name:+ ${input.PoliceStationName}+'%0A'+
      Police Station Address:+ ${input.PoliceStationAddress}+'%0A'+
      Blood Group:+  ${input.BloodGroup}+'%0A'+
		  +&chs=260x260&chld=L|0`}
          class="qr-code img-thumbnail img-responsive"
          id="picture"
          alt="xyz"
        />
        <div className=" lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Get Your QR In Easy Way...
          </h1>
          <div className="mb-6">
            <label
              htmlFor="default-input"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Enter Your Roll Number
            </label>
            <input
              type="Number"
              id="default-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={RollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
            />
          </div>
          {/* <div>
         { comments.map((comment, index) =>(
           <div>{comment.data.Age}</div>
         ))}
          </div> */}
          <div className="flex justify-center">
            <button
              onClick={changeRollNumber}
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Generate
            </button>
            <button
              onClick={downloadImage}
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubQr;
