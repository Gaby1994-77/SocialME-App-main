import React from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import {drawerItems} from '../atoms/DrawerItems';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useDispatch} from 'react-redux';
import {removeToken} from '../../redux/authActions';

type DrawerItemKeyType = keyof typeof drawerItems;

type Props = {
  navigation: DrawerNavigationProp<{}>;
};

const CustomDrawerContent: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();

  const handleLogoutPress = () => {
    Alert.alert(
      'Are you sure you want to log out?',
      '',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Log Out',
          onPress: () => {
            dispatch(removeToken());
            console.log('Logged out');
          },
        },
      ],
      {cancelable: false},
    );
  };

  const handlePress = (screenName: DrawerItemKeyType) => {
    navigation.navigate(screenName as never);
  };

  return (
    <View>
      <View style={{alignItems: 'center', marginBottom: 20}}>
        <Image
          source={require('../../assests/drawer/user.png')}
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            marginBottom: 20,
            marginTop: 25,
          }}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
          Username
        </Text>
      </View>
      {drawerItems.map((item, index) => (
        <DrawerItem
          key={index}
          label={item.label}
          onPress={() => handlePress(item.screenName as DrawerItemKeyType)}
          icon={() => (
            <Image source={item.Image} style={{width: 24, height: 24}} />
          )}
        />
      ))}
      <DrawerItem
        label="Logout"
        onPress={handleLogoutPress}
        icon={() => (
          <Image
            source={require('../../assests/drawer/logout.png')}
            style={{width: 24, height: 24}}
          />
        )}
      />
    </View>
  );
};

export default CustomDrawerContent;
