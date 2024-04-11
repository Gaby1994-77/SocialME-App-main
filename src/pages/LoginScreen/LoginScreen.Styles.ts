import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 45,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 55,
    color: '#8B0A8B',
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 5,
    width: '50%',
    alignItems: 'center',
    marginTop: 150,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
  },
  footerText: {
    color: 'white',
    fontSize: 16,
    padding: 10,
  },
});
