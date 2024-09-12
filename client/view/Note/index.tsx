import {Memo} from '../component/Memo';
import {Header} from '../component/common/Header';
import {StarRating} from '../component/common/StarRating';
import * as S from './style';

export const Note = ({route}: any) => {
  const item = route.params.item;
  const dayDiff =
    new Date(item.finishDate).getTime() - new Date(item.startDate).getTime();
  const TodayDiff = new Date().getTime() - new Date(item.startDate).getTime();
  const progressPercent = Math.floor((item.currentNum / item.totalNum) * 100);
  const bookNote = ['저자', '출판사', '출간일', '완독', '독서'];
  const movieNote = ['감독', '출연', '개봉일', '완영', '시청'];

  return (
    <>
      <Header
        title={item.isbn ? '독서 노트' : '영화 노트'}
        backBtn={true}
        rightBtn={require('../../assets/moreMenu.png')}
      />
      <S.NoteContainer>
        <S.ContentsInfo>
          <S.ContentsInfoBox style={{elevation: 5}}>
            <S.InfoImg
              source={{
                uri: item.isbn
                  ? item.img
                  : `https://image.tmdb.org/t/p/w500${item.img}`,
              }}
            />
            <S.InfoContainer>
              <S.InfoTitle>{item.title}</S.InfoTitle>
              <StarRating star={item.star} />
              <S.InfoProperty>
                {item.isbn ? bookNote[0] : movieNote[0]}
              </S.InfoProperty>
              <S.InfoContent>{item.creator}</S.InfoContent>
              <S.InfoProperty>
                {item.isbn ? bookNote[1] : movieNote[1]}
              </S.InfoProperty>
              {item.isbn ? (
                <S.InfoContent>{item.publisher}</S.InfoContent>
              ) : (
                item.actors.map((actor: String, idx: Number) => (
                  <S.ActorContent
                    last={idx === item.actors.length - 1 ? true : false}>
                    {actor}
                  </S.ActorContent>
                ))
              )}
              <S.InfoProperty>
                {item.isbn ? bookNote[2] : movieNote[2]}
              </S.InfoProperty>
              <S.InfoContent>{item.releaseDate}</S.InfoContent>
            </S.InfoContainer>
            <S.CompletedImg
              source={
                item.isbn
                  ? require('../../assets/completedBook.png')
                  : require('../../assets/completedMovie.png')
              }
            />
          </S.ContentsInfoBox>
        </S.ContentsInfo>
        <S.ContentsPlan>
          <S.SmallTitle>
            {item.isbn ? bookNote[3] : movieNote[3]} 플랜
          </S.SmallTitle>
          <S.ContentsPlanBox style={{elevation: 5}}>
            <S.PlanContainer>
              <S.PlanSmallTitle>
                {item.isbn ? bookNote[4] : movieNote[4]} 기간
              </S.PlanSmallTitle>
              <S.PlanDateContainer>
                <S.PlanDateBox>
                  <S.PlanDateText>{item.startDate}</S.PlanDateText>
                  <S.PlanDateCategory>
                    <S.PlanDateWhiteText>시작</S.PlanDateWhiteText>
                  </S.PlanDateCategory>
                </S.PlanDateBox>
                <S.PlanDateBox>
                  <S.PlanDateText>
                    {item.finishDate ? item.finishDate : 'ㅡ'}
                  </S.PlanDateText>
                  <S.PlanDateCategory>
                    <S.PlanDateWhiteText>종료</S.PlanDateWhiteText>
                  </S.PlanDateCategory>
                </S.PlanDateBox>
                <S.PlanTodayDate>
                  <S.PlanTodayDateWhiteText>
                    {item.finishDate
                      ? Math.ceil(dayDiff / (1000 * 60 * 60 * 24)) + 1
                      : Math.ceil(TodayDiff / (1000 * 60 * 60 * 24))}
                  </S.PlanTodayDateWhiteText>
                </S.PlanTodayDate>
                <S.PlanTodayDateText>일 동안</S.PlanTodayDateText>
              </S.PlanDateContainer>
            </S.PlanContainer>
            <S.ProgressContainer>
              <S.PlanSmallTitle>
                {item.isbn ? bookNote[4] : movieNote[4]} 진행률
              </S.PlanSmallTitle>
              <S.PlanProgress>
                <S.CurrentPlanProgress percent={progressPercent} />
              </S.PlanProgress>
              <S.PercentContainer>
                <S.PercentText>{progressPercent}%</S.PercentText>
                <S.PercentText>
                  {item.currentNum}/{item.totalNum}{' '}
                  {item.isbn ? '페이지' : '분'}
                </S.PercentText>
              </S.PercentContainer>
            </S.ProgressContainer>
          </S.ContentsPlanBox>
        </S.ContentsPlan>
        <Memo memo={item.memo} category={item.isbn ? 'book' : 'movie'} />
      </S.NoteContainer>
    </>
  );
};
