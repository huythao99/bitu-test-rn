import {createNavigationContainerRef} from '@react-navigation/native';
import {MainStackParamList} from './types';
export const navigationRef = createNavigationContainerRef<MainStackParamList>();

export function navigate(name: any, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
