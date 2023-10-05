import React from 'react';
import { FeedbackList } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <FeedbackList>
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total}</li>
    <li>Positive feedback: {positivePercentage} %</li>
  </FeedbackList>
);
