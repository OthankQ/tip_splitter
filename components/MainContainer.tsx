import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: hsl(189, 41%, 97%);
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
        <div className="left-container">Hello</div>
        <div className="right-container">World</div>
      </StyledDiv>
    );
  }
}
