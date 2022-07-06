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
  display: flex;
  justify-content: space-between;
  background-color: hsl(189, 41%, 97%);
  Image {
    width: 5px;
  }

  input {
    border: none;
    background-color: hsl(189, 41%, 97%);
    text-align: right;
    font-size: 18px;
    font-weight: 800;
    color: hsl(183, 100%, 15%);

    :focus {
      outline: none;
    }
  }
`;

type InputBarProps = {
  icon: string;
};

export class InputBar extends React.Component<InputBarProps, {}> {
  constructor(props: InputBarProps) {
    super(props);
  }

  render() {
    const { icon } = this.props;
    return (
      <StyledDiv>
        <Image src={icon} alt="icon" />
        <input type="text" placeholder="0" />
      </StyledDiv>
    );
  }
}
