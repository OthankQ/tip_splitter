import React from 'react';
import styled from 'styled-components';

import { Input } from './Input';
import { TipButtoncluster } from './TipButtonCluster';
import { ResultDisplay } from './ResultDisplay';

import dollarSign from '../public/images/icon-dollar.svg';
import personIcon from '../public/images/icon-person.svg';

const StyledDiv = styled.div`
  background-color: hsl(0, 0%, 100%);
  border-radius: 15px;
  height: 400px;
  width: 800px;
  padding: 30px;
  display: flex;
  gap: 30px;

  h4 {
    color: hsl(184, 14%, 56%);
  }

  .left-container {
    width: 50%;
    display: flex;
    gap: 40px;
    flex-direction: column;
  }

  .tip-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .right-container {
    width: 50%;
    background-color: hsl(183, 100%, 15%);
    border-radius: 15px;
    padding: 30px 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .reset-btn {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    background-color: hsl(173, 61%, 44%);
    color: hsl(183, 100%, 15%);
    border: none;

    h3 {
      font-family: 'Space Mono', monospace;
      letter-spacing: 0.05rem;
    }
  }
`;

export class MainContainer extends React.Component {
  render() {
    return (
      <StyledDiv>
        <div className="left-container">
          <Input label="Bill" icon={dollarSign} />
          <div className="tip-buttons">
            <h4>Select Tip %</h4>
            <TipButtoncluster />
          </div>
          <Input label="Number of People" icon={personIcon} />
        </div>
        <div className="right-container">
          <div className="top-content">
            <ResultDisplay label="Tip Amount" result={4.27} />
            <ResultDisplay label="Total" result={32.79} />
          </div>
          <div className="bottom-content">
            <button className="reset-btn">
              <h3>RESET</h3>
            </button>
          </div>
        </div>
      </StyledDiv>
    );
  }
}
