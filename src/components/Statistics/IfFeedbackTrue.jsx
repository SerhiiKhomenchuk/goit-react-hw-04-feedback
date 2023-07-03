import { StatItem } from './Statistics.styled';

export const IfFeedbackTrue = ({
  feedbackType,
  countTotalFeedback,
  positivePercentage,
}) => {
  return (
    <>
      {Object.entries(feedbackType).map(([key, value]) => {
        return (
          <StatItem key={key}>
            {key}: {value}
          </StatItem>
        );
      })}

      <StatItem>Total: {countTotalFeedback}</StatItem>
      <StatItem>Positive feedback: {positivePercentage}%</StatItem>
    </>
  );
};
