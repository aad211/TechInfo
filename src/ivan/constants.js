import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const SPACING = 20;
export const MARGIN = 20;

const w = width * 1;
export const CONSTANCE = {
  IMAGE_WIDTH: w,
  IMAGE_HEIGHT: w * 0.5,
  RADIUS: 30,
  SPACING,
  MARGIN,
  TOTAL_WIDTH: w + SPACING * 2,
};
