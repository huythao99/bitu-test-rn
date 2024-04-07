import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigator} from './src/core/navigation/main-navigator';
import {navigationRef} from './src/core/navigation/root-navigation';

export default function AppNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigator />
    </NavigationContainer>
  );
}
