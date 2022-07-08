import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  color: white;
  justify-content: space-between;

  h3 {
    font-size: 14px;
    letter-spacing: 0.1rem;
  }

  p {
    font-size: 12px;
    color: hsl(184, 14%, 56%);
  }

  h1 {
    color: hsl(173, 61%, 44%);
  }
`;

type ResultDisplayProps = {
  result: number;
  label: string;
};

export class ResultDisplay extends React.Component<ResultDisplayProps, {}> {
  constructor(props: ResultDisplayProps) {
    super(props);
  }

  render() {
    const { result, label } = this.props;
    return (
      <StyledDiv>
        <div className="text-content">
          <h3>{label}</h3>
          <p>/ person</p>
        </div>
        <div className="number-content">
          <h1>{result}</h1>
        </div>
      </StyledDiv>
    );
  }
}
