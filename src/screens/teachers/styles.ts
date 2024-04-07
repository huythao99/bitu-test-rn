import {StyleSheet} from 'react-native';
import {AppHeight, AppWidth} from '../../core/theme/dimensions';
import {COLORS} from '../../core/theme/colors';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: AppWidth.WIDTH_16,
    paddingVertical: AppHeight.HEIGHT_12,
  },
  iconClose: {
    width: AppWidth.WIDTH_24,
    height: AppWidth.WIDTH_24,
  },
  title: {
    fontSize: AppWidth.WIDTH_17,
    fontWeight: '500',
    color: COLORS.gray_2,
    marginLeft: AppWidth.WIDTH_12,
  },
  flat: {
    flexGrow: 1,
    backgroundColor: COLORS.gray_6,
  },
});

export default styles;
