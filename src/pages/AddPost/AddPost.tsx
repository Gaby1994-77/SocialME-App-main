import React, {useEffect, useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  Text,
  ScrollView,
  Dimensions,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './AddPost.Styles';
import axios from 'axios';
import notifee from '@notifee/react-native';
import RootState from '../../redux/store';

type RootStateType = typeof RootState;

// Define sendLocalNotification function
const sendLocalNotification = async (imageUri: string) => {
  try {
    await notifee.displayNotification({
      title: 'Image Uploaded',
      body: 'Your image has been successfully uploaded!',
      android: {
        channelId: 'default',
        pressAction: {
          id: 'default',
          launchActivity: 'default',
          data: {id: imageUri},
        },
      },
    });
  } catch (error) {
    console.error('Error displaying notification:', error);
  }
};

const AddPost: React.FC = () => {
  const [description, setDescription] = useState<string>('');
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [cameraPhoto, setCameraPhoto] = useState<string | null>(null);
  const username = useSelector(
    (state: RootStateType) => state.auth.user?.username,
  );

  const requestGalleryPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Gallery Permission',
          message: 'App needs access to your gallery',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Gallery permission granted');
      } else {
        console.log('Gallery permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestCameraPermission();
    requestGalleryPermission();
  }, []);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs access to your camera',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission granted');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const selectPhoto = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
      maxWidth: 0,
      maxHeight: 0,
    });

    if (!result.didCancel && !result.errorCode) {
      const uri = result.assets && result.assets[0].uri;
      if (uri) {
        setPhotoUri(uri);
        setCameraPhoto(null);
      }
    }
  };

  const openCamera = async () => {
    try {
      const result = await launchCamera({
        mediaType: 'photo',
        quality: 1,
      });

      if (!result.didCancel && !result.errorCode) {
        const uri = result.assets && result.assets[0].uri;
        if (uri) {
          setPhotoUri(null);
          setCameraPhoto(uri);
        }
      } else {
        console.log(
          'Error opening camera:',
          result.errorCode,
          result.errorMessage,
        );
        if (Platform.OS === 'ios') {
          console.log('iOS specific error:', result.errorMessage);
        }
      }
    } catch (error) {
      console.error('Error opening camera:', error);
    }
  };

  const handleAddPost = async () => {
    if (!photoUri && !cameraPhoto) {
      Alert.alert('Incomplete', 'Please select a photo');
      return;
    }

    const data = {
      id: '',
      username: username,
      description: description.trim(),
      path: photoUri || cameraPhoto || '',
      date: new Date().toISOString(),
    };

    try {
      await axios.post('https://6611592395fdb62f24ecfdec.mockapi.io/Me', data);
      Alert.alert('Success', 'Post added successfully');
      setDescription('');
      setPhotoUri(null);
      setCameraPhoto(null);

      // Send local notification after post added
      await sendLocalNotification(data.path || '');
    } catch (error) {
      Alert.alert('Error', 'Failed to upload Post');
    }
  };

  const handleDeletePhoto = () => {
    setPhotoUri(null);
    setCameraPhoto(null);
  };

  Dimensions.get('window');

  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        {photoUri || cameraPhoto ? (
          <View style={{position: 'relative'}}>
            <Image
              source={{uri: photoUri || cameraPhoto || 'default-uri'}}
              style={{...styles.selectedImage, width: '100%'}}
            />
            <TouchableOpacity
              onPress={handleDeletePhoto}
              style={styles.closeButton}>
              <Text style={styles.closeButtonText}> X </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              ...styles.selectedImage,
              ...styles.noPhotoSelectedContainer,
            }}>
            <Text style={styles.textStyles}>Never underestimate</Text>
            <Text style={styles.textStyles}>the empowering effect</Text>
            <Text style={styles.textStyles}>of human connection</Text>
          </View>
        )}
      </ScrollView>
      <View style={styles.footer}>
        <TextInput
          placeholder="Add #Caption"
          value={description}
          onChangeText={setDescription}
          style={[styles.input, styles.captionInput]}
          numberOfLines={4}
          returnKeyType="send"
        />
        <TouchableOpacity
          onPress={selectPhoto}
          style={[styles.button, styles.selectPhotoButton]}>
          <Text style={[styles.addButtonText, styles.selectPhotoButtonText]}>
            Select Photo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={openCamera}
          style={[styles.button, styles.cameraButton]}>
          <Text style={[styles.addButtonText, styles.cameraButtonText]}>
            Open Camera
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleAddPost}
          style={[styles.button, styles.addButton]}>
          <Text style={[styles.addButtonText, styles.addButtonText]}>
            Add Post
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddPost;
