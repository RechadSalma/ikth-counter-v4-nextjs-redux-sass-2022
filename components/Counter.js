import sass from "../styles/Counter.module.scss";
import { useSelector, useDispatch } from "react-redux";

import { incrementAction } from "../redux/actions";
import { decrementAction } from "../redux/actions";
import { resetAction } from "../redux/actions.js";

export default function Counter(props) {
  const counterNumber = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  console.log(counterNumber);

  const incrementAC = () => {
    dispatch(incrementAction());
  };

  const decrementAC = () => dispatch(decrementAction());

  const resetAC = () => {
    dispatch(resetAction());
  };

  return (
    <div className={sass.counter}>
      <div className={sass.counterNumber}>{counterNumber}</div>
      <ul>
        <li>
          <button type="button" onClick={incrementAC}>
            increment
          </button>
        </li>
        <li>
          <button type="button" onClick={decrementAC}>
            decrement
          </button>
        </li>
        <li>
          <button type="button" onClick={resetAC}>
            reset
          </button>
        </li>
      </ul>
    </div>
  );
}
