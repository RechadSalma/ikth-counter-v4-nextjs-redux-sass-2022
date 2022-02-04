import { INCREMENT } from "./types";
import { DECREMENT } from "./types";
import { RESET } from "./types";

export const incrementAction = () => ({ type: INCREMENT });

export const decrementAction = () => ({ type: DECREMENT });

export const resetAction = () => ({ type: RESET });
