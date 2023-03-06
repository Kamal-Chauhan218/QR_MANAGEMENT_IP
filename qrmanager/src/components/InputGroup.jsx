import React from "react";

const InputGroup = (
  {
    label,
    type = 'text',
    className,
    name,
    value,
    handleChange,
    required = false,
    errors,
    error
  }) => {
  const id = `id-${name}`

  return (<>
    <label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'} htmlFor={id}>{label}</label>
    <input
      className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${className}`}
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={(event) => handleChange(event)}
      required={required}/>

    {errors && <div>
      {error && (<div className=" md:w-auto text-red-500">
        {error}
      </div>)}
    </div>}
  </>)
}

export default InputGroup;