import React from 'react';
import styled from 'styled-components';

import { InputBar } from './InputBar';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

type InputProps = {
  label: string;
  icon: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
};

type InputState = {
  isActive: boolean;
};

export class Input extends React.Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  render() {
    const { label, value, icon, onChange } = this.props;
    return (
      <StyledDiv>
        <h4>{label}</h4>
        <InputBar value={value} icon={icon} onChange={onChange} />
      </StyledDiv>
    );
  }
}
