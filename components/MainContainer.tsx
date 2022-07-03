import React from 'react';
import styled from 'styled-components';

import { Input } from './Input';

import dollarSign from '../public/images/icon-dollar.svg';
import personIcon from '../public/images/icon-person.svg';

const StyledDiv = styled.div`
  background-color: hsl(0, 0%, 100%);
  border-radius: 15px;
  height: 400px;
  width: 800px;
  padding: 30px;
  display: flex;

  .left-container {
    width: 50%;
  }

  .right-container {
    width: 50%;
    background-color: hsl(183, 100%, 15%);
    border-radius: 15px;
    padding: 30px;
  }
`;

export class MainContainer extends React.Component {
  render() {
    return (
      <StyledDiv>
        <div className="left-container">
          <Input label="Bill" icon={dollarSign} />
        </div>
        <div className="right-container">World</div>
      </StyledDiv>
    );
  }
}
