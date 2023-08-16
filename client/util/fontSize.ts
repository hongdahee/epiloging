import {PixelRatio} from 'react-native';

export const font = (size: number) => {
  return size / PixelRatio.getFontScale();
};
