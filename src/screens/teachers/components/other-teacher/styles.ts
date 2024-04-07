import {StyleSheet} from 'react-native';
import {AppHeight, AppWidth} from '../../../../core/theme/dimensions';
import {COLORS} from '../../../../core/theme/colors';

const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: AppWidth.WIDTH_16,
    borderBottomRightRadius: AppWidth.WIDTH_16,
    borderTopLeftRadius: AppWidth.WIDTH_8,
    borderTopRightRadius: AppWidth.WIDTH_8,
    backgroundColor: COLORS.white,
    marginHorizontal: AppWidth.WIDTH_16,
    marginVertical: AppHeight.HEIGHT_8,
  },
  banner: {
    width: '100%',
    aspectRatio: 343 / 190,
    borderRadius: AppWidth.WIDTH_8,
  },

  iconPlay: {
    width: AppWidth.WIDTH_24,
    aspectRatio: 1,
    position: 'absolute',
    bottom: AppWidth.WIDTH_14,
    left: AppWidth.WIDTH_28,
  },
});

export default styles;
