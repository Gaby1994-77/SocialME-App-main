import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from '../../components/Molecules/CustomDrawerContent';
import TabNavigation from '../TabNavigator/TabNavigator';
import AddPost from '../../pages/AddPost/AddPost';
import ProfileScreen from '../../pages/ProfileScreen/ProfileScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Tab"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Tab"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="Add Post" component={AddPost} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
