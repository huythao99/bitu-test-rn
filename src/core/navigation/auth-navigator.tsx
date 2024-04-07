import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from './types';

import * as React from 'react';
import SignUpScreen from '../../screens/signup';
const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
