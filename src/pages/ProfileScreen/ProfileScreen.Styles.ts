import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 60,
    alignSelf: 'center',
    marginTop: 35,
  },
  infoContainer: {
    margin: 25,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  infoTitle: {
    color: '#6d6d71',
    fontSize: 16,
  },
  infoContent: {
    color: '#000',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 5,
    width: '35%',
    alignItems: 'center',
    marginTop: 80,
    marginLeft: 135,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  editProfileButton: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 5,
    width: '35%',
    alignItems: 'center',
    marginTop: 85,
    marginLeft: 220,
  },
  editProfileButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
