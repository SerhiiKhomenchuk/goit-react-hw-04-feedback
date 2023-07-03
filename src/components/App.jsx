import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackType = { good, neutral, bad };

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const values = Object.values(feedbackType);
    return values.reduce((accumulator, current) => accumulator + current, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    let percentage = countTotalFeedback()
      ? ((good / countTotalFeedback()) * 100).toFixed(0)
      : 0;
    return percentage;
  };

  const options = Object.keys(feedbackType);

  return (
    <div
      style={{
        height: 'auto',
        display: 'block',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        marginLeft: 40,
      }}
    >
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      <Statistics
        feedbackType={feedbackType}
        countTotalFeedback={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      ></Statistics>
    </div>
  );
};

export default App;
