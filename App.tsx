/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './AppNavigator';
import {AppLoading} from './src/core/components/app-loading';
import {appLoadingRef} from './src/core/utils/modal';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider style={styles.container}>
      <AppLoading ref={appLoadingRef} />
      <AppNavigator />
    </SafeAreaProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
