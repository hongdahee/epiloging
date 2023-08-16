import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import * as S from './style';
import {Container} from '../common/Container';

export const Home = () => {
  const navigation = useNavigation<any>();
  return (
    <Container>
      <>
        <S.Title>Home</S.Title>
        <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
          <S.Title>🗓️</S.Title>
        </TouchableOpacity>
      </>
    </Container>
  );
};
