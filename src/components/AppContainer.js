import React, { useState } from "react";
import PromiseCard from "./PromiseCard";
import {
  DEFAULT_PROMISE_DATA,
  PROMISE_CARD_IDS,
  PROMISE_CARD_IDS_VS_LABEL,
  PROMISE_STATES,
  PROMISE_TYPES,
  PROMISE_TYPES_VS_FUNC,
  PROMISE_TYPE_VS_DESC,
} from "../constants/general";

const AppContainer = () => {
  const [promiseData, setPromiseData] = useState(DEFAULT_PROMISE_DATA);
  const [result, setResult] = useState("");
  const [promiseType, setPromiseType] = useState(PROMISE_TYPES.PROMISE_ALL);
  const [disable, setDisable] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressSteps, setProgressSteps] = useState([]);

  const handleOnChange = (data) => {
    const { value, id, cardId } = data;

    setPromiseData((prevData) => ({
      ...prevData,
      [cardId]: {
        ...prevData[cardId],
        [id]: value,
      },
    }));
  };

  const handleStart = async () => {
    setProgress(0);
    setProgressSteps([]);
    setResult("");
    setDisable(true);

    const interValId = setInterval(() => {
      setProgress((prev) => (prev += 1));
    }, 100);

    setProgressSteps((prev) => [...prev, `Started ${new Date().toString()}`]);

    let _result;
    const promises = Object.values(promiseData).map((data) => {
      const { delay, promiseState, cardId } = data;
      return new Promise((res, rej) => {
        const isStateResolved = promiseState === PROMISE_STATES.RESOLVED;
        const cb = isStateResolved ? res : rej;
        setTimeout(() => {
          const finalState = isStateResolved ? "Resolved" : "Rejected";
          cb(`${PROMISE_CARD_IDS_VS_LABEL[cardId]} ${finalState}`);
        }, delay * 1000);
      });
    });

    try {
      const func = PROMISE_TYPES_VS_FUNC[promiseType];
      _result = await func(promises);
    } catch (error) {
      if (error?.message) _result = error?.message;
      else _result = error;
    } finally {
      clearInterval(interValId);
    }

    _result = JSON.stringify(_result, null, 4);

    setProgressSteps((prev) => [...prev, `Ended ${new Date().toString()}`]);

    setResult(_result);
    setDisable(false);
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight + 100,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-5/6 mx-auto text-center mb-5">
      <div className="flex justify-between items-center">
        <h1 className="text-sm sm:text-xl font-bold underline my-4 md:text-3xl">
          Promise Concurrency
        </h1>
        <div className="flex items-center">
          <div className="hidden md:block text-gray mx-2">
            Made with 💙 By Piyush
          </div>
          <a className="my-4 font-bold" href="">
            Github
          </a>
        </div>
      </div>
      <select
        className="rounded-md bg-gray border border-gray-400 px-2 py-1 mx-4 w-60"
        onChange={(e) => {
          setPromiseType(e.target.value);
          setResult("");
          setProgressSteps([]);
        }}
        value={promiseType}
        disabled={disable}
      >
        <option
          className="text-gray-700 block px-4 py-2 text-sm"
          value={PROMISE_TYPES.PROMISE_ANY}
        >
          Promise.any
        </option>
        <option
          className="text-gray-700 block px-4 py-2 text-sm"
          value={PROMISE_TYPES.PROMISE_ALL}
        >
          Promise.all
        </option>
        <option
          className="text-gray-700 block px-4 py-2 text-sm"
          value={PROMISE_TYPES.PROMISE_ALL_SETTLED}
        >
          Promise.allSettled
        </option>
        <option
          className="text-gray-700 block px-4 py-2 text-sm"
          value={PROMISE_TYPES.PROMISE_RACE}
        >
          Promise.race
        </option>
      </select>

      <button
        className="bg-blue-600 px-3 text-white py-1 rounded hover:bg-blue-500 shadow-lg font-semibold"
        disabled={disable}
        onClick={handleStart}
      >
        Start
      </button>

      <div className="font-normal text-gray-500 my-2">
        {PROMISE_TYPE_VS_DESC[promiseType]}
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-5 w-2/3 mx-auto">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: progress }}
        ></div>
      </div>

      <div className="flex flex-wrap justify-center mt-4">
        {PROMISE_CARD_IDS.map((cardId) => (
          <PromiseCard
            key={cardId}
            cardId={cardId}
            label={PROMISE_CARD_IDS_VS_LABEL[cardId]}
            onFieldChange={handleOnChange}
            data={promiseData[cardId]}
            disable={disable}
          />
        ))}
      </div>

      {progressSteps.map((stepMsg) => (
        <div className="text-gray-800 text-lg my-2">{stepMsg}</div>
      ))}

      <code className="mt-2 w-5/6 block mx-auto text-lg font-normal text-gray-500 ">
        {result}
      </code>
    </div>
  );
};

export default AppContainer;
