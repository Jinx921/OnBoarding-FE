import React from 'react';
import styled from 'styled-components';
import Logo from './logo';

const TopContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 122px 16px 50px;
  margin: 0 auto;
  background-color: #ffffff;
  box-sizing: border-box;
  position: relative;
`;

const Topls: React.FC = () => {
  return (
    <TopContainer>
      <Logo />
    </TopContainer>
  );
};

export default Topls;