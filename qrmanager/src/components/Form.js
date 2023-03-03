import React, { useState } from "react";
import "./style/home.css";
import Axios from "axios";
import omit from "lodash";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Form() {
  const [errors, setErrors] = useState({});
  const [check, setcheck] = useState();
  const validate = (event, name, value) => {
    //A function to validate each input values

    switch (name) {
      // case "username":
      //   if (value.length <= 4) {
      //     // we will set the error state

      //     setErrors({
      //       ...errors,
      //       username: "Username atleast have 5 letters",
      //     });
      //   } else {
      //     // set the error state empty or remove the error for username input

      //     //omit function removes/omits the value from given object and returns a new object
      //     let newObj = omit(errors, "username");
      //     setErrors(newObj);
      //   }
      //   break;

      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter a valid email address",
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;
      case "firstName":
        if (!new RegExp(/^[a-zA-Z]+(?:(?:|['_\. ])([a-zA-Z]*(\.\s)?[a-zA-Z])+)*$/).test(value)) {
          setErrors({
            ...errors,
            firstName: "Enter a valid First name",
          });
        } else {
          let newObj = omit(errors, "firstName");
          setErrors(newObj);
        }
        break;
      case "lastName":
        if (!new RegExp(/^[a-zA-Z]+(?:(?:|['_\. ])([a-zA-Z]*(\.\s)?[a-zA-Z])+)*$/).test(value)) {
          setErrors({
            ...errors,
            lastName: "Enter a valid Last name",
          });
        } else {
          let newObj = omit(errors, "lastName");
          setErrors(newObj);
        }
        break;
      case "_id":
        if (!new RegExp(/^[0-9]*$/).test(value)) {
          setErrors({
            ...errors,
            _id: "Enter a valid RollNumber",
          });
        } else {
          let newObj = omit(errors, "_id");
          setErrors(newObj);
        }
        break;
      case "City": {
        if (!new RegExp(/^[a-zA-Z]{1,20}$/).test(value)) {
          setErrors({
            ...errors,
            City: "Enter a valid City Name",
          });
        } else {
          let newObj = omit(errors, "City");
          setErrors(newObj);
        }
        break;
      }
      case "Age": {
        if (!new RegExp(/^[1-9][0-9]{0,2}$/).test(value)) {
          setErrors({
            ...errors,
            Age: "Enter a valid Age",
          });
        } else {
          let newObj = omit(errors, "Age");
          setErrors(newObj);
        }
        break;
      }
      case "Pincode": {
        if (!new RegExp(/^[1-9][0-9]{5}$/).test(value)) {
          setErrors({
            ...errors,
            pincode: "Enter a valid Pincode",
          });
        } else {
          let newObj = omit(errors, "Pincode");
          setErrors(newObj);
        }
        break;
      }
      case "ContactNumber":
        if (
          !new RegExp(
            /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            ContactNumber: "Enter a valid contact number",
          });
        } else {
          let newObj = omit(errors, "ContactNumber");
          setErrors(newObj);
        }
        break;
      case "FatherName": {
        if (!new RegExp(/^[a-zA-Z]+(?:(?:|['_\. ])([a-zA-Z]*(\.\s)?[a-zA-Z])+)*$/).test(value)) {
          setErrors({
            ...errors,
            FatherName: "Enter a valid FatherName ",
          });
        } else {
          let newObj = omit(errors, "FatherName");
          setErrors(newObj);
        }
        break;
      }
      case "MotherName": {
        if (!new RegExp(/^[a-zA-Z]+(?:(?:|['_\. ])([a-zA-Z]*(\.\s)?[a-zA-Z])+)*$/).test(value)) {
          setErrors({
            ...errors,
            MotherName: "Enter a valid MotherName ",
          });
        } else {
          let newObj = omit(errors, "MotherName");
          setErrors(newObj);
        }
        break;
      }
      case "FatherNumber":{
        if (
          !new RegExp(
            /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            FatherNumber: "Enter a valid FatherNumber",
          });
        } else {
          let newObj = omit(errors, "FatherNumber");
          setErrors(newObj);
        }
        break;
      }
      case "MotherNumber":{
        if (
          !new RegExp(
            /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            MotherNumber: "Enter a valid FatherNumber",
          });
        } else {
          let newObj = omit(errors, "MotherNumber");
          setErrors(newObj);
        }
        break;
      }
      case "SchoolNumber":{
        if (
          !new RegExp(
            /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            SchoolNumber: "Enter a valid FatherNumber",
          });
        } else {
          let newObj = omit(errors, "SchoolNumber");
          setErrors(newObj);
        }
        break;
      }
      // case "password":
      //   if (
      //     !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
      //   ) {
      //     setErrors({
      //       ...errors,
      //       password:
      //         "Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers",
      //     });
      //   } else {
      //     let newObj = omit(errors, "password");
      //     setErrors(newObj);
      //   }
      //   break;

      default:
        break;
    }
  };
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
    BloodGroup: "A+",
  });
  function handleChangeoption(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }
  function handleChange(event) {
    const { name, value } = event.target;
    validate(event, name, value);
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    return {
      input,
      errors,
      handleChange,
    };
  }

  function clearState() {
    console.log("Clear");
    setInput({
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
      BloodGroup: "A+",
    });
  }

  async function handleClick(e) {
    if (e) e.preventDefault();
    const data = {
      email: input.email,
      password: input.password,
      firstName: input.firstName,
      lastName: input.lastName,
      _id: input._id,
      CurrentAddress: input.CurrentAddress,
      City: input.City,
      classNames: input.classNames,
      Pincode: input.Pincode,
      Age: input.Age,
      Gender: input.Gender,
      ContactNumber: input.ContactNumber,
      FatherName: input.FatherName,
      MotherName: input.MotherName,
      ResidentialAddress: input.ResidentialAddress,
      FatherNumber: input.FatherNumber,
      MotherNumber: input.MotherNumber,
      SchoolName: input.SchoolName,
      SchoolNumber: input.SchoolNumber,
      SchoolAddress: input.SchoolAddress,
      PoliceStationName: input.PoliceStationName,
      PoliceStationAddress: input.PoliceStationAddress,
      BloodGroup: input.BloodGroup,
    };

    var count = 0;
    Object.entries(data).forEach((entry) => {
      const [key, value] = entry;
      if (value != "") {
        count += 1;
      }
    });

    if (Object.keys(errors).length === 5 && count == 23) {
      console.log(Object.keys(input).length);
      Axios.post(`http://localhost:3001/api/v1/`, data).then(clearState());
    } else {
      alert("There is an Error!");
    }
  }
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <section className="text-gray-600 body-font">
        <main>
          <Carousel responsive={responsive}>
            <div>
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                  Get Your Student Record Save With Us
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  We the Team EduSpark providing your the best plathtmlForm to
                  store your student record in just qr and fetch it from
                  anywhere by scanning the qr from any of your phone.
                </p>
              </div>
              <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div className="relative flex-grow w-full">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={input.email}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative flex-grow w-full">
                  <label
                    htmlFor="password"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={input.password}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                {/* <button
                onClick={goNext}
                className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Register
              </button> */}
              </div>
              {errors.email && (
                <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                  {errors.email}
                </div>
              )}
              {errors.password && (
                <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                  {errors.password}
                </div>
              )}
            </div>

            {/* DIV -----2 */}

            <div>
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                  Student Details
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/3 px-3 mb-2 ">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-first-name"
                    type="text"
                    name="firstName"
                    value={input.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Kamal"
                  />
                  <div>
                    {errors.firstName && (
                      <div className=" md:w-auto text-red-500">
                        {errors.firstName}
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-2">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    name="lastName"
                    value={input.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Chauhan"
                  />
                  <div>
                    {errors.lastName && (
                      <div className=" md:w-auto text-red-500">
                        {errors.lastName}
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Roll Number
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="number"
                    required
                    name="_id"
                    value={input._id}
                    onChange={handleChange}
                    placeholder="2010******"
                    min="1"
                  />
                  <div>
                    {errors._id && (
                      <div className=" md:w-auto text-red-500">
                        {errors._id}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* <div className="flex flex-wrap -mx-3 mb-6">
             
              {errors.lastName && (
                 <div className=" md:w-1/3 px-3" >
                  {errors.lastName}
                </div>
              )}
              </div> */}

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Home Address
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    name="CurrentAddress"
                    value={input.CurrentAddress}
                    onChange={handleChange}
                    placeholder="Address"
                  />
                  <p className="text-gray-600 text-xs italic">
                    Note: Residential Address
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-city"
                  >
                    City
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="text"
                    name="City"
                    value={input.City}
                    onChange={handleChange}
                    placeholder="Varanasi"
                  />
                  <div>
                    {errors.City && (
                      <div className=" md:w-auto text-red-500">
                        {errors.City}
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-state"
                  >
                    class
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="classNames"
                      name="classNames"
                      value={input.classNames}
                      onChange={handleChangeoption}
                    >
                      <option value="1st class">1st class</option>
                      <option value="2nd class">2nd class</option>
                      <option value="3rd class">3rd class</option>
                      <option value="4th class">4th class</option>
                      <option value="5th class">5th class</option>
                      <option value="6th class">6th class</option>
                      <option value="7th class">7th class</option>
                      <option value="8th class">8th class</option>
                      <option value="9th class">9th class</option>
                      <option value="10th class">10th class</option>
                      <option value="11th class">11th class</option>
                      <option value="12th class">12th class</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-zip"
                  >
                    PinCode
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-zip"
                    type="Number"
                    name="Pincode"
                    value={input.Pincode}
                    onChange={handleChange}
                    placeholder="221005"
                  />
                  <div>
                    {errors.pincode && (
                      <div className=" md:w-auto text-red-500">
                        {errors.pincode}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-city"
                  >
                    Age
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="number"
                    name="Age"
                    value={input.Age}
                    onChange={handleChange}
                    placeholder="18"
                  />
                  <div>
                    {errors.Age && (
                      <div className=" md:w-auto text-red-500">
                        {errors.Age}
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-state"
                  >
                    Gender
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      name="Gender"
                      value={input.Gender}
                      onChange={handleChangeoption}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-zip"
                  >
                    Contact Number
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-zip"
                    type="Number"
                    name="ContactNumber"
                    value={input.ContactNumber}
                    onChange={handleChange}
                    placeholder="9425******"
                  />
                  <div>
                    {errors.ContactNumber && (
                      <div className=" md:w-auto text-red-500">
                        {errors.ContactNumber}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex space-x-2 justify-center"></div>
            </div>

            {/* DIV---3 */}

            <div>
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                  Parent's Details
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Father Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    name="FatherName"
                    value={input.FatherName}
                    onChange={handleChange}
                    placeholder="User Father Name"
                  />
                  <div>
                    {errors.FatherName && (
                      <div className=" md:w-auto text-red-500">
                        {errors.FatherName}
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Mother Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    name="MotherName"
                    value={input.MotherName}
                    onChange={handleChange}
                    placeholder="User Mother Name"
                  />
                   <div>
                    {errors.MotherName && (
                      <div className=" md:w-auto text-red-500">
                        {errors.MotherName}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Residential Address
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    name="ResidentialAddress"
                    value={input.ResidentialAddress}
                    onChange={handleChange}
                    placeholder="Address"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Father's Contact Number
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="Number"
                    name="FatherNumber"
                    value={input.FatherNumber}
                    onChange={handleChange}
                    placeholder="9425******"
                  />
                   <div>
                    {errors.FatherNumber && (
                      <div className=" md:w-auto text-red-500">
                        {errors.FatherNumber}
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-zip"
                  >
                    Mother's Contact Number
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-zip"
                    type="Number"
                    name="MotherNumber"
                    value={input.MotherNumber}
                    onChange={handleChange}
                    placeholder="9425******"
                  />
                  <div>
                    {errors.MotherNumber && (
                      <div className=" md:w-auto text-red-500">
                        {errors.MotherNumber}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex space-x-2 justify-center"></div>
            </div>

            {/* DIV 4 */}

            <div>
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                  School Details and Other Details
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    School Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    value={input.SchoolName}
                    name="SchoolName"
                    onChange={handleChange}
                    placeholder="School Name"
                  />
                 
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    School Contact Number
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    name="SchoolNumber"
                    value={input.SchoolNumber}
                    onChange={handleChange}
                    placeholder="0755-4****"
                  />
                   <div>
                    {errors.SchoolNumber && (
                      <div className=" md:w-auto text-red-500">
                        {errors.SchoolNumber}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    School Address
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    name="SchoolAddress"
                    value={input.SchoolAddress}
                    onChange={handleChange}
                    placeholder="Address"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-city"
                  >
                    Police Station Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    name="PoliceStationName"
                    value={input.PoliceStationName}
                    onChange={handleChange}
                    placeholder="Police"
                  />
                </div>

                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-zip"
                  >
                    Police Station Address
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-zip"
                    type="text"
                    name="PoliceStationAddress"
                    value={input.PoliceStationAddress}
                    onChange={handleChange}
                    placeholder="Address"
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-state"
                  >
                    Blood Group
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      name="BloodGroup"
                      value={input.BloodGroup}
                      onChange={handleChangeoption}
                    >
                      <option value="A Positive">A+</option>
                      <option value="A Negative">A-</option>
                      <option value="B Positive">B+</option>
                      <option value="B Negative">B-</option>
                      <option value="AB Positive">AB+</option>
                      <option value="AB Negative">AB-</option>
                      <option value="O Positive">O+</option>
                      <option value="O Negative">O-</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2 justify-center"></div>
              <button
                className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                value="Register"
                onClick={handleClick}
              >
                Register
              </button>
            </div>
          </Carousel>
        </main>
      </section>
    </div>
  );
}

export default Form;
