import {useNavigation} from '@react-navigation/native';
import * as S from './style';
import {ImageURISource} from 'react-native';

export const Header = ({
  title,
  backBtn,
  rightBtn,
}: {
  title: String;
  backBtn?: Boolean;
  rightBtn: ImageURISource;
}) => {
  const navigation = useNavigation<any>();
  return (
    <S.Header>
      {backBtn ? (
        <S.HeaderButton onPress={() => navigation.pop()}>
          <S.HeaderButtonImg
            style={{width: 7, height: 13}}
            source={require(`../../../assets/headerBack.png`)}
          />
        </S.HeaderButton>
      ) : (
        <S.HeaderButton />
      )}
      <S.HeaderTitle>{title}</S.HeaderTitle>
      <S.HeaderButton onPress={() => navigation.navigate('Calendar')}>
        <S.HeaderButtonImg source={rightBtn} />
      </S.HeaderButton>
    </S.Header>
  );
};
