import {useNavigation} from '@react-navigation/native';
import * as S from './style';
import {Text, View} from 'react-native';

export const Memo = ({memo, category}: {memo: any; category: String}) => {
  const navigation = useNavigation<any>();

  return (
    <S.ContentsMemo>
      <S.TitleContainer>
        <S.SmallTitle>메모</S.SmallTitle>
        <S.CreateMemoBtn
          onPress={() => navigation.navigate('MemoUpdate', {category})}>
          <S.CreateBtnImg source={require('../../../assets/plusBtn.png')} />
        </S.CreateMemoBtn>
      </S.TitleContainer>
      {memo.length > 0 && (
        <>
          <S.MainMemoContainer>
            <S.MainMemoImg source={require('../../../assets/memoPin.png')} />
            <S.MainMemoText>고정됨</S.MainMemoText>
          </S.MainMemoContainer>
          <S.MemoContainer>
            <S.ProfileContainer first={false}>
              <S.ProfileImg />
            </S.ProfileContainer>
            <S.ContentContainer>
              <S.Nickname>aerizzang</S.Nickname>
              <S.MemoDate>12시간 전</S.MemoDate>
              <S.ContentTimeContainer>
                <S.MemoContentText>
                  {memo[0].content}
                  {`  `}
                </S.MemoContentText>
                <S.TimelineBox>
                  <S.TimelineText>
                    P.{memo[0].page ? memo[0].page : memo[0].runtime}
                  </S.TimelineText>
                </S.TimelineBox>
              </S.ContentTimeContainer>
            </S.ContentContainer>
            <S.MemoBtnContainer>
              <S.MemoMenuImg source={require('../../../assets/memoMenu.png')} />
            </S.MemoBtnContainer>
          </S.MemoContainer>
          <S.MainMemoLine />
        </>
      )}
      {memo.length > 0 &&
        memo.map((item: any, idx: number) => (
          <S.MemoContainer key={item.memoId}>
            <S.ProfileContainer first={idx === 0 ? true : false}>
              <S.ProfileImg />
              {idx !== memo.length - 1 && <S.ProfileLine />}
            </S.ProfileContainer>
            <S.ContentContainer>
              <S.Nickname>aerizzang</S.Nickname>
              <S.MemoDate>12시간 전</S.MemoDate>
              <S.ContentTimeContainer>
                <S.MemoContentContainer>
                  <S.MemoContentText>{item.content}</S.MemoContentText>
                </S.MemoContentContainer>
                <S.TimelineBox>
                  <S.TimelineText>
                    P.{item.page ? item.page : item.runtime}
                  </S.TimelineText>
                </S.TimelineBox>
              </S.ContentTimeContainer>
            </S.ContentContainer>
            <S.MemoBtnContainer>
              <S.MemoMenuImg source={require('../../../assets/memoMenu.png')} />
            </S.MemoBtnContainer>
          </S.MemoContainer>
        ))}
    </S.ContentsMemo>
  );
};
