import {Dimensions, StyleSheet} from 'react-native';

export const logoScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31323d',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 27,
    // position: 'relative',
  },
  titleContainer: {
    alignItems: 'center',
  },
  linearContainer: {
    width: 150,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    paddingHorizontal: 16,
    paddingVertical: 8,
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
    width: Dimensions.get('window').width - 40,
    alignItems: 'center',
    marginBottom: 80,
  },
  startedBtnLinearContainer: {
    width: '80%',
    borderRadius: 12,
  },
  getStartedBtnText: {
    paddingVertical: 10,
    // backgroundColor: 'red',
    // width: 100,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
});
