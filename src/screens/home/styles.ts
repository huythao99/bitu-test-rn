import {StyleSheet} from 'react-native';
import {AppFontSize, AppHeight, AppWidth} from '../../core/theme/dimensions';
import {COLORS} from '../../core/theme/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.brown_1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: AppWidth.WIDTH_16,
    paddingVertical: AppWidth.WIDTH_8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: AppWidth.WIDTH_30,
    aspectRatio: 30 / 32,
  },
  bitu: {
    fontSize: AppFontSize.SIZE_18,
    fontWeight: '900',
    color: COLORS.gray_2,
    marginLeft: AppWidth.WIDTH_8,
  },
  icon: {
    width: AppWidth.WIDTH_24,
    height: AppWidth.WIDTH_24,
  },
  supportContainer: {
    marginRight: AppWidth.WIDTH_20,
  },
  support: {
    fontWeight: '400',
    color: COLORS.gray_2,
    fontSize: AppFontSize.SIZE_15,
    marginLeft: AppWidth.WIDTH_6,
  },
  circleContainer: {
    position: 'absolute',
    width: AppWidth.WIDTH_16,
    height: AppWidth.WIDTH_16,
    backgroundColor: COLORS.orange_1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: AppWidth.WIDTH_8,
    right: -AppWidth.WIDTH_4,
    top: -AppWidth.WIDTH_8,
  },
  textCircle: {
    fontSize: AppFontSize.SIZE_10,
    color: COLORS.white,
  },
  flat: {
    flexGrow: 1,
    paddingBottom: AppHeight.HEIGHT_24,
  },
});

export default styles;
