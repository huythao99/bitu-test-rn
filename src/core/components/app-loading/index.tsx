/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {COLORS} from '../../theme/colors';
import {AppLoadingProps, AppLoadingRef} from '../../types/app-loading';
import {AppWidth} from '../../theme/dimensions';

export const AppLoading = React.forwardRef<
  AppLoadingRef | undefined,
  AppLoadingProps
>((_, ref) => {
  const [visible, setVisible] = React.useState(false);

  React.useImperativeHandle(ref, () => ({
    showLoading: () => {
      setVisible(true);
    },
    hideLoading: () => {
      setVisible(false);
    },
  }));

  return (
    <View style={[styles.container, {zIndex: visible ? 99 : 0}]}>
      <ActivityIndicator size={'large'} color={COLORS.blue_1} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.transparent,
  },
  dot: {
    width: AppWidth.WIDTH_25,
    height: AppWidth.WIDTH_25,
    borderRadius: AppWidth.WIDTH_15,
    backgroundColor: COLORS.gray_3,
    position: 'absolute',
  },
});
