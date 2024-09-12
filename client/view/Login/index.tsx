import {Container} from '../component/common/Container';
import {useNavigation} from '@react-navigation/native';
import * as S from './style';
// import CheckBox from '@react-native-community/checkbox';
import {useState} from 'react';

export const Login = () => {
  const navigation = useNavigation<any>();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <Container>
      <S.LogoContainer></S.LogoContainer>
      <S.LoginContainer>
        <S.IdPwTitle>이메일</S.IdPwTitle>
        <S.IdPwInput />
        <S.IdPwTitle>비밀번호</S.IdPwTitle>
        <S.IdPwInput />
        <S.LoginBtn onPress={() => navigation.navigate('Main')}>
          <S.LoginBtnText>로그인</S.LoginBtnText>
        </S.LoginBtn>
        <S.LoginOptionContainer>
          <S.OptionContainer>
            {/* <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
              boxType="square"
              tintColor="#525252"
              onCheckColor="black"
              onTintColor="#525252"
              onAnimationType="stroke"
              style={{width: 14.3, height: 14.3, marginRight: '10%'}}
            /> */}
            <S.LoginOptionText>로그인 유지</S.LoginOptionText>
          </S.OptionContainer>
          <S.OptionContainer>
            <S.LoginOptionText>비밀번호 찾기</S.LoginOptionText>
          </S.OptionContainer>
        </S.LoginOptionContainer>
        <S.SignUpContainer>
          <S.SignUpText>아직 에필로깅 회원이 아니세요?</S.SignUpText>
          <S.SignUpNavigateBtn onPress={() => navigation.navigate('Signup')}>
            <S.SignUpNavigateBtnText>회원가입 하기</S.SignUpNavigateBtnText>
          </S.SignUpNavigateBtn>
        </S.SignUpContainer>
      </S.LoginContainer>
    </Container>
  );
};
