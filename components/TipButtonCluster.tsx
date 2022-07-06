import React from 'react';
import styled from 'styled-components';

import { TipButton } from './TipButton';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;

  .custom {
    height: 40px;
    width: 30%;
    background-color: hsl(189, 41%, 97%);
    color: hsl(184, 14%, 56%);
    border: none;
    letter-spacing: 0.1rem;
    border-radius: 5px;

    :hover {
      background-color: hsl(173, 61%, 44%);
      color: hsl(183, 100%, 15%);
      cursor: pointer;
    }
  }
`;

export class TipButtoncluster extends React.Component {
  render() {
    return (
      <StyledDiv>
        <TipButton percentage="5" />
        <TipButton percentage="10" />
        <TipButton percentage="15" />
        <TipButton percentage="25" />
        <TipButton percentage="50" />
        <button className="custom">
          <h3>Custom</h3>
        </button>
      </StyledDiv>
    );
  }
}
