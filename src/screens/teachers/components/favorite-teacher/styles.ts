import {StyleSheet} from 'react-native';
import {
  AppFontSize,
  AppHeight,
  AppWidth,
} from '../../../../core/theme/dimensions';
import {COLORS} from '../../../../core/theme/colors';

const styles = StyleSheet.create({
  container: {
    borderRadius: AppWidth.WIDTH_16,
    backgroundColor: COLORS.white,
    paddingHorizontal: AppWidth.WIDTH_16,
    paddingVertical: AppHeight.HEIGHT_16,
    marginVertical: AppHeight.HEIGHT_8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {},
  avatar: {
    width: AppWidth.WIDTH_80,
    aspectRatio: 1,
    borderRadius: AppWidth.WIDTH_40,
  },
  country: {
    borderWidth: 1,
    borderColor: COLORS.white,
    width: AppWidth.WIDTH_24,
    aspectRatio: 1,
    borderRadius: AppWidth.WIDTH_12,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  infoContainer: {
    marginLeft: AppWidth.WIDTH_12,
    flex: 1,
  },
  name: {
    fontSize: AppFontSize.SIZE_17,
    fontWeight: '500',
    color: COLORS.gray_2,
  },
  status: {
    marginTop: AppHeight.HEIGHT_4,
    fontWeight: '400',
    fontSize: AppFontSize.SIZE_13,
  },
  optionContainer: {
    alignItems: 'flex-end',
    flex: 1.5,
  },
  btnStart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: AppHeight.HEIGHT_8,
    borderRadius: AppWidth.WIDTH_24,
    backgroundColor: COLORS.orange_1,
    marginBottom: AppHeight.HEIGHT_12,
    width: '100%',
  },
  btnSchedule: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingVertical: AppHeight.HEIGHT_8,
    borderRadius: AppWidth.WIDTH_24,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.gray_2,
    width: '100%',
  },
  iconStart: {
    width: AppWidth.WIDTH_20,
    height: AppWidth.WIDTH_20,
  },
  iconCalendar: {
    width: AppWidth.WIDTH_16,
    height: AppWidth.WIDTH_16,
  },
  textStart: {
    fontWeight: '500',
    color: COLORS.white,
    fontSize: AppFontSize.SIZE_15,
    marginLeft: AppWidth.WIDTH_6,
  },
  textSchedule: {
    fontWeight: '400',
    color: COLORS.gray_2,
    fontSize: AppFontSize.SIZE_15,
    marginLeft: AppWidth.WIDTH_6,
  },
});

export default styles;
