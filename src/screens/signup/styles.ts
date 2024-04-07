import {StyleSheet} from 'react-native';
import {COLORS} from '../../core/theme/colors';
import {AppFontSize, AppHeight, AppWidth} from '../../core/theme/dimensions';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
  },
  region: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: AppWidth.WIDTH_16,
  },
  textRegion: {
    fontSize: AppFontSize.SIZE_15,
    color: COLORS.gray_2,
    fontWeight: '400',
  },
  iconVietnam: {
    width: AppWidth.WIDTH_24,
    height: AppWidth.WIDTH_24,
    marginLeft: AppWidth.WIDTH_8,
  },
  logo: {
    width: AppWidth.WIDTH_86,
    aspectRatio: 86 / 88,
    alignSelf: 'center',
  },
  title: {
    marginVertical: AppHeight.HEIGHT_8,
    fontSize: AppFontSize.SIZE_21,
    color: COLORS.gray_2,
    alignSelf: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: AppWidth.WIDTH_32,
    marginVertical: AppHeight.HEIGHT_7,
    paddingHorizontal: AppWidth.WIDTH_16,
    paddingVertical: AppHeight.HEIGHT_14,
    backgroundColor: COLORS.gray_3,
    borderRadius: AppWidth.WIDTH_15,
  },
  iconInput: {
    width: AppWidth.WIDTH_24,
    height: AppWidth.WIDTH_24,
  },
  regionCode: {
    marginLeft: AppWidth.WIDTH_12,
    marginRight: AppWidth.WIDTH_6,
    fontSize: AppFontSize.SIZE_15,
    color: COLORS.gray_2,
  },
  iconArrow: {
    width: AppWidth.WIDTH_16,
    height: AppWidth.WIDTH_16,
  },
  dashVertical: {
    width: 1,
    height: '100%',
    backgroundColor: COLORS.gray_4,
    marginHorizontal: AppWidth.WIDTH_10,
  },
  phoneInput: {
    flexDirection: 'row',
    fontSize: AppFontSize.SIZE_16,
    color: COLORS.gray_1,
    flex: 1,
  },
  passwordInput: {
    flexDirection: 'row',
    fontSize: AppFontSize.SIZE_16,
    color: COLORS.gray_1,
    flex: 1,
    marginHorizontal: AppWidth.WIDTH_10,
  },
  iconEye: {
    width: AppWidth.WIDTH_20,
    height: AppWidth.WIDTH_20,
  },
  btnContinue: {
    marginHorizontal: AppWidth.WIDTH_32,
    backgroundColor: COLORS.blue_1,
    paddingVertical: AppHeight.HEIGHT_12,
    borderRadius: AppWidth.WIDTH_16,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: AppHeight.HEIGHT_10,
    marginBottom: AppHeight.HEIGHT_20,
  },
  continue: {
    fontSize: AppFontSize.SIZE_17,
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: '500',
  },

  optionText: {
    marginVertical: AppHeight.HEIGHT_10,
    fontSize: AppFontSize.SIZE_14,
    color: COLORS.gray_2,
    alignSelf: 'center',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: AppHeight.HEIGHT_10,
  },
  btnMid: {
    marginHorizontal: AppWidth.WIDTH_20,
  },
  iconLogo: {
    width: AppWidth.WIDTH_40,
    height: AppWidth.WIDTH_40,
  },
  hasAccount: {
    fontSize: AppFontSize.SIZE_14,
    color: COLORS.gray_2,
    alignSelf: 'center',
    marginTop: AppHeight.HEIGHT_168,
  },
  btnLogin: {
    marginVertical: AppHeight.HEIGHT_16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: AppWidth.WIDTH_32,
    borderRadius: AppWidth.WIDTH_16,
    paddingVertical: AppHeight.HEIGHT_12,
    borderWidth: 1,
    borderColor: COLORS.blue_1,
    backgroundColor: COLORS.white,
  },
  textLogin: {
    fontSize: AppFontSize.SIZE_17,
    color: COLORS.blue_1,
    fontWeight: '500',
  },
});

export default styles;
