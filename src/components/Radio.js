import React from "react";

const Radio = (props) => {
  const { label, value, checked, onChange, name, containerClassName, disabled } = props;
  return (
    <div className={containerClassName}>
      <input
        className="h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
        name={name}
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label className="text-sm font-medium text-gray-900 mx-2">{label}</label>
    </div>
  );
};

export default Radio;
