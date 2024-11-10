import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ShowSelectElementsIcon from '../../Icons/ShowSelectElementsIcon';

export default function ChangeLanguage({title = 'Language'}) {
  const [showLanguageList, setShowLanguageList] = useState(false);

  const toggleLanguageList = () => {
    setShowLanguageList(!showLanguageList);
  };

  const languageList = [
    {id: 1, name: 'English'},
    {id: 2, name: 'Spanish'},
    {id: 3, name: 'French'},
    // Add more languages as needed
  ];

  return (
    <View>
      <TouchableOpacity onPress={toggleLanguageList} style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.selectedLanguageContainer}>
          <Text style={styles.selectedLanguage}>English</Text>
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
              key={language.id}
              onPress={() => {
                // Handle language selection

                toggleLanguageList();
              }}>
              <Text style={styles.languageItem}>{language.name}</Text>
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
    position: 'absolute',
    top: 60,
    backgroundColor: '#00000090',
    width: '100%',
    zIndex: 100,
    paddingVertical: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  languageItem: {
    color: '#FFF',
    fontSize: 16,
  },
});
