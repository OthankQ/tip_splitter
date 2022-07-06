import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(183, 100%, 15%);
  color: white;
  height: 40px;
  width: 30%;
  border-radius: 5px;

  :hover {
    background-color: hsl(173, 61%, 44%);
    color: hsl(183, 100%, 15%);
    cursor: pointer;
  }
`;

type TipButtonProps = {
  percentage: string;
};

export class TipButton extends React.Component<TipButtonProps, {}> {
  constructor(props: TipButtonProps) {
    super(props);
  }

  render() {
    const { percentage } = this.props;
    return (
      <StyledDiv>
        <h3>{percentage}%</h3>
      </StyledDiv>
    );
  }
}
