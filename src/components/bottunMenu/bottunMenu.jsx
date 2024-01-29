import Styles from '../FeedBack/Feedback.module.css';

const FeedbackOptions = ({ option, onLeaveFeedback }) => {
  const bottunMe = option.map(name => (
    <button key={name} onClick={() => onLeaveFeedback(name)}>
      {name}
    </button>
  ));
  return (
    <>
      <div className={Styles.testmenu}>{bottunMe}</div>
    </>
  );
};

export default FeedbackOptions;
