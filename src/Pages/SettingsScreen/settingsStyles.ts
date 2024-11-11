import {StyleSheet} from 'react-native';

export const settingsStyles = StyleSheet.create({
  generalContainer: {
    flex: 1,
    backgroundColor: '#31323d',
    paddingVertical: 20,
  },
  container: {
    backgroundColor: '#31323d',
    paddingTop: 110,
  },
  aboutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    marginTop: 12,
  },
  about: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'ABeeZee-Regular',
  },
});
