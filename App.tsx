import React from 'react';

import {PaperProvider} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStaticNavigation} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {HomeScreen, ChatScreen, SettingsScreen, LogoScreen} from './src/Pages';
import TermsAndPrivacyPolicy from './src/Components/TermsOfConditions/TermsOfConditions';
import SettingsIcon from './src/Icons/SettingsIcon';

function App(): React.JSX.Element {
  const RootStack = createNativeStackNavigator({
    initialRouteName: 'Logo',
    screenOptions: {headerShown: false},
    screens: {
      Logo: {screen: LogoScreen},
      Chat: {
        screen: ChatScreen,
        options: {
          title: 'New Chat',
          headerShown: true,
        },
      },
      Home: {screen: HomeScreen},
      Settings: {screen: SettingsScreen},
    },
  });

  const Navigation = createStaticNavigation(RootStack);

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <Navigation />
        <TermsAndPrivacyPolicy />
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;
