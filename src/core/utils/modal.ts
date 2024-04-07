import React from 'react';
import {AppLoadingRef} from '../types/app-loading';
import {Alert} from 'react-native';

export const appLoadingRef = React.createRef<AppLoadingRef>();

export const showAlerMessage = (title: string, message: string) => {
  Alert.alert(title, message);
};
