import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../../Components';
import MinLogo from '../../Icons/MinLogo';
import BackIcon from '../../Icons/BackIcon';
import {settingsStyles} from './settingsStyles';

function SettingsScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={settingsStyles.generalContainer}>
      <Header
        title="Settings"
        leftIcon={
          <TouchableOpacity>
            <BackIcon />
          </TouchableOpacity>
        }
        rightIcon={
          <View style={{alignItems: 'center', marginLeft: 10}}>
            <MinLogo />
          </View>
        }
      />
      <View style={settingsStyles.container}>
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
