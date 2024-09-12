import {ProfileImg} from '../component/Memo/style';
import {Header} from '../component/common/Header';
import * as S from './style';

export const MemoUpdate = ({route}: any) => {
  const category = route.params.category;
  return (
    <>
      <Header
        title="메모 작성"
        backBtn={true}
        rightBtn={require('../../assets/home.png')}
      />
      <S.MemoUpdateContainer>
        <S.ProfileContainer>
          <ProfileImg />
        </S.ProfileContainer>
        <S.MemoInputContainer>
          <S.MemoInfoBox>
            <S.MemoInfoTag>{category === 'book' ? 'P' : 'T'}.</S.MemoInfoTag>
            <S.MemoInfoText>
              {category === 'book' ? '페이지 번호' : '타임라인'}
            </S.MemoInfoText>
          </S.MemoInfoBox>
          <S.MemoInput placeholder="메모를 작성해 주세요." multiline />
        </S.MemoInputContainer>
      </S.MemoUpdateContainer>
    </>
  );
};
