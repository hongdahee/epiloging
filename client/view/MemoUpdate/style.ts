import {styled} from 'styled-components/native';
import {font} from '../../util/fontSize';

export const MemoUpdateContainer = styled.View`
  flex: 9;
  background-color: white;
  flex-direction: row;
  padding-left: 6%;
  padding-right: 6%;
`;

export const ProfileContainer = styled.View`
  flex: 1;
`;

export const MemoInputContainer = styled.View`
  flex: 7;
  padding-top: 3%;
  padding-left: 6%;
`;

export const MemoInfoBox = styled.View`
  border-color: black;
  border-width: 1px;
  border-radius: 12px;
  width: 73px;
  height: 23px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MemoInfoTag = styled.Text`
  color: black;
  font-size: ${font(10)}px;
  font-weight: 500;
  margin-right: 2%;
`;

export const MemoInfoText = styled.Text`
  color: #696969;
  font-size: ${font(10)}px;
  font-weight: 500;
`;

export const MemoInput = styled.TextInput`
  margin-top: 6%;
  width: 100%;
`;
