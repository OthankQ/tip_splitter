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
};

export class Input extends React.Component<InputProps, {}> {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    const { label, icon } = this.props;
    return (
      <StyledDiv>
        <h4>{label}</h4>
        <InputBar icon={icon} />
      </StyledDiv>
    );
  }
}
