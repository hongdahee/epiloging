import {styled} from 'styled-components/native';
import {font} from '../../util/fontSize';

export const LogoContainer = styled.View`
  flex: 1;
  background-color: lemonchiffon;
  align-items: center;
`;

export const LoginContainer = styled.View`
  flex: 3;
  padding-left: 14%;
  padding-right: 14%;
`;

export const LoginBtn = styled.TouchableOpacity`
  border-radius: 10px;
  width: 100%;
  height: 43px;
  background-color: black;
  align-items: center;
  justify-content: center;
  margin-top: 7%;
`;

export const LoginBtnText = styled.Text`
  font-size: ${font(14)}px;
  font-weight: 800;
  color: white;
`;

export const IdPwInput = styled.TextInput`
  border-radius: 10px;
  width: 100%;
  height: 36.09px;
  background-color: #ebebeb;
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 7%;
`;

export const IdPwTitle = styled.Text`
  font-size: ${font(12)}px;
  font-weight: 800;
  color: black;
  margin-bottom: 3%;
`;

export const LoginOptionContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 7%;
`;

export const LoginOptionText = styled.Text`
  color: #525252;
  font-weight: 300;
  font-size: ${font(11)}px;
`;

export const OptionContainer = styled.View`
  flex-direction: row;
`;

export const SignUpContainer = styled.View`
  flex-direction: row;
  margin-top: 30%;
  padding-left: 5%;
  align-items: center;
`;

export const SignUpText = styled.Text`
  color: black;
  font-weight: 300;
  font-size: ${font(12)}px;
`;

export const SignUpNavigateBtn = styled.TouchableOpacity`
  margin-left: 5%;
`;

export const SignUpNavigateBtnText = styled.Text`
  color: black;
  font-weight: 300;
  font-size: ${font(13)}px;
  text-decoration: underline;
`;
