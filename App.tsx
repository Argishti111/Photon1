import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TermsAndPrivacyPolicy from './src/Components/TermsOfConditions/TermsOfConditions';
import {ChatScreen, LogoScreen, SettingsScreen} from './src/Pages';
import {Dimensions, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import store from "./src/store";

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
      Chat: {
        screen: ChatScreen,
        options: {
          title: 'New Chat',
        },
      },
      Settings: {screen: SettingsScreen},
    },
  });

  useEffect(() => {
    StatusBar.setBackgroundColor('#31323d');
  }, []);
  
  const Navigation = createStaticNavigation(RootStack);

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.body}>
      <SafeAreaProvider>
        <Provider store={store}>
          <Navigation />
          <TermsAndPrivacyPolicy />
        </Provider>
      </SafeAreaProvider>
        </SafeAreaView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31323d',
    alignItems:'center'
  },
  body:{
    flex:1,
    width:Dimensions.get('window').width - 40,
  }
});

export default App;
