import {styled} from 'styled-components/native';
import {font} from '../../../util/fontSize';

export const ContentsMemo = styled.View`
  border-top-width: 1.5px;
  border-top-color: #ebebeb;
  padding-top: 5%;
  padding-bottom: 5%;
  padding-left: 6%;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 3%;
`;
export const CreateBtnImg = styled.Image`
  width: 20px;
  height: 20px;
`;

export const CreateMemoBtn = styled.TouchableOpacity`
  padding-right: 6%;
`;

export const SmallTitle = styled.Text`
  font-size: ${font(14)}px;
  font-weight: 600;
  margin-bottom: 2.5%;
  color: black;
`;

export const MemoContainer = styled.View`
  flex-direction: row;
  padding-top: 5px;
`;

export const ProfileContainer = styled.View<{first: Boolean}>`
  align-items: center;
  gap: ${props => (props.first ? '0px' : '5px')};
`;

export const ProfileImg = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: beige;
`;

export const ProfileLine = styled.View`
  width: 1px;
  height: 60px;
  background-color: #c5c5c5;
`;

export const ContentContainer = styled.View`
  flex: 4;
  padding-left: 3.5%;
`;

export const MemoBtnContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const Nickname = styled.Text`
  font-weight: 600;
  font-size: ${font(12)}px;
  color: black;
  margin-bottom: 2%;
`;

export const MemoDate = styled.Text`
  font-size: ${font(12)}px;
  color: #8e8e8e;
  font-weight: 500;
  margin-bottom: 5%;
`;

export const MemoContentContainer = styled.View`
  position: relative;
`;

export const MemoContentText = styled.Text`
  font-size: ${font(12)}px;
  color: black;
  font-weight: 500;
  padding-right: 30px;
`;

export const MemoMenuImg = styled.Image`
  width: 22px;
  height: 13px;
`;

export const TimelineBox = styled.View`
  width: 30px;
  justify-content: center;
  align-items: center;
  height: 13px;
  padding-left: 5px;
  padding-right: 5px;
  background-color: #ebebeb;
  border-radius: 2px;
  position: absolute;
  right: -5px;
  bottom: 0;
`;

export const ContentTimeContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const TimelineText = styled.Text`
  font-weight: 500;
  font-size: ${font(8)}px;
  color: #696969;
`;

export const MainMemoLine = styled.View`
  background-color: #ebebeb;
  height: 1px;
  width: 94%;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const MainMemoContainer = styled.View`
  flex-direction: row;
  margin-bottom: 2.5%;
`;

export const MainMemoImg = styled.Image`
  width: 5px;
  height: 10px;
  margin-right: 1.5%;
`;

export const MainMemoText = styled.Text`
  color: #696969;
  font-size: ${font(9)}px;
  font-weight: 500;
`;
