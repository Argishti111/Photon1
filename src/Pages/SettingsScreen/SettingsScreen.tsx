import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import React from 'react';
import styles from '../../Styles.ts';

function SettingsScreen({route}: any) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={route.params.isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={route.params.backgroundStyle.backgroundColor}
      />
      <View style={styles.homeStyle}>
        <Text>Settings</Text>
      </View>
    </SafeAreaView>
  );
}

export default SettingsScreen;
