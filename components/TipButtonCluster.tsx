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

    :focus-within {
      outline: 3px solid hsl(173, 61%, 44%);
    }
    :focus {
      outline: none;
    }
  }
`;

type tipButtonClusterProps = {
  onClick: (newValue: string) => void;
  customClick: () => void;
  isCustom: boolean;
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

  render() {
    const { onClick, isCustom } = this.props;

    return (
      <StyledDiv>
        <TipButton onClick={onClick} percentage="5" />
        <TipButton onClick={onClick} percentage="10" />
        <TipButton onClick={onClick} percentage="15" />
        <TipButton onClick={onClick} percentage="25" />
        <TipButton onClick={onClick} percentage="50" />
        {!isCustom ? (
          <button className="custom" onClick={this.handleCustomClick}>
            Custom
          </button>
        ) : (
          <input className="custom-input"></input>
        )}
      </StyledDiv>
    );
  }
}
