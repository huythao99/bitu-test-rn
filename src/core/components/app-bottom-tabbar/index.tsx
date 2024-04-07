import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import AppSafeView from '../app-safe-view';
import styles from './styles';
import IMAGES from '../../assets';
import {COLORS} from '../../theme/colors';

const ICONS = [
  IMAGES.ic_training,
  IMAGES.ic_microphone,
  IMAGES.ic_group,
  IMAGES.ic_chat,
  IMAGES.ic_account,
];
export default function AppBottomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <AppSafeView
      style={styles.viewWrap}
      edge={{right: 'off', left: 'off', top: 'off'}}>
      <View style={styles.row}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            if (!isFocused) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <TouchableOpacity
              activeOpacity={0.8}
              key={index.toString()}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={styles.btn}>
              <View style={styles.col}>
                <Image
                  source={ICONS[index]}
                  style={styles.icon}
                  tintColor={isFocused ? COLORS.orange_1 : COLORS.gray_1}
                />
                <Text
                  style={[
                    {color: isFocused ? COLORS.orange_1 : COLORS.gray_1},
                    styles.title,
                  ]}>
                  {options.tabBarLabel?.toString()}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </AppSafeView>
  );
}
