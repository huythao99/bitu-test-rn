/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {EdgeMode, useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {COLORS} from '../../theme/colors';

interface AppSafeViewProps {
  children: React.ReactNode;
  edge?: {
    top?: EdgeMode;
    right?: EdgeMode;
    bottom?: EdgeMode;
    left?: EdgeMode;
  };
  style?: ViewStyle;
}

export default function AppSafeView(props: AppSafeViewProps) {
  const {edge} = props;
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          paddingBottom: edge?.bottom === 'off' ? 0 : insets.bottom,
          paddingTop: edge?.top === 'off' ? 0 : insets.top,
          paddingLeft: edge?.left === 'off' ? 0 : insets.left,
          paddingRight: edge?.right === 'off' ? 0 : insets.right,
        },
        styles.container,
        props.style,
      ]}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
