import React from 'react';

import {PaperProvider} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStaticNavigation} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from './src/HomeScreen.tsx';
import ChatScreen from './src/ChatScreen.tsx';
import SettingsScreen from './src/SettingsScreen.tsx';


function App(): React.JSX.Element {
    const RootStack = createNativeStackNavigator({
        initialRouteName: 'Home',
        screens: {
            Home: {screen: HomeScreen},
            Chat: {screen:ChatScreen},
            Settings: {screen:SettingsScreen},
        },
    });

    const Navigation = createStaticNavigation(RootStack);


  return (
      <PaperProvider>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
      </PaperProvider>
  );
}



export default App;
