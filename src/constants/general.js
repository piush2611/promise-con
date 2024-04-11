export const PROMISE_STATES = {
  REJECTED: "REJECTED",
  RESOLVED: "RESOLVED",
};

export const PROMISE_CARD_IDS = [
  "promise1",
  "promise2",
  "promise3",
  "promise4",
];

export const PROMISE_CARD_IDS_VS_LABEL = {
  promise1: "Promise 1",
  promise2: "Promise 2",
  promise3: "Promise 3",
  promise4: "Promise 4",
};

export const DEFAULT_PROMISE_DATA = {
  [PROMISE_CARD_IDS[0]]: {
    delay: 1,
    promiseState: PROMISE_STATES.RESOLVED,
    cardId: PROMISE_CARD_IDS[0],
  },
  [PROMISE_CARD_IDS[1]]: {
    delay: 1,
    promiseState: PROMISE_STATES.RESOLVED,
    cardId: PROMISE_CARD_IDS[1],
  },
  [PROMISE_CARD_IDS[2]]: {
    delay: 1,
    promiseState: PROMISE_STATES.RESOLVED,
    cardId: PROMISE_CARD_IDS[2],
  },
  [PROMISE_CARD_IDS[3]]: {
    delay: 1,
    promiseState: PROMISE_STATES.RESOLVED,
    cardId: PROMISE_CARD_IDS[3],
  },
};

export const PROMISE_TYPES = {
  PROMISE_ANY: "PROMISE_ANY",
  PROMISE_ALL: "PROMISE_ALL",
  PROMISE_ALL_SETTLED: "PROMISE_ALL_SETTLED",
  PROMISE_RACE: "PROMISE_RACE",
};

export const PROMISE_TYPES_VS_FUNC = {
  [PROMISE_TYPES.PROMISE_ANY]: Promise.any.bind(Promise),
  [PROMISE_TYPES.PROMISE_ALL]: Promise.all.bind(Promise),
  [PROMISE_TYPES.PROMISE_ALL_SETTLED]: Promise.allSettled.bind(Promise),
  [PROMISE_TYPES.PROMISE_RACE]: Promise.race.bind(Promise),
};

export const PROMISE_TYPE_VS_DESC = {
    [PROMISE_TYPES.PROMISE_ALL]: "The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.",
    [PROMISE_TYPES.PROMISE_ANY]: "The Promise.any() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.",
    [PROMISE_TYPES.PROMISE_ALL_SETTLED]: "The Promise.allSettled() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), with an array of objects that describe the outcome of each promise.",
    [PROMISE_TYPES.PROMISE_RACE]: "The Promise.race() static method takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles.",
}