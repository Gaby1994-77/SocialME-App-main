import React from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {removeToken} from '../../redux/authActions';
import styles from './ProfileScreen.Styles';
import {RootState} from '../../redux/store';

const ProfileScreen: React.FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.auth.userData);

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

  return (
    <View style={styles.container}>
      <Image source={{uri: userData.image}} style={styles.avatar} />
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoTitle}>Username</Text>
          <Text style={styles.infoContent}>{userData.username}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoTitle}>User Id</Text>
          <Text style={styles.infoContent}>{userData.id}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoTitle}>First Name</Text>
          <Text style={styles.infoContent}>{userData.firstName}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoTitle}>Last Name</Text>
          <Text style={styles.infoContent}>{userData.lastName}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoTitle}>Email</Text>
          <Text style={styles.infoContent}>{userData.email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoTitle}>Gender</Text>
          <Text style={styles.infoContent}>{userData.gender}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogoutPress}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
