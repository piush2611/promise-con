import React, { useEffect, useState } from "react";

import Radio from "./Radio";

import { PROMISE_STATES } from "../constants/general";

const PromiseCard = (props) => {
  const { cardId, label, onFieldChange, data, showProgress, disable } =
    props;

  const { delay, promiseState } = data;

  const handleDelayChange = (e) => {
    onFieldChange({
      value: +e.target.value,
      cardId,
      id: "delay",
    });
  };

  const handleRadioChange = (e) => {
    onFieldChange({
      value: e.target.value,
      cardId,
      id: "promiseState",
    });
  };

  return (
    <div className="w-80 p-6 bg-white border border-gray-200 rounded-lg shadow m-2">
      <div className="mb-2 text-2xl font-semibold text-gray-900 text-left">
        {label}
      </div>
  
      <input
        className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 mb-3"
        placeholder="Delay"
        type="number"
        value={delay}
        onChange={handleDelayChange}
        disabled={disable}
      />
      <Radio
        label={"Resolve"}
        value={PROMISE_STATES.RESOLVED}
        checked={promiseState === PROMISE_STATES.RESOLVED}
        onChange={handleRadioChange}
        name={`${label}PromiseState`}
        containerClassName="text-left flex items-center mb-1"
        disabled={disable}
      />
      <Radio
        label={"Reject"}
        value={PROMISE_STATES.REJECTED}
        checked={promiseState === PROMISE_STATES.REJECTED}
        onChange={handleRadioChange}
        name={`${label}PromiseState`}
        containerClassName="text-left flex items-center mb-1"
        disabled={disable}
      />
    </div>
  );
};

export default PromiseCard;
