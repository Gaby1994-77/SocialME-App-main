import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../pages/HomeScreen/HomeScreen';
import ProfileScreen from '../../pages/ProfileScreen/ProfileScreen';
import AddPost from '../../pages/AddPost/AddPost';
import {Image} from 'react-native';
import {tabStyles} from './TabNavigator.Style';
import DrawerToggleButton from '../../components/Molecules/DrawerToggleButton';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          headerTitle: 'SocialME',
          headerLeft: () => <DrawerToggleButton navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: tabStyles.tabBarStyle,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={({navigation}) => ({
          headerTitle: 'SocialME',
          headerLeft: () => <DrawerToggleButton navigation={navigation} />,
          headerShown: false,
          headerTitleAlign: 'center',

          tabBarIcon: () => (
            <Image
              source={require('../../assests/icons/home-button.png')}
              style={tabStyles.tabBarIcon}
            />
          ),
        })}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPost}
        options={({navigation}) => ({
          headerLeft: () => <DrawerToggleButton navigation={navigation} />,

          tabBarIcon: () => (
            <Image
              source={require('../../assests/icons/add.png')}
              style={tabStyles.tabBarIcon}
            />
          ),
        })}
        listeners={({navigation}) => ({
          tabPress: event => {
            event.preventDefault();
            navigation.navigate('AddPost', {selectPhoto: true});
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({navigation}) => ({
          headerTitle: 'Profile',
          headerLeft: () => <DrawerToggleButton navigation={navigation} />,
          headerShown: true,
          tabBarIcon: () => (
            <Image
              source={require('../../assests/icons/user.png')}
              style={tabStyles.tabBarIcon}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
