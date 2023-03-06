import React, {useState} from 'react';
import omit from "lodash";
import InputGroup from "../InputGroup";

const StudentForm = () => {
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    fName: "",
    lName: "",
    rollNo: "",

    streetAddress: "",
    city: "",
    state: "",
    pincode: "",

    group: "17",
    batchStartYear: 2020,
    batchEndYear: 2024,

    age: "",
    gender: "Male",
    bloodGroup: "A+",
  });

  const validate = (name, value) => {
    switch (name) {
      case "fName":
        if (!new RegExp(/^[a-zA-Z]+(?:(?:|['_. ])([a-zA-Z]*(\.\s)?[a-zA-Z])+)*$/).test(value)) {
          setErrors({
            ...errors, fName: "Enter a valid First name",
          });
        } else {
          let newObj = omit(errors, "fName");
          setErrors(newObj);
        }
        break;
      case "lName":
        if (!new RegExp(/^[a-zA-Z]+(?:(?:|['_. ])([a-zA-Z]*(\.\s)?[a-zA-Z])+)*$/).test(value)) {
          setErrors({
            ...errors, lName: "Enter a valid Last name",
          });
        } else {
          let newObj = omit(errors, "lName");
          setErrors(newObj);
        }
        break;
      case "rollNo":
        if (value.length > 10) {
          setErrors({
            ...errors, rollNo: 'Roll Number must be of 10 digits'
          });
        } else if (!new RegExp(/^[0-9]*$/).test(value)) {
          setErrors({
            ...errors, rollNo: "Enter a valid Roll Number",
          });
        } else {
          let newObj = omit(errors, "rollNo");
          setErrors(newObj);
        }
        break;

      case "city":
        if (!new RegExp(/^[a-zA-Z]{1,20}$/).test(value)) {
          setErrors({
            ...errors, city: "Enter a valid City Name",
          });
        } else {
          let newObj = omit(errors, "city");
          setErrors(newObj);
        }
        break;
      case "state":
        if (!new RegExp(/^[a-zA-Z]{1,20}$/).test(value)) {
          setErrors({
            ...errors, state: "Enter a valid City Name",
          });
        } else {
          let newObj = omit(errors, "state");
          setErrors(newObj);
        }
        break;
      case "pincode":
        if (value.length > 6) {
          setErrors({
            ...errors, pincode: 'Pincode must be of 6 digits only'
          });
        } else if (!new RegExp(/^[1-9][0-9]{5}$/).test(value)) {
          setErrors({
            ...errors, pincode: "Enter a valid Pincode",
          });
        } else {
          let newObj = omit(errors, "pincode");
          setErrors(newObj);
        }
        break;

      case "age":
        if (!new RegExp(/^[1-9][0-9]{0,2}$/).test(value)) {
          setErrors({
            ...errors, age: "Enter a valid Age",
          });
        } else {
          let newObj = omit(errors, "age");
          setErrors(newObj);
        }
        break;

      default:
        break;
    }
  };

  function handleChangeoption(event) {
    const {name, value} = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput, [name]: value,
      };
    });
  }

  function handleChange(event) {
    const {name, value} = event.target;

    validate(name, value);

    setInput((prevInput) => {
      return {
        ...prevInput, [name]: value,
      };
    });

    return {
      input, errors,
    };
  }


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
          <InputGroup
            label={'First Name'}
            name={'fName'}
            value={input.fName}
            handleChange={handleChange}
            errors={errors}
            error={errors.fName}
            required/>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-2">
          <InputGroup
            label={'Last Name'}
            name={'lName'}
            value={input.lName}
            handleChange={handleChange}
            errors={errors}
            error={errors.lName}
            required/>
        </div>
        <div className="w-full md:w-1/3 px-3">
          <InputGroup
            label={'Roll Number'}
            name={'rollNo'}
            value={input.rollNo}
            handleChange={handleChange}
            errors={errors}
            error={errors.rollNo}
            required/>
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <InputGroup
            className={'mb-3'}
            label={'Street Address'}
            name={'streetAddress'}
            value={input.streetAddress}
            handleChange={handleChange}
            required/>
          <p className="text-gray-600 text-xs italic">
            Note: Residential Address
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <InputGroup
            label={'City'}
            name={'city'}
            value={input.city}
            handleChange={handleChange}
            errors={errors}
            error={errors.city}
            required/>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <InputGroup
            label={'State'}
            name={'state'}
            value={input.state}
            handleChange={handleChange}
            errors={errors}
            error={errors.state}
            required/>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <InputGroup
            type={'number'}
            label={'Pincode'}
            name={'pincode'}
            value={input.pincode}
            handleChange={handleChange}
            errors={errors}
            error={errors.pincode}
            required/>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
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
          <InputGroup
            type={'number'}
            label={'Age'}
            name={'age'}
            value={input.age}
            handleChange={handleChange}
            errors={errors}
            error={errors.age}
            required/>
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
      </div>
      <div className="flex space-x-2 justify-center"></div>
    </div>
  );
};

export default StudentForm;