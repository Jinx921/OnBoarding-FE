import React from 'react';
import styled from 'styled-components';
import ellipseImage from '../assets/ellipse7.svg';
import SearchIcon from '../assets/search.svg';

const Frame = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  position: relative;
  margin-top: -7px;
`;

const Field = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: #f1f1f3;
  border-radius: 6px;
  gap: 8px;
  padding: 12px 60px 12px 16px;
  position: relative;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  background-size: contain;
`;

const Text = styled.div`
  color: #afb8c1;
  font-family: 'Pretendard-Medium', Helvetica;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 22.4px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const Ellipse = styled.img`
  width: 48px;
  height: 48px;
  position: relative;
  right: 0;
`;

const SearchBar: React.FC = () => {
  return (
    <Frame>
      <Field>
        <Icon src={SearchIcon} alt="searchIcon" />
        <Text>찾고 싶은 컬렉션을 검색해보세요.</Text>
      </Field>
      <Ellipse src={ellipseImage} alt="ellipse7" />
    </Frame>
  );
};

export default SearchBar;
