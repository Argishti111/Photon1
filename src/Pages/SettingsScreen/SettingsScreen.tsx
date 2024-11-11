import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Header} from '../../Components';
import ChangeLanguage from '../../Components/ChangeLanguage/ChangeLanguage';
import BackIcon from '../../Icons/BackIcon';
import MinLogo from '../../Icons/MinLogo';
import {settingsStyles} from './settingsStyles';
import {useTranslation} from 'react-i18next';

function SettingsScreen() {
  const navigation = useNavigation();
  const {t} = useTranslation();

  return (
    <SafeAreaView style={settingsStyles.generalContainer}>
      <Header
        title={t('SETTINGS')}
        leftIcon={
          <TouchableOpacity
            onPress={() => navigation.navigate('Chat' as never)}>
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
        <ChangeLanguage title={t('LANGUAGE')} />
        <TouchableOpacity
          onPress={() => {}}
          style={settingsStyles.aboutContainer}>
          <Text style={settingsStyles.about}>{t('ABOUT')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default SettingsScreen;
