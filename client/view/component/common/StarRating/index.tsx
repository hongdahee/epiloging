import * as S from './style';

export const StarRating = ({star}: {star: number}) => {
  const starArr = [1, 2, 3, 4, 5];
  const starCount = Math.floor(star);
  const isIntCount = Number.isInteger(star);

  return (
    <S.StarContainer>
      {starArr.map(count => (
        <S.StarImg
          key={count}
          source={
            starCount >= count
              ? require('../../../../assets/star.png')
              : !isIntCount && count === starCount + 1
              ? require('../../../../assets/home.png')
              : require('../../../../assets/graystar.png')
          }
        />
      ))}
    </S.StarContainer>
  );
};
