import {StyleSheet} from 'react-native';
import {
  AppFontSize,
  AppHeight,
  AppWidth,
} from '../../../../core/theme/dimensions';
import {COLORS} from '../../../../core/theme/colors';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: AppWidth.WIDTH_16,
    paddingVertical: AppHeight.HEIGHT_15,
  },
  banner: {
    width: AppWidth.WIDTH_343,
    aspectRatio: 343 / 162,
    borderRadius: AppWidth.WIDTH_15,
    alignSelf: 'center',
  },
  title: {
    fontWeight: '400',
    fontSize: AppFontSize.SIZE_24,
    color: COLORS.gray_2,
    marginTop: AppHeight.HEIGHT_15,
    alignSelf: 'center',
  },
});

export default styles;
