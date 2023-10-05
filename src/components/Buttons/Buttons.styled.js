import styled from 'styled-components';

export const ButtonsBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
`;

export const Btn = styled.button`
  align-items: center;
  background-color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  color: #000;
  cursor: pointer;
  fill: #000;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: -0.8px;
  line-height: 24px;
  outline: 0;
  padding: 0 17px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover,
  &:focus {
    color: #00008b;
    text-shadow: #00bfff 0px 5px 20px;
  }

  &::first-letter {
    text-transform: uppercase;
  }

  &:first-child {
    background-color: green;
    border: 2px solid green;
  }

  &:first-child:hover,
  &:first-child:focus {
    background-color: #27a258;
    cursor: pointer;
    box-shadow: #27a258 0px 5px 15px;
  }

  &:nth-child(2) {
    background-color: #ffff00;
    border: 2px solid #ffff00;
  }
  &:nth-child(2):hover,
  &:nth-child(2):focus {
    background-color: #ffea00;
    cursor: pointer;
    box-shadow: #ffea00 0px 5px 15px;
  }

  &:last-child {
    background-color: red;
    border: 2px solid red;
  }

  &:last-child:hover,
  &:last-child:focus {
    background-color: #ff3333;
    cursor: pointer;
    box-shadow: #ff3333 0px 5px 15px;
  }
`;
