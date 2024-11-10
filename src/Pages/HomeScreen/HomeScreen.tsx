import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';
import {Button} from 'react-native-paper';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import styles from '../../Styles.ts';

function HomeScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const navigation = useNavigation();
  const chatScreen = 'Chat';
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.homeStyle}>
        {/* <Button mode="contained" onPress={() => navigation.navigate(chatScreen as never, {backgroundStyle, isDarkMode} as never)}>
                    Get Started
                </Button> */}
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
