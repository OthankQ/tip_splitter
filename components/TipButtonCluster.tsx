import React from 'react';
import internal from 'stream';
import styled from 'styled-components';
import { createSecureContext } from 'tls';

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
    font-family: 'Space Mono', monospace;
    font-size: 1.2rem;
    font-weight: 800;

    :hover {
      background-color: hsl(173, 61%, 44%);
      color: hsl(183, 100%, 15%);
      cursor: pointer;
    }
  }

  .custom-input {
    width: 30%;
    height: 40px;
    text-align: right;
    background-color: hsl(189, 41%, 97%);
    border-radius: 5px;
    text-align: right;
    font-size: 18px;
    font-weight: bold;
    color: hsl(183, 100%, 15%);
    font-family: 'Space Mono', monospace;
    border: none;
    padding-right: 10px;
    box-sizing: border-box;

    :focus-within {
    }
    :focus {
      outline: 3px solid hsl(173, 61%, 44%);
    }
  }
`;

type tipButtonClusterProps = {
  onClick: (newValue: string) => void;
  customClick: () => void;
  isCustom: boolean;
  currentTipPercentage: number;
  onCustomChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export class TipButtoncluster extends React.Component<
  tipButtonClusterProps,
  {}
> {
  constructor(props: tipButtonClusterProps) {
    super(props);
    this.state = {
      isCustom: false,
    };

    this.handleCustomClick = this.handleCustomClick.bind(this);
    this.handleCustomInputChange = this.handleCustomInputChange.bind(this);
  }

  handleCustomClick() {
    this.props.customClick();
    this.setState({
      isCustom: true,
    });
  }

  handleTipButtonClick(event: any) {
    this.props.onClick(event.target.value);
  }

  handleCustomInputChange(event: any) {
    this.props.onCustomChange(event);
  }

  render() {
    const { onClick, isCustom, currentTipPercentage } = this.props;

    return (
      <StyledDiv>
        <TipButton
          onClick={onClick}
          percentage="5"
          currentTipPercentage={currentTipPercentage}
        />
        <TipButton
          onClick={onClick}
          percentage="10"
          currentTipPercentage={currentTipPercentage}
        />
        <TipButton
          onClick={onClick}
          percentage="15"
          currentTipPercentage={currentTipPercentage}
        />
        <TipButton
          onClick={onClick}
          percentage="25"
          currentTipPercentage={currentTipPercentage}
        />
        <TipButton
          onClick={onClick}
          percentage="50"
          currentTipPercentage={currentTipPercentage}
        />
        {!isCustom ? (
          <button className="custom" onClick={this.handleCustomClick}>
            Custom
          </button>
        ) : (
          <input
            autoFocus
            className="custom-input"
            onChange={this.handleCustomInputChange}
          ></input>
        )}
      </StyledDiv>
    );
  }
}
