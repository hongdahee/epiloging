import {styled} from 'styled-components/native';
import {font} from '../../util/fontSize';

export const SignupContainer = styled.View`
  flex: 9;
  background-color: white;
  padding-left: 7%;
  padding-right: 7%;
  padding-top: 5%;
`;

export const SignupText = styled.Text`
  font-size: ${font(14)}px;
  font-weight: 300;
`;

export const IdPwInput = styled.TextInput`
  border-radius: 10px;
  width: 100%;
  height: 36.09px;
  background-color: rgba(242, 242, 242, 0.7);
  padding-left: 5%;
  padding-right: 5%;
  margin-top: 3%;
  margin-bottom: 7%;
`;

export const PasswordRuleText = styled.Text`
  color: #696969;
  font-size: ${font(9)}px;
  font-weight: 300;
`;
