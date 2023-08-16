import {styled} from 'styled-components/native';
import {font} from '../../../util/fontSize';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Platform} from 'react-native';

const StatusBarHeight = Platform.OS === 'ios' ? getStatusBarHeight(true) : 0;

export const Header = styled.View`
  flex: 1;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: ${StatusBarHeight}px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${font(20)}px;
  color: black;
  font-weight: 700;
`;

export const HeaderButton = styled.TouchableOpacity``;

export const HeaderButtonImg = styled.Image`
  width: 24px;
  height: 25px;
  object-fit: contain;
`;
