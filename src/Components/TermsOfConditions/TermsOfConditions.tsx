import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function TermsAndPrivacyPolicy() {
  const {t} = useTranslation();
  const handleClickTermsAndPrivacyPolicy = () => {
    Linking.openURL('https://google.com');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodyContainer}>
        <TouchableOpacity onPress={handleClickTermsAndPrivacyPolicy}>
          <Text style={styles.items}>{t('TERMS_OF_USE')} </Text>
        </TouchableOpacity>
        <View style={styles.termsOfConditions}>
          <TouchableOpacity onPress={handleClickTermsAndPrivacyPolicy}>
            <Text style={styles.items}>{t('PRIVACY_POLICY')} </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#31323d',
    alignItems: 'center',
  },

  bodyContainer: {
    flexDirection: 'row',
    paddingBottom: 20,
  },

  items: {
    color: '#797a81',
    letterSpacing: 2,
    fontFamily: 'ABeeZee-Regular',
  },
  termsOfConditions: {
    borderStyle: 'solid',
    borderLeftWidth: 2,
    paddingLeft: 8,
    marginLeft: 4,
    borderLeftColor: '#797a81',
  },
});
