import useCounter from "./UseCounter";
import useToggle from "./UseToggle";

export default function useCounterWithToggle() {
  const { count, increment, decrement } = useCounter();
  const [isOn, toggle] = useToggle();

  return {
    count,
    increment,
    decrement,
    isOn,
    toggle,
  };
}
