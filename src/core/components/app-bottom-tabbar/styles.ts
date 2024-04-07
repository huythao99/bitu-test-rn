import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';
import {AppFontSize, AppHeight, AppWidth} from '../../theme/dimensions';

const styles = StyleSheet.create({
  viewWrap: {
    backgroundColor: COLORS.white,
    flex: 0,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    paddingTop: AppHeight.HEIGHT_8,
  },
  col: {
    alignItems: 'center',
  },
  btn: {
    flex: 1,
  },
  title: {
    fontSize: AppFontSize.SIZE_10,
    marginTop: AppHeight.HEIGHT_6,
  },
  icon: {
    width: AppWidth.WIDTH_20,
    height: AppWidth.WIDTH_20,
    resizeMode: 'cover',
  },
});
export default styles;
