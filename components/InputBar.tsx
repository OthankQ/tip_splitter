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

    :focus {
      outline: none;
    }
  }
`;

type InputBarProps = {
  icon: string;
  value: number;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => void;
};

export class InputBar extends React.Component<InputBarProps, {}> {
  constructor(props: InputBarProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (this.props.onChange) {
      this.props.onChange(event, event.target.value);
    }
  }

  render() {
    const { icon, value, onChange } = this.props;
    return (
      <StyledDiv>
        <Image src={icon} alt="icon" />
        <input value={value} type="text" onChange={this.handleChange} />
      </StyledDiv>
    );
  }
}
