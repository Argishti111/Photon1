import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import SvgLogo from '../../Icons/Logo';
import {logoScreenStyles} from './logoScreenStyles';
import {useTranslation} from 'react-i18next';

export default function LogoScreen() {
  const navigaton = useNavigation();
  const {t} = useTranslation();
  const handleClickStartedBtn = () => navigaton.navigate('Chat' as never);

  return (
    <SafeAreaView style={logoScreenStyles.container}>
      <View style={logoScreenStyles.header}>
        <View style={logoScreenStyles.titleContainer}>
          <LinearGradient
            colors={['#257460', '#16A27F']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={logoScreenStyles.linearContainer}>
            <Text style={logoScreenStyles.title}>{t('PERSONAL_GPT')}</Text>
          </LinearGradient>
        </View>
        <View>
          <SvgLogo />
        </View>
      </View>

      <TouchableOpacity
        onPress={handleClickStartedBtn}
        style={logoScreenStyles.startedBtnContainer}>
        <LinearGradient
          colors={['rgba(22, 162, 127, 0.64)', 'rgba(11, 255, 194, 0.64)']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={logoScreenStyles.startedBtnLinearContainer}>
          <Text style={logoScreenStyles.getStartedBtnText}>
            {t('GET_STARTED')}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
