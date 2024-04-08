import {NavigatorScreenParams} from '@react-navigation/native';
import {IOtherTeacher, ITeacher} from '../../types/teacher-response';

export type AuthStackParamList = {
  SignUpScreen: undefined;
};

export type BottomTabParamList = {
  HomeScreen: undefined;
  DailyTopicScreen: undefined;
  GroupTalkScreen: undefined;
  ChatScreen: undefined;
  AccountScreen: undefined;
};

export type MainStackParamList = {
  BottomTab: NavigatorScreenParams<BottomTabParamList>;
  AuthNavigator: undefined;
  TeachersScreen: undefined;
  ScheduleScreen: {
    teacher: IOtherTeacher | ITeacher;
  };
};
