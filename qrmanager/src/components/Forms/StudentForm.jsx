import React, {useState} from 'react';

const StudentForm = () => {
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
  
  return (
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
            {errors.firstName && (<div className=" md:w-auto text-red-500">
              {errors.firstName}
            </div>)}
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
            {errors.lastName && (<div className=" md:w-auto text-red-500">
              {errors.lastName}
            </div>)}
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
            {errors._id && (<div className=" md:w-auto text-red-500">
              {errors._id}
            </div>)}
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
            {errors.City && (<div className=" md:w-auto text-red-500">
              {errors.City}
            </div>)}
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
            <div
              className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
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
            {errors.pincode && (<div className=" md:w-auto text-red-500">
              {errors.pincode}
            </div>)}
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
            {errors.Age && (<div className=" md:w-auto text-red-500">
              {errors.Age}
            </div>)}
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
            <div
              className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
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
            {errors.ContactNumber && (<div className=" md:w-auto text-red-500">
              {errors.ContactNumber}
            </div>)}
          </div>
        </div>
      </div>
      <div className="flex space-x-2 justify-center"></div>
    </div>
  );
};

export default StudentForm;