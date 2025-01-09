import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const LogoImage = styled.img`
  display: flex;
  width: 160px;
  height: 43px;
  align-items: center;
  flex-shrink: 0;
  position: relative;
`;

const Logo: React.FC = () => {
  return <LogoImage src={logo} alt="Onboarding Logo" />;
};

export default Logo;
