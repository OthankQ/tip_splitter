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
    width: 90%;

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

type InputBarState = {
  isActive: boolean;
};

export class InputBar extends React.Component<InputBarProps, InputBarState> {
  constructor(props: InputBarProps) {
    super(props);
    this.state = {
      isActive: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (this.props.onChange) {
      this.props.onChange(event, event.target.value);
      this.handleZero(parseFloat(event.target.value));
    }
  }

  handleClick() {
    this.props.onClick();
    this.setState({
      isActive: true,
    });
  }

  handleOnBlur() {
    this.setState({
      isActive: false,
    });
  }

  handleZero(inputValue: number) {
    this.props.handleZero(inputValue);
  }

  render() {
    const { icon, value, isZero } = this.props;
    const { isActive } = this.state;

    return (
      <StyledDiv
        style={{
          outline: isZero
            ? '3px solid red'
            : isActive
            ? '3px solid hsl(173, 61%, 44%)'
            : 'none',
        }}
      >
        <Image src={icon} alt="icon" />
        <input
          value={value}
          type="text"
          onChange={this.handleChange}
          onFocus={this.handleClick}
          onBlur={(e) => {
            this.handleOnBlur();
          }}
          className={isZero ? 'zero-warning' : undefined}
        />
      </StyledDiv>
    );
  }
}
