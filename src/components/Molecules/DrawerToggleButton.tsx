import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {DrawerActions, NavigationProp} from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<any>;
};

const DrawerToggleButton: React.FC<Props> = ({navigation}) => {
  const handlePress = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Image
        source={require('../../assests/icons/drawer.png')}
        style={{width: 32, height: 32, marginLeft: 20}}
      />
    </TouchableOpacity>
  );
};

export default DrawerToggleButton;
