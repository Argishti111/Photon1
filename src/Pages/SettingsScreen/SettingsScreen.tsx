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
import ChangeLanguage from '../../Components/ChangeLanguage/ChangeLanguage';

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
        <ChangeLanguage />
      </View>
    </SafeAreaView>
  );
}

export default SettingsScreen;
