const StatisticMenu = ({ Good, Neutral, Bad, PosFeedback, total }) => {
  return (
    <>
      <ul>
        <li>Good: {Good}</li>
        <li>Neutral: {Neutral}</li>
        <li>Bad: {Bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {PosFeedback}% </li>
      </ul>
    </>
  );
};
export default StatisticMenu;
