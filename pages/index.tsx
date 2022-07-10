import type { NextPage } from 'next';
import styled from 'styled-components';

import { MainContainer } from '../components/MainContainer';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
  background-color: hsl(185, 41%, 84%);
  font-family: 'Space Mono', monospace;
  height: 100vh;

  .title {
    letter-spacing: 0.4rem;
  }

  @media (max-width: 376px) {
    gap: 40px;
    height: 100%;

    .made-by {
      margin-bottom: 30px;
    }

    .title {
      margin-top: 30px;
    }
  }
`;

const Home: NextPage = () => {
  return (
    <StyledContainer>
      <div className="title">
        <h2>SPLI</h2>
        <h2>TTER</h2>
      </div>
      <MainContainer />
      <div className="made-by">
        <h5>Created By Ryan Kim</h5>
      </div>
    </StyledContainer>
  );
};

export default Home;
