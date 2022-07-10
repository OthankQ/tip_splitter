import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import dollarSign from '../public/images/icon-dollar.svg';

const StyledDiv = styled.div`
  width: 95%;
  height: 35px;
  border: none;
  padding: 9px;
  padding-left: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  background-color: hsl(189, 41%, 97%);
  box-sizing: border-box;
  outline: ${(props: InputBarProps) =>
    props.isZero ? '3px solid red' : 'none'};

  :focus-within {
    outline: 3px solid hsl(173, 61%, 44%);
  }

  Image {
    width: 5px;
  }

  input {
    border: none;
    background-color: hsl(189, 41%, 97%);
    text-align: right;
    font-size: 18px;
    font-weight: bold;
    color: hsl(183, 100%, 15%);
    font-family: 'Space Mono', monospace;

    :focus {
      outline: none;
    }
  }
`;

type InputBarProps = {
  icon: string;
  value: number | string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => void;
  onClick: () => void;
  handleZero: (inputValue: number) => void;
  isZero: boolean;
};

export class InputBar extends React.Component<InputBarProps, {}> {
  constructor(props: InputBarProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (this.props.onChange) {
      this.props.onChange(event, event.target.value);
      this.handleZero(parseInt(event.target.value));
    }
  }

  handleClick(event: React.FocusEvent<HTMLInputElement>) {
    this.props.onClick();
  }

  handleZero(inputValue: number) {
    this.props.handleZero(inputValue);
  }

  render() {
    const { icon, value, isZero } = this.props;
    return (
      <StyledDiv>
        <Image src={icon} alt="icon" />
        <input
          value={value}
          type="text"
          onChange={this.handleChange}
          onClick={this.handleClick}
          className={isZero ? 'zero-warning' : undefined}
        />
      </StyledDiv>
    );
  }
}
