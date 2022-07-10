import React from 'react';
import styled from 'styled-components';

import { InputBar } from './InputBar';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  .label {
    display: flex;
    justify-content: space-between;

    h3 {
      font-size: 0.8rem;
      color: red;
    }
  }
`;

type InputProps = {
  label: string;
  icon: string;
  value: number | string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  onClick: () => void;
};

type InputState = {
  isActive: boolean;
  isZero: boolean;
};

export class Input extends React.Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      isActive: false,
      isZero: false,
    };

    this.handleZeroWarning = this.handleZeroWarning.bind(this);
  }

  handleZeroWarning(inputValue: number) {
    if (inputValue == 0) {
      this.setState({ isZero: true });
    } else {
      this.setState({ isZero: false });
    }
  }

  render() {
    const { label, value, icon, onChange, onClick } = this.props;
    const { isZero } = this.state;
    return (
      <StyledDiv>
        <div className="label">
          <div className="main-label">
            <h4>{label}</h4>
          </div>
          <div className="warning-label">
            {isZero ? <h3>Can not be zero</h3> : undefined}
          </div>
        </div>

        <InputBar
          value={value}
          icon={icon}
          onChange={onChange}
          onClick={onClick}
          handleZero={this.handleZeroWarning}
          isZero={isZero}
        />
      </StyledDiv>
    );
  }
}
