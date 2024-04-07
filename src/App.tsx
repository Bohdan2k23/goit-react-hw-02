// import css from "./App.module.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import { useState, useEffect } from "react";

const initialTypes = {
  good: 0,
  neutral: 0,
  bad: 0,
};
export type State = typeof initialTypes;

export type setTypes = React.Dispatch<React.SetStateAction<State>>;

export default function App() {
  const localKey = "feedbackKey";

  const [types, setTypes] = useState<State>(() => {
    const local = localStorage.getItem(localKey);
    return local ? JSON.parse(local) : initialTypes;
  });

  const [total, setTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem(localKey, JSON.stringify(types));
    setTotal(Object.values(types).reduce((a, b) => a + b));
  }, [types]);

  return (
    <>
      <Description />
      <Options
        setTypes={setTypes}
        initial={initialTypes}
        localKey={localKey}
        total={total}
      />
      {total > 0 ? <Feedback types={types} total={total} /> : <Notification />}
    </>
  );
}
