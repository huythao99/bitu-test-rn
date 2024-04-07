import {StyleSheet} from 'react-native';
import {
  AppFontSize,
  AppHeight,
  AppWidth,
} from '../../../../core/theme/dimensions';
import {COLORS} from '../../../../core/theme/colors';

const styles = StyleSheet.create({
  container: {
    paddingVertical: AppHeight.HEIGHT_12,
    paddingHorizontal: AppWidth.WIDTH_16,
  },
  title: {
    fontWeight: '500',
    color: COLORS.gray_2,
    fontSize: AppFontSize.SIZE_17,
  },
  teacherContainer: {
    paddingVertical: AppHeight.HEIGHT_12,
  },
});

export default styles;
