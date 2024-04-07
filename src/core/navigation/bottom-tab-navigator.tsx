/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {BottomTabParamList} from './types';
import HomeScreen from '../../screens/home';
import DailyTopicScreen from '../../screens/daily-topic';
import GroupTalkScreen from '../../screens/group-talk';
import ChatScreen from '../../screens/chat';
import AccountScreen from '../../screens/account';
import AppBottomTabBar from '../components/app-bottom-tabbar';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <AppBottomTabBar {...props} />}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Lộ trình',
        }}
      />
      <Tab.Screen
        name="DailyTopicScreen"
        component={DailyTopicScreen}
        options={{
          tabBarLabel: 'Daily Topic',
        }}
      />
      <Tab.Screen
        name="GroupTalkScreen"
        component={GroupTalkScreen}
        options={{
          tabBarLabel: 'Group Talk',
        }}
      />
      <Tab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          tabBarLabel: 'Chat',
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
        }}
      />
    </Tab.Navigator>
  );
};
