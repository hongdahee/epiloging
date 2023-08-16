import {IContainerProps} from '../../../types/container';
import * as S from './style';

export const Container = ({children}: IContainerProps) => {
  return <S.Container>{children}</S.Container>;
};
