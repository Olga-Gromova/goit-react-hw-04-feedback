import { Btn, ButtonsBlock } from './Buttons.styled';

export const Button = ({ keys, onLeaveFeedback }) => {
  return (
    <ButtonsBlock>
      {keys.map((key, index) => (
        <Btn key={key} onClick={() => onLeaveFeedback(index)}>
          {key}
        </Btn>
      ))}
    </ButtonsBlock>
  );
};
