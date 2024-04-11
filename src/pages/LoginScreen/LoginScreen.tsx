import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {setToken, setUserData} from '../../redux/authActions';
import styles from './LoginScreen.Styles';

const LoginScreen = () => {
  const [username, setUsername] = useState('kminchelle');
  const [password, setPassword] = useState('0lelplR');
  const dispatch = useDispatch();

  const authenticateUser = async (
    username: string,
    password: string,
    dispatch: any,
  ) => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const {token, ...userData} = await response.json();
      await AsyncStorage.setItem('userToken', token);
      dispatch(setToken(token));
      dispatch(setUserData(userData));
    } catch (error) {
      let errorMessage = 'An unexpected error occurred';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      Alert.alert('Login Failed', errorMessage);
    }
  };

  const handleLogin = () => {
    authenticateUser(username, password, dispatch);
  };

  return (
    <ImageBackground
      source={require('../../assests/images/background.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome To SocialME</Text>
        <TextInput
          style={styles.input}
          placeholder="username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
