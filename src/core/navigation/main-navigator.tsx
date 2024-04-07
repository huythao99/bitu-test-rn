import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {MainStackParamList} from './types';
import {AuthNavigator} from './auth-navigator';
import {BottomTabNavigator} from './bottom-tab-navigator';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigator = () => {
  const [isSignedIn, setIsSignedIn] = React.useState(false);

  // Handle user state changes
  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    console.log('user', user !== null);
    setIsSignedIn(user !== null);
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!isSignedIn ? (
        <Stack.Screen
          name="AuthNavigator"
          component={AuthNavigator}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <Stack.Screen
          name="BottomTab"
          component={BottomTabNavigator}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Stack.Navigator>
  );
};
