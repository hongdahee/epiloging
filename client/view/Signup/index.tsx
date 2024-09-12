import {Container} from '../component/common/Container';
import * as S from './style';
import {SignupHeader} from '../component/common/SignupHeader';

export const SignUp = () => {
  return (
    <Container>
      <SignupHeader signupPage={true} title="회원 가입" />
      <S.SignupContainer>
        <S.SignupText>이메일</S.SignupText>
        <S.IdPwInput />
        <S.SignupText>비밀번호</S.SignupText>
        <S.IdPwInput />
        <S.SignupText>비밀번호 확인</S.SignupText>
        <S.IdPwInput />
        <S.PasswordRuleText>
          영문, 숫자, 특수문자 포함하여 10자리 이상
        </S.PasswordRuleText>
      </S.SignupContainer>
    </Container>
  );
};
