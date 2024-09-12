import {styled} from 'styled-components/native';
import {Dimensions} from 'react-native';
import {font} from '../../util/fontSize';

const {height} = Dimensions.get('window');

export const NoteContainer = styled.ScrollView`
  flex: 9;
  background-color: white;
`;

export const ContentsInfo = styled.View`
  height: 250px;
  padding-top: 2.5%;
  padding-bottom: 2.5%;
  padding-left: 6%;
  padding-right: 6%;
  background-color: white;
`;

export const ContentsInfoBox = styled.View`
  flex: 1;
  border-radius: 10px;
  flex-direction: row;
  padding: 4%;
  background-color: white;
  box-shadow: 0px 1px 1px rgba(178, 178, 178, 0.5);
  position: relative;
`;

export const ContentsPlan = styled.View`
  background-color: white;
  height: ${Math.floor(height / 3.5)}px;
  padding-top: 5%;
  padding-bottom: 5%;
  padding-left: 6%;
  padding-right: 6%;
`;

export const SmallTitle = styled.Text`
  font-size: ${font(14)}px;
  font-weight: 600;
  margin-bottom: 2.5%;
  color: black;
`;

export const ContentsPlanBox = styled.View`
  background-color: white;
  box-shadow: 0px 1px 1px rgba(178, 178, 178, 0.5);
  border-radius: 10px;
  padding: 4%;
  padding-left: 5%;
  padding-right: 5%;
  height: 85%;
`;

export const InfoImg = styled.Image`
  border-radius: 8px;
  flex: 1;
  object-fit: cover;
`;

export const InfoContainer = styled.View`
  flex: 1.2;
  margin-left: 7%;
  padding-top: 2%;
  padding-bottom: 2%;
`;

export const InfoTitle = styled.Text`
  font-size: ${font(16)}px;
  font-weight: 600;
  color: black;
`;

export const InfoProperty = styled.Text`
  font-size: ${font(11)}px;
  color: #8e8e8e;
  margin-bottom: 2%;
`;

export const InfoContent = styled.Text`
  font-size: ${font(12)}px;
  color: black;
  margin-bottom: 6%;
`;

export const ActorContent = styled.Text<{last: boolean}>`
  font-size: ${font(12)}px;
  color: black;
  margin-bottom: ${props => (props.last ? '6%' : '0px')};
`;

export const PlanContainer = styled.View`
  flex: 1;
`;

export const PlanSmallTitle = styled.Text`
  font-size: 12px;
  color: #393939;
  margin-bottom: 3%;
  font-weight: 500;
`;

export const PlanDateBox = styled.View`
  background-color: #f5f5f5;
  border-radius: 10px;
  width: 90px;
  height: 17px;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-right: 7%;
`;

export const PlanDateCategory = styled.View`
  background-color: black;
  border-radius: 10px;
  width: 20px;
  height: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
  left: 0;
`;

export const PlanDateWhiteText = styled.Text`
  color: white;
  font-size: 8px;
  font-weight: 600;
`;

export const PlanDateContainer = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: baseline;
`;

export const PlanDateText = styled.Text`
  color: #393939;
  font-size: 9px;
  font-weight: 500;
  padding-left: 17px;
`;

export const PlanTodayDate = styled.View`
  background-color: black;
  border-radius: 10px;
  width: auto;
  height: auto;
  padding-top: 3px;
  padding-bottom: 3px;
  justify-content: center;
  align-items: center;
  margin-left: 6%;
  padding-left: 2%;
  padding-right: 2%;
`;

export const PlanTodayDateWhiteText = styled.Text`
  color: white;
  font-size: ${font(9)}px;
  font-weight: 500;
`;

export const PlanTodayDateText = styled.Text`
  color: black;
  font-size: ${font(9)}px;
  font-weight: 500;
  margin-left: 1%;
`;

export const ProgressContainer = styled.View`
  flex: 0.8;
  margin-top: 1%;
`;

export const PlanProgress = styled.View`
  margin-top: 1%;
  background-color: #e4e4e4;
  border-radius: 10px;
  width: 100%;
  height: 10%;
  position: relative;
  margin-bottom: 1%;
`;

export const CurrentPlanProgress = styled.View<{percent: number}>`
  background-color: black;
  border-radius: 10px;
  width: ${props => props.percent}%;
  height: 100%;
  position: absolute;
`;

export const PercentContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PercentText = styled.Text`
  color: #525252;
  font-size: ${font(8)}px;
`;

export const CompletedImg = styled.Image`
  width: 19px;
  height: 19px;
  position: absolute;
  right: 3%;
  bottom: 3%;
`;
