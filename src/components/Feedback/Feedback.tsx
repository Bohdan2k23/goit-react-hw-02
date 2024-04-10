import type { State } from "../../App";
import css from "./Feedback.module.css";

export default function Feedback({
  types,
  total,
  positive,
}: {
  types: State;
  total: number;
  positive: number;
}) {
  return (
    <ul className={css.feedback_list}>
      <li>Good: {types.good}</li>
      <li>Neutral: {types.neutral}</li>
      <li>Bad: {types.bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {total ? positive : 0}%</li>
    </ul>
  );
}
