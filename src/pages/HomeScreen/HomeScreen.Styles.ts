import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flatList: {
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    marginTop: 15,
    marginLeft: 12,
    marginRight: 6,
    marginBottom: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 10,
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  date: {
    color: 'gray',
  },

  deleteButton: {
    fontSize: 20,
    color: 'red',
    paddingHorizontal: 10,
  },

  deleteButtonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  deleteButtonText: {
    color: 'red',
    fontSize: 16,
  },
  tabBarIcon: {
    width: 25,
    height: 25,
  },
  descriptionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginLeft: -10,
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: 'gray',
  },
});

export default styles;
