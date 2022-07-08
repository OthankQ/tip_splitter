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
`;

type tipButtonClusterProps = {
  onClick: (newValue: string) => void;
  customClick: () => void;
};

export class TipButtoncluster extends React.Component<
  tipButtonClusterProps,
  {}
> {
  constructor(props: tipButtonClusterProps) {
    super(props);
    this.handleCustomClick = this.handleCustomClick.bind(this);
  }

  handleCustomClick() {
    this.props.customClick();
  }

  render() {
    const { onClick } = this.props;
    return (
      <StyledDiv>
        <TipButton onClick={onClick} percentage="5" />
        <TipButton onClick={onClick} percentage="10" />
        <TipButton onClick={onClick} percentage="15" />
        <TipButton onClick={onClick} percentage="25" />
        <TipButton onClick={onClick} percentage="50" />
        <button className="custom" onClick={this.handleCustomClick}>
          Custom
        </button>
      </StyledDiv>
    );
  }
}
