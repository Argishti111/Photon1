import {Dimensions, StyleSheet} from 'react-native';

export const logoScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31323d',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 27,
    // position: 'relative',
  },
  titleContainer: {
    alignItems: 'center',
  },
  linearContainer: {
    width: 150,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 100,
    backgroundColor: '#4c63ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
    width: 180,
  },
  header: {
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  getStartedBtn: {
    backgroundColor: 'blue',
    // position: 'absolute',
    marginBottom: 100,
  },
  startedBtnContainer: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    marginBottom: 80,
  },
  startedBtnLinearContainer: {
    width: '80%',
    borderRadius: 12,
    paddingVertical: 10,
  },
  getStartedBtnText: {
    // backgroundColor: 'red',
    // width: 100,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
});