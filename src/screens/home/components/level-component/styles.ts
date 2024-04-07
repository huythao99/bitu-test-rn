import {StyleSheet} from 'react-native';
import {
  AppFontSize,
  AppHeight,
  AppWidth,
} from '../../../../core/theme/dimensions';
import {COLORS} from '../../../../core/theme/colors';

const styles = StyleSheet.create({
  container: {},
  bannerContainer: {
    paddingVertical: AppWidth.WIDTH_26,
  },
  cloudFirst: {
    position: 'absolute',
    left: AppWidth.WIDTH_16,
    width: AppWidth.WIDTH_84,
    aspectRatio: 82 / 45,
  },
  cloudSecond: {
    position: 'absolute',
    right: AppWidth.WIDTH_4,
    width: AppWidth.WIDTH_84,
    aspectRatio: 82 / 45,
    bottom: 0,
  },
  banner: {
    width: AppWidth.WIDTH_124,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: AppHeight.HEIGHT_10,
  },
  title: {
    fontSize: AppFontSize.SIZE_18,
    color: COLORS.gray_2,
    fontWeight: '500',
  },
  btnQuestion: {
    marginLeft: AppWidth.WIDTH_4,
  },
  iconQuestion: {
    width: AppWidth.WIDTH_18,
    height: AppWidth.WIDTH_18,
  },
  objectContainer: {
    marginHorizontal: AppWidth.WIDTH_16,
    backgroundColor: COLORS.white,
    borderRadius: AppWidth.WIDTH_16,
    paddingVertical: AppHeight.HEIGHT_12,
    paddingHorizontal: AppWidth.WIDTH_16,
  },
  objectTitle: {
    fontSize: AppFontSize.SIZE_15,
    color: COLORS.gray_2,
    fontWeight: '500',
  },
  iconTrue: {
    width: AppWidth.WIDTH_14,
    height: AppWidth.WIDTH_14,
    marginRight: AppWidth.WIDTH_6,
    marginTop: AppHeight.HEIGHT_2,
  },
  objectiveContentContainer: {
    paddingHorizontal: AppWidth.WIDTH_10,
    paddingVertical: AppHeight.HEIGHT_8,
  },
  objective: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: AppHeight.HEIGHT_5,
  },
  objectiveContent: {
    color: COLORS.gray_2,
    fontSize: AppFontSize.SIZE_14,
    fontWeight: '400',
    flex: 1,
  },
  courseBtn: {
    paddingHorizontal: AppWidth.WIDTH_24,
    paddingVertical: AppHeight.HEIGHT_10,
    borderRadius: AppWidth.WIDTH_28,
    borderWidth: 1,
    borderColor: COLORS.orange_1,
    marginTop: AppHeight.HEIGHT_18,
    alignSelf: 'center',
  },
  courseText: {
    fontSize: AppFontSize.SIZE_16,
    color: COLORS.orange_1,
    fontWeight: '500',
  },
  pathLeft: {
    position: 'absolute',
    width: AppWidth.WIDTH_30,
    aspectRatio: 30 / 114,
    top: 0,
    left: AppWidth.WIDTH_58,
  },
  pathRight: {
    position: 'absolute',
    width: AppWidth.WIDTH_30,
    aspectRatio: 30 / 114,
    top: 0,
    right: AppWidth.WIDTH_58,
    transform: [
      {
        rotateY: '180deg',
      },
    ],
  },
  comingSoonContainer: {
    paddingVertical: AppHeight.HEIGHT_4,
    paddingHorizontal: AppWidth.WIDTH_8,
    backgroundColor: COLORS.white,
    borderRadius: AppWidth.WIDTH_16,
    alignSelf: 'center',
  },
  comingSoon: {
    fontWeight: '400',
    fontSize: AppFontSize.SIZE_15,
    color: COLORS.gray_5,
  },
});
export default styles;
