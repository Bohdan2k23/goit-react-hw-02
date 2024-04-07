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
      <button className={css.option_btn} onClick={update("good")}>
        Good
      </button>
      <button className={css.option_btn} onClick={update("neutral")}>
        Neutral
      </button>
      <button className={css.option_btn} onClick={update("bad")}>
        Bad
      </button>
      {!!total && (
        <button className={css.option_btn} onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
}
