import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import AppNavigator from './AppNavigator';
import PushNotification from 'react-native-push-notification';
import DrawerNavigation from './DrawerNavigator/DrawerNavigator';

const MainNavigation = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const isAuthenticated = token !== null;

  const createDefaultNotificationChannel = () => {
    PushNotification.createChannel(
      {
        channelId: 'default',
        channelName: 'Default Channel',
        channelDescription: 'Default notification channel',
        soundName: 'default',
        importance: 4,
        vibrate: true,
      },
      () => '',
    );
  };

  useEffect(() => {
    createDefaultNotificationChannel();
  }, []);

  return (
    <NavigationContainer>
      {isAuthenticated ? <DrawerNavigation /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigation;
