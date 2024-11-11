import React from 'react';

import {PaperProvider} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStaticNavigation} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {HomeScreen, ChatScreen, SettingsScreen, LogoScreen} from './src/Pages';
import TermsAndPrivacyPolicy from './src/Components/TermsOfConditions/TermsOfConditions';
import SettingsIcon from './src/Icons/SettingsIcon.tsx';
import {Text, TouchableOpacity, View} from 'react-native';
import MinLogo from './src/Icons/MinLogo.tsx';

function App(): React.JSX.Element {
  const RootStack = createNativeStackNavigator({
    initialRouteName: 'Logo',
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
        <Navigation />
        <TermsAndPrivacyPolicy />
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;
