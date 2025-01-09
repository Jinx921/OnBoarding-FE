import React from 'react';
import styled from 'styled-components';
import Topls from '../components/top-ls'
import person from '../assets/person.png';
import LogoTypo from '../assets/LogoTypo.svg';
import GoogleLogo from '../assets/GoogleLogo.svg';
import EmailInput from "../components/emailInput";
import PasswordInput from '../components/passwordInput';

const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 1024px;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  padding: 0 16px;
  background-color: #ffffff;
`;

const LeftSection = styled.div`
  width: 676px;
  height: 850px;
  background-color: #5e52ff;
  border-radius: 32px;
  margin-left: 32px;
  margin-bottom: 32px;
  box-sizing: border-box;
  position: relative;
`;

const Illustration = styled.img`
  width: 606px;
  height: 606px;
  margin-top: 70px;
  margin-bottom: 24px;
`;

const LogoContainer = styled.img`
  width: 255px;
  height: 39px;
  position: relative;
  margin-left: 370px;
  margin-top: -40px;
`;

const Subtitle = styled.p`
  color: #dcd9ff;
  font-family: 'Pretendard', Helvetica;
  font-size: 27px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  text-align: right;
  margin-left: 225px;
  margin-top: 5px;
  width: 400px;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  width: 460px;
  padding: 40px;
  border-radius: 8px;
  background-color: #ffffff;
`;

const Title = styled.h1`
  font-family: 'Pretendard', Helvetica;
  font-size: 32px;
  font-weight: 524px;
  color: #000000;
  margin-bottom: 26px;
  text-align: center;
`;

const GoogleLoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 62px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.44px;
  background-color: #eceef0;
  border: 1px solid #eceef0;
  border-radius: 6.96px;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
    margin-right: 14px;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px 0;
  color: #afb8c1;
  font-family: Pretendard;
  font-size: 14px;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 0.5px;
    background-color: #afb8c1;
    margin: 0 15px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-family: 'Pretendard', Helvetica;
  font-size: 14px;
  color: #181818;
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -8px;
  margin-bottom: 24px;

  label {
    font-size: 14px;
    font-family: Pretendard;
    letter-spacing: -0.02em;
    line-height: 24px;
    color: #181818;
    text-align: left;
  }

  a {
    font-size: 14px;
    color: #64696e;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SignupText = styled.p`
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  color: #afb8c1;
  margin-bottom: 24px;

  a {
    color: #181818;
    font-family: Pretendard;
    font-weight: 600;
    letter-spacing: -0.02em;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 12px;
  font-size: 17px;
  font-weight: 500;
  font-family: 'Pretendard', Helvetica;
  color: #ffffff;
  background-color: #64696e;
  border: none;
  border-radius: 7px;
  cursor: pointer;

  &:hover {
    background-color: #36393c;
  }
`;

const LoginPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('로그인 제출');
  };

  return (
    <>
      <Topls />
      <PageContainer>
        <LeftSection>
          <Illustration src={person} alt="Onboarding Illustration" />
          <LogoContainer src={LogoTypo} alt="Onboarding LogoTypo" />
          <Subtitle>
            성장을 원하는 사람들을 위한
            <br />
            가장 빠른 학습 여정 플랫폼
          </Subtitle>
        </LeftSection>

        <RightSection>
          <FormContainer>
            <Title>로그인</Title>
            <GoogleLoginButton>
              <img src={GoogleLogo} alt="Google Logo" />
              Google 계정으로 로그인
            </GoogleLoginButton>
            <Divider>또는</Divider>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="email">이메일</Label>
                <EmailInput />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">비밀번호</Label>
                <PasswordInput />
              </FormGroup>
              <CheckboxContainer>
                <label>
                  <input type="checkbox" /> 로그인 유지
                </label>
                <div>
                  <a href="/forgot-id">아이디(이메일) 찾기</a> |{' '}
                  <a href="/forgot-password">비밀번호 찾기</a>
                </div>
              </CheckboxContainer>
              <SignupText>
                온보딩이 처음이신가요? <a href="/signup">이메일로 회원가입</a>
              </SignupText>
              <SubmitButton>로그인</SubmitButton>
            </form>
          </FormContainer>
        </RightSection>
      </PageContainer>
    </>
  );
};

export default LoginPage;