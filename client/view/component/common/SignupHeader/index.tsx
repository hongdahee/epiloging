import {useNavigation} from '@react-navigation/native';
import * as S from './style';

export const SignupHeader = ({
  title,
  signupPage,
}: {
  title: String;
  signupPage?: Boolean;
}) => {
  const navigation = useNavigation<any>();
  return (
    <S.Header>
      {signupPage ? (
        <S.HeaderButton onPress={() => navigation.navigate('Login')}>
          <S.HeaderButtonImg
            style={{width: 13, height: 13}}
            source={require(`../../../../assets/cancel.png`)}
          />
        </S.HeaderButton>
      ) : (
        <S.HeaderButton onPress={() => navigation.navigate('Signup')}>
          <S.HeaderButtonImg
            style={{width: 7, height: 13}}
            source={require(`../../../../assets/headerBack.png`)}
          />
        </S.HeaderButton>
      )}
      <S.HeaderTitle>{title}</S.HeaderTitle>
      {signupPage ? (
        <S.HeaderButton onPress={() => navigation.navigate('SignupProfile')}>
          <S.HeaderNextBtnText>다음</S.HeaderNextBtnText>
        </S.HeaderButton>
      ) : (
        <S.HeaderButton onPress={() => navigation.navigate('Login')}>
          <S.HeaderNextBtnText>다음</S.HeaderNextBtnText>
        </S.HeaderButton>
      )}
    </S.Header>
  );
};
