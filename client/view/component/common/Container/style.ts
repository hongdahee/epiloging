import {Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {styled} from 'styled-components/native';

const StatusBarHeight = Platform.OS === 'ios' ? getStatusBarHeight(true) : 0;

export const Container = styled.View`
  background-color: white;
  flex: 1;
  padding-top: ${StatusBarHeight}px;
`;
