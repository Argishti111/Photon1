import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TermsAndPrivacyPolicy from './src/Components/TermsOfConditions/TermsOfConditions';
import {ChatScreen, HomeScreen, LogoScreen, SettingsScreen} from './src/Pages';
import store from './src/store';
import {SafeAreaView, StyleSheet} from 'react-native';
import {InputField} from './src/Components';

function App(): React.JSX.Element {
  const RootStack = createNativeStackNavigator({
    initialRouteName: 'Chat',
    screenOptions: {
      headerShown: false,
      headerStyle: {backgroundColor: '#31323d'},
      headerTitleStyle: {color: '#FFF', fontWeight: 'bold'},
    },
    screens: {
      Logo: {screen: LogoScreen},
      Home: {screen: HomeScreen},
      Chat: {
        screen: ChatScreen,
        options: {
          title: 'New Chat',
        },
      },
      Settings: {screen: SettingsScreen},
    },
  });

  const [inputText, setInputText] = useState('');

  const Navigation = createStaticNavigation(RootStack);

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <Provider store={store}>
          <Navigation />
          <SafeAreaView style={styles.inputContainer}>
            <InputField
              onChangeText={setInputText}
              value={inputText}
              // onSubmit={sendMessage}
            />
          </SafeAreaView>
          <TermsAndPrivacyPolicy />
        </Provider>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
    paddingBottom: 50,
    backgroundColor: '#31323d',
  },
  inputContainer: {
    zIndex: 2000,
    backgroundColor: '#31323d',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default App;
