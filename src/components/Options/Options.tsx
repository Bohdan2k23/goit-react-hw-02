import type { State, setTypes } from "../../App";
import css from "./Options.module.css";

export default function Options({
  setTypes,
  initial,
  localKey,
  total,
}: {
  setTypes: setTypes;
  initial: State;
  localKey: string;
  total: number;
}) {
  const reset = () => {
    localStorage.removeItem(localKey);
    setTypes(initial);
  };

  const update = (type: keyof State) => {
    return () =>
      setTypes((e) => ({
        ...e,
        [type]: e[type] + 1,
      }));
  };

  return (
    <div className={css.option_btns}>
      <button onClick={update("good")}>Good</button>
      <button onClick={update("neutral")}>Neutral</button>
      <button onClick={update("bad")}>Bad</button>
      {!!total && <button onClick={reset}>Reset</button>}
    </div>
  );
}
