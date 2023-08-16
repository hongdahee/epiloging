import {styled} from 'styled-components/native';
import {font} from '../../util/fontSize';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const StorageContainer = styled.View`
  flex: 8;
  /* padding-left: 3.5%;
  padding-right: 3.5%; */
  background-color: white;
`;

export const Tab = styled.View`
  flex: 1.1;
  flex-direction: row;
`;

export const TabItem = styled.TouchableOpacity<{active: Boolean}>`
  flex: 1;
  height: 100%;
  border-bottom-color: ${props => (props.active ? 'black' : '#b2b2b2')};
  border-bottom-width: 2px;
  align-items: center;
  justify-content: center;
  /* 
  &.active {
    border-bottom-color: #b2b2b2;
  } */
`;

export const TabItemTitle = styled.Text`
  font-size: ${font(16)}px;
  font-weight: 700;
  color: black;
`;

export const StorageMain = styled.View`
  width: ${width}px;
  flex: 8.5;
  /* background-color: beige; */
  /* padding: 5%; */
`;

export const StorageInfo = styled.View`
  flex: 1;
  /* background-color: orange; */
  justify-content: center;
  padding-left: 5%;
  padding-right: 5%;
`;

export const Contents = styled.TouchableOpacity`
  width: 31.5%;
  height: ${Math.floor(height / 3)}px;
  background-color: white;
  border-radius: 15px;
  align-items: center;
  padding-bottom: 2%;
  margin-right: 10px;
  box-shadow: 1px 1px 3px;
`;

export const ContentsImg = styled.Image`
  width: 85%;
  /* height: 60%; */
  flex: 3;
  background-color: yellow;
  border-radius: 8px;
  object-fit: cover;
`;

export const ContentsInfo = styled.View`
  /* background-color: deeppink; */
  width: 85%;
  flex: 1;
  padding-top: 10%;
  padding-bottom: 10%;
`;

export const InfoTitle = styled.Text`
  font-weight: 700;
  font-size: ${font(11)}px;
`;

export const StorageCount = styled.Text`
  font-size: ${font(10)}px;
  color: #b2b2b2;
  font-weight: 500;
`;

export const ContentsContainer = styled.TouchableOpacity``;
