import { IfFeedbackTrue } from './IfFeedbackTrue';
import { Notification } from './Notification';

export const Statistics = ({
  feedbackType,
  options,
  countTotalFeedback,
  positivePercentage,
}) => {
  return (
    <>
      <h2> Statistics</h2>
      {countTotalFeedback ? (
        <IfFeedbackTrue
          feedbackType={feedbackType}
          options={options}
          countTotalFeedback={countTotalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </>
  );
};
