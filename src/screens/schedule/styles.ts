import {StyleSheet} from 'react-native';
import {AppFontSize, AppHeight, AppWidth} from '../../core/theme/dimensions';
import {COLORS} from '../../core/theme/colors';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: AppWidth.WIDTH_16,
    paddingVertical: AppHeight.HEIGHT_12,
  },
  iconBack: {
    width: AppWidth.WIDTH_24,
    height: AppWidth.WIDTH_24,
  },
  title: {
    marginLeft: AppWidth.WIDTH_12,
    fontSize: AppFontSize.SIZE_17,
    fontWeight: '500',
    color: COLORS.gray_1,
  },
  noteContainer: {
    backgroundColor: COLORS.blue_2,
    marginHorizontal: AppWidth.WIDTH_16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: AppWidth.WIDTH_12,
    paddingVertical: AppHeight.HEIGHT_12,
    borderRadius: AppWidth.WIDTH_8,
    marginVertical: AppHeight.HEIGHT_8,
  },
  dot: {
    width: AppWidth.WIDTH_4,
    aspectRatio: 1,
    borderRadius: AppWidth.WIDTH_4,
    backgroundColor: COLORS.gray_1,
    marginTop: AppHeight.HEIGHT_8,
  },
  noteText: {
    fontSize: AppFontSize.SIZE_15,
    fontWeight: '400',
    color: COLORS.gray_1,
    marginHorizontal: AppWidth.WIDTH_12,
  },
  indicatorContainer: {
    marginVertical: AppHeight.HEIGHT_8,
    marginHorizontal: AppWidth.WIDTH_16,
  },
  indicator: {
    paddingHorizontal: AppWidth.WIDTH_12,
    paddingVertical: AppHeight.HEIGHT_12,
    borderRadius: AppWidth.WIDTH_8,
    borderWidth: 1,
    borderColor: COLORS.gray_7,
    marginRight: AppWidth.WIDTH_12,
  },
  textIndicator: {
    fontWeight: '500',
    fontSize: AppFontSize.SIZE_16,
    color: COLORS.gray_1,
  },
  titleDay: {
    fontWeight: '500',
    fontSize: AppFontSize.SIZE_16,
    color: COLORS.gray_1,
    marginHorizontal: AppWidth.WIDTH_16,
    marginVertical: AppHeight.HEIGHT_8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: AppWidth.WIDTH_16,
    paddingVertical: AppHeight.HEIGHT_12,
    borderRadius: AppWidth.WIDTH_8,
    borderWidth: 1,
    borderColor: COLORS.gray_7,
    marginVertical: AppHeight.HEIGHT_8,
  },
  textItem: {
    fontWeight: '500',
    fontSize: AppFontSize.SIZE_16,
    color: COLORS.gray_1,
  },
  btnBooking: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.blue_1,
    marginVertical: AppHeight.HEIGHT_22,
    marginHorizontal: AppWidth.WIDTH_16,
    borderRadius: AppWidth.WIDTH_16,
    paddingVertical: AppHeight.HEIGHT_16,
  },
  textBooking: {
    fontWeight: '500',
    fontSize: AppFontSize.SIZE_16,
    color: COLORS.white,
  },
});

export default styles;
