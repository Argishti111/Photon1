import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import ShowSelectElementsIcon from '../../Icons/ShowSelectElementsIcon';
import {useTranslation} from 'react-i18next';
import CheckedIcon from '../../Icons/CheckedIcon';

export default function ChangeLanguage({title}: {title: string}) {
  const [showLanguageList, setShowLanguageList] = useState(false);
  const {t, i18n} = useTranslation();

  const languageList = [
    {label: t('ENGLISH'), value: 'en', id: 1},
    {label: t('FRENCH'), value: 'fr', id: 2},
  ];

  const languages: any = {
    en: {title: 'English'},
    fr: {title: 'Français'},
  };

  const toggleLanguageList = () => {
    setShowLanguageList(!showLanguageList);
  };

  const changeLanguageItem = async (language: string) => {
    await i18n.changeLanguage(language);
    setShowLanguageList(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleLanguageList} style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.selectedLanguageContainer}>
          <Text style={styles.selectedLanguage}>
            {languages[i18n.language]?.title}
          </Text>
          <View
            style={{
              transform: [{rotate: showLanguageList ? '90deg' : '0deg'}],
            }}>
            <ShowSelectElementsIcon />
          </View>
        </View>
      </TouchableOpacity>
      {showLanguageList && (
        <View style={styles.languageListContainer}>
          {languageList.map(language => (
            <TouchableOpacity
              style={styles.languageItemContainer}
              key={language.id}
              onPress={() => changeLanguageItem(language.value)}>
              <Text style={styles.languageItem}>{language.label}</Text>
              {i18n.language === language.value && <CheckedIcon />}
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  title: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'ABeeZee-Regular',
  },
  selectedLanguageContainer: {
    flexDirection: 'row',
    gap: 17,
  },
  selectedLanguage: {
    backgroundColor: '#00000040',
    color: '#FFF',
    borderRadius: 21,
    paddingHorizontal: 21,
    fontSize: 14,
  },

  languageListContainer: {
    width: '100%',
    zIndex: 100,
    paddingVertical: 16,
    gap: 10,
  },
  languageItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    marginLeft: 30,
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    width: Dimensions.get('window').width - 80,
  },
  languageItem: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'ABeeZee-Regular',
  },
});
