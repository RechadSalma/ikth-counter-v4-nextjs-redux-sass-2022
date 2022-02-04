import { combineReducers } from "redux";
import { INCREMENT } from "../types";
import { DECREMENT } from "../types";
import { RESET } from "../types.js";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
  iKdummyReducer: () => "iK dummy reducer",
};

export default combineReducers(reducers);
