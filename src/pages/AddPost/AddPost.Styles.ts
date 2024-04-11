import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
  },
  input: {
    width: '92%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 5,
    marginVertical: 10,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 20,
  },
  selectedImage: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginVertical: 5,
  },
  selectPhotoButton: {
    backgroundColor: '#ddd',
  },
  cameraButton: {
    backgroundColor: '#ccc',
  },
  addButton: {
    backgroundColor: '#bbb',
  },
  closeButton: {
    position: 'absolute',
    right: 40,
    top: 2,
    backgroundColor: 'red',
    borderRadius: 20,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 20,
  },
  captionInput: {
    marginTop: 10,
  },
  selectPhotoButtonText: {
    color: '#000',
  },
  cameraButtonText: {
    color: '#000',
  },
  addButtonText: {
    color: '#000',
  },
  footer: {},
  textStyles: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  noPhotoSelectedContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
  },
});
