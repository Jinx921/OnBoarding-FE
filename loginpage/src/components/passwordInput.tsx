import React, { useState } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div<{ borderColor: string }>`
  display: flex;
  height: 23px;
  align-items: center;
  border: 0.7px solid ${(props) => props.borderColor};
  border-radius: 7px;
  padding: 12px;
  margin-bottom: 8px;
`;

const Input = styled.input<{ textColor: string }>`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  font-family: Pretendard;
  color: ${(props) => props.textColor};
  margin-left: 10px;

  &::placeholder {
    color: #afb8c1;
  }
`;

const ValidationMessage = styled.p<{ color: string }>`
  font-family: Pretendard;
  font-size: 14px;
  color: ${(props) => props.color};
  margin-top: 4px;
`;

const PasswordInput: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState<null | boolean>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    // 비밀번호 조건 검사 (최소 8자, 대소문자 포함, 특수문자 포함)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    if (passwordRegex.test(value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const borderColor = isFocused
    ? '#5e52ff' // 포커스 중
    : isValid === true
    ? '#165bfa' // 올바른 비밀번호
    : isValid === false
    ? '#ec2d30' // 잘못된 비밀번호
    : '#64696e'; // 기본 테두리

  const textColor = isFocused || isValid ? '#000000' : '#afb8c1'; // 포커스 또는 유효한 경우 검은색 글자

  return (
    <div>
      <InputWrapper borderColor={borderColor}>
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          textColor={textColor}
        />
      </InputWrapper>
      {isValid === false && (
        <ValidationMessage color="#ec2d30">
          비밀번호는 최소 8자 이상, 대소문자 및 특수문자를 포함해야 합니다.
        </ValidationMessage>
      )}
      {isValid === true && (
        <ValidationMessage color="#165bfa">
          비밀번호가 올바르게 작성되었습니다.
        </ValidationMessage>
      )}
    </div>
  );
};

export default PasswordInput;