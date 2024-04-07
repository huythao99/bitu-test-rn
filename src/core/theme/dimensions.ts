import {Dimensions, PixelRatio, Platform} from 'react-native';
import {initialWindowMetrics} from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('screen');

export const WIDTH = width;
export const HEIGHT = height;

const WIDTH_FIGMA = 375;
const HEIGHT_FIGMA = 812;

const scale = WIDTH / 320;

export function calculateWidth(w: number) {
  return (w * WIDTH) / WIDTH_FIGMA;
}

export function calculateHeight(h: number) {
  return (h * HEIGHT) / HEIGHT_FIGMA;
}

export function normalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const isIos = Platform.OS === 'ios';

export const isAndroid = Platform.OS === 'android';

export const keyboardVerticalOffset = Platform.OS === 'ios' ? 50 : 0;

export const safeTopPadding = isIos ? initialWindowMetrics?.insets.top : 0;

export enum AppWidth {
  WIDTH_2_5 = calculateWidth(2.5),
  WIDTH_3 = calculateWidth(3),
  WIDTH_4 = calculateWidth(4),
  WIDTH_5 = calculateWidth(5),
  WIDTH_5_7_5 = calculateWidth(5.75),
  WIDTH_6 = calculateWidth(6),
  WIDTH_7 = calculateWidth(7),
  WIDTH_8 = calculateWidth(8),
  WIDTH_8_5 = calculateWidth(8.5),

  WIDTH_10 = calculateWidth(10),
  WIDTH_11 = calculateWidth(11),
  WIDTH_12 = calculateWidth(12),
  WIDTH_13 = calculateWidth(13),
  WIDTH_14 = calculateWidth(14),
  WIDTH_15 = calculateWidth(15),
  WIDTH_16 = calculateWidth(16),
  WIDTH_17 = calculateWidth(17),
  WIDTH_18 = calculateWidth(18),

  WIDTH_20 = calculateWidth(20),
  WIDTH_21 = calculateWidth(21),

  WIDTH_22 = calculateWidth(22),
  WIDTH_24 = calculateWidth(24),
  WIDTH_25 = calculateWidth(25),
  WIDTH_26 = calculateWidth(26),
  WIDTH_28 = calculateWidth(28),

  WIDTH_30 = calculateWidth(30),
  WIDTH_32 = calculateWidth(32),
  WIDTH_33 = calculateWidth(33),
  WIDTH_34_5 = calculateWidth(34.5),
  WIDTH_35 = calculateWidth(35),
  WIDTH_36 = calculateWidth(36),

  WIDTH_40 = calculateWidth(40),
  WIDTH_42 = calculateWidth(42),
  WIDTH_44 = calculateWidth(44),
  WIDTH_45 = calculateWidth(45),
  WIDTH_48 = calculateWidth(48),

  WIDTH_50 = calculateWidth(50),
  WIDTH_52 = calculateWidth(52),
  WIDTH_58 = calculateWidth(58),

  WIDTH_60 = calculateWidth(60),
  WIDTH_66 = calculateWidth(66),

  WIDTH_70 = calculateWidth(70),
  WIDTH_71 = calculateWidth(71),

  WIDTH_80 = calculateWidth(80),
  WIDTH_83 = calculateWidth(83),
  WIDTH_84 = calculateWidth(84),
  WIDTH_86 = calculateWidth(86),
  WIDTH_88 = calculateWidth(88),

  WIDTH_103 = calculateWidth(103),

  WIDTH_110 = calculateWidth(110),

  WIDTH_120 = calculateWidth(120),

  WIDTH_124 = calculateWidth(124),

  WIDTH_140 = calculateWidth(140),

  WIDTH_150 = calculateWidth(150),

  WIDTH_200 = calculateWidth(200),

  WIDTH_222 = calculateWidth(222),

  WIDTH_293 = calculateWidth(293),

  WIDTH_343 = calculateWidth(343),
}

export enum AppHeight {
  HEIGHT_2 = calculateHeight(2),
  HEIGHT_4 = calculateHeight(4),
  HEIGHT_5 = calculateHeight(5),
  HEIGHT_5_5 = calculateHeight(5.5),
  HEIGHT_6 = calculateHeight(6),
  HEIGHT_7 = calculateHeight(7),
  HEIGHT_8 = calculateHeight(8),
  HEIGHT_9 = calculateHeight(9),

  HEIGHT_10 = calculateHeight(10),
  HEIGHT_11 = calculateHeight(11),
  HEIGHT_12 = calculateHeight(12),
  HEIGHT_13 = calculateHeight(13),
  HEIGHT_14 = calculateHeight(14),
  HEIGHT_15 = calculateHeight(15),
  HEIGHT_16 = calculateHeight(16),
  HEIGHT_18 = calculateHeight(18),

  HEIGHT_20 = calculateHeight(20),
  HEIGHT_22 = calculateHeight(22),
  HEIGHT_24 = calculateHeight(24),
  HEIGHT_25 = calculateHeight(25),
  HEIGHT_27 = calculateHeight(27),
  HEIGHT_28 = calculateHeight(28),

  HEIGHT_30 = calculateHeight(30),
  HEIGHT_32 = calculateHeight(32),
  HEIGHT_38 = calculateHeight(38),

  HEIGHT_40 = calculateHeight(40),

  HEIGHT_60 = calculateHeight(60),

  HEIGHT_70 = calculateHeight(70),
  HEIGHT_75 = calculateHeight(75),

  HEIGHT_150 = calculateHeight(150),

  HEIGHT_168 = calculateHeight(168),

  HEIGHT_200 = calculateHeight(200),
}

export enum AppFontSize {
  SIZE_9_3 = normalize(9.3),

  SIZE_10 = normalize(10),
  SIZE_11 = normalize(11),
  SIZE_12 = normalize(12),
  SIZE_12_5 = normalize(12.5),
  SIZE_13 = normalize(13),
  SIZE_14 = normalize(14),
  SIZE_15 = normalize(15),
  SIZE_16 = normalize(16),
  SIZE_17 = normalize(17),
  SIZE_18 = normalize(18),
  SIZE_19 = normalize(19),

  SIZE_20 = normalize(20),
  SIZE_21 = normalize(21),
  SIZE_24 = normalize(24),

  SIZE_32 = normalize(32),

  SIZE_60 = normalize(60),
}
