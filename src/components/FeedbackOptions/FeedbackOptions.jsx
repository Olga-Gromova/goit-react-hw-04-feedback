import { useState } from 'react';

import { Section } from './Feedback.styled';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Button } from 'components/Buttons/Buttons';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedback = { good, neutral, bad };

  const onLeaveFeedback = index => {
    switch (index) {
      case 0:
        setGood(prevState => prevState + 1);
        break;
      case 1:
        setNeutral(neutral + 1);
        break;
      case 2:
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const keys = Object.keys(feedback);
  const totalCount = countTotalFeedback();

  return (
    <Section>
      <h1>Please leave feedback</h1>

      <Button keys={keys} onLeaveFeedback={onLeaveFeedback} />
      <div>
        <h2>Statistics</h2>

        {totalCount === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalCount}
            positivePercentage={positivePercentage()}
          />
        )}
      </div>
    </Section>
  );
}
