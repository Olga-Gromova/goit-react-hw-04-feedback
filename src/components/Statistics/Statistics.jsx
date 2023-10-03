import React from 'react';
import { FeedbackList, FeedbackListItem } from './Statistics.styled';


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <FeedbackList>
    <FeedbackListItem>Good: {good}</FeedbackListItem>
    <FeedbackListItem>Neutral: {neutral}</FeedbackListItem>
    <FeedbackListItem>Bad: {bad}</FeedbackListItem>
    <FeedbackListItem>Total: {total}</FeedbackListItem>
    <FeedbackListItem>
      Positive feedback: {positivePercentage} %
    </FeedbackListItem>
  </FeedbackList>
);
