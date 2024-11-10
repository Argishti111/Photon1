import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

function SettingsScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
      // onPress={() => }
      // style={styles.homeStyle}
      >
        <TouchableOpacity
          style={{backgroundColor: 'red'}}
          onPress={() => navigation.navigate('Chat' as never)}>
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default SettingsScreen;
