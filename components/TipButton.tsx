import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(183, 100%, 15%);
  color: white;
  height: 40px;
  width: 30%;
  border-radius: 5px;
  border: none;
  font-family: 'Space Mono', monospace;
  font-size: 1.2rem;
  font-weight: 800;

  :active {
    background-color: hsl(173, 61%, 44%);
    color: hsl(183, 100%, 15%);
  }

  :hover {
    cursor: pointer;
  }
`;

type TipButtonProps = {
  percentage: string;
  onClick: (newValue: string) => void;
};

export class TipButton extends React.Component<TipButtonProps, {}> {
  constructor(props: TipButtonProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event: React.MouseEvent<HTMLInputElement>) {
    this.props.onClick((event.target as HTMLInputElement).value);
  }

  render() {
    const { percentage } = this.props;
    return (
      <StyledButton value={percentage} onClick={this.handleClick}>
        {percentage}%
      </StyledButton>
    );
  }
}
