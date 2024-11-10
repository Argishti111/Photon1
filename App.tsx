import React from 'react';
import {Provider} from 'react-redux';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TermsAndPrivacyPolicy from './src/Components/TermsOfConditions/TermsOfConditions';
import {ChatScreen, HomeScreen, LogoScreen, SettingsScreen} from './src/Pages';
import store from './src/store';

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

  const Navigation = createStaticNavigation(RootStack);

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <Provider store={store}>
          <Navigation />
          <TermsAndPrivacyPolicy />
        </Provider>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;
