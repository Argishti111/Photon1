import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {
  DialogWithGpt,
  ExampleMessage,
  Header,
  InputField,
} from '../../Components';
import SettingsIcon from '../../Icons/SettingsIcon';
import MinLogo from '../../Icons/MinLogo';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {exampleMessagesEN, exampleMessagesFR} from '../../data/data';
import WebView from 'react-native-webview';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {handleChange} from '../../store';
import BurgerIcon from '../../Icons/BurgerIcon';
import {useKeyboard} from '../../hooks/useKeyboard.tsx';

export default function ChatScreen() {
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();

  const [inputText, setInputText] = useState('');
  const [connectResult, setConnectResult] = useState<any>();
  const [isShowDialog, setIsShowDialog] = useState(false);
  const dispatch = useDispatch();

  const keyboardHeight = useKeyboard();

  let iosPadding = 0;
  const andoidPadding = isShowDialog ? 100 : 50;

  if (isShowDialog) {
    if (keyboardHeight) {
      iosPadding = keyboardHeight + 20;
    } else {
      iosPadding = 100;
    }
  } else {
    if (keyboardHeight) {
      iosPadding = keyboardHeight - 20;
    } else {
      iosPadding = 50;
    }
  }

  const messages = useSelector((state: any) => state.reducer.messages);
  const connectToChat = () => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', 'Bearer PXf6n09PH9oNjW16VZ5Dww6bLO');

    const raw = JSON.stringify({
      question: 'Is the chat ready?',
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    // @ts-ignore
    fetch('https://api.photonchatai.cloud/connect', requestOptions)
      .then(response => response.json())
      .then(result => setConnectResult(result))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    connectToChat();
  }, []);

  const sendMessage = (text = '') => {
    if (inputText.trim()) {
      setInputText('');
    }

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', 'Bearer PXf6n09PH9oNjW16VZ5Dww6bLO');

    const raw = JSON.stringify({
      question: typeof text === 'string' && text !== '' ? text : inputText,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };
    setIsShowDialog(true);

    // @ts-ignore
    fetch('https://api.photonchatai.cloud/ask', requestOptions)
      .then(response => {
        return response.json();
      })
      .then(result => {
        dispatch(handleChange('inputText', inputText));
        const messagesToAdd = [];
        if (messages?.length > 0) {
          messagesToAdd.push(...messages);
        }
        dispatch(
          handleChange('messages', [
            ...messagesToAdd,
            {
              question:
                typeof text === 'string' && text !== '' ? text : inputText,
              answer: '',
            },
            {
              question: '',
              answer: result.answer,
            },
          ]),
        );
      })
      .catch(error => console.error(error));
  };

  const handleClickSettings = () => navigation.navigate('Settings' as never);

  const handleClickBurgerIcon = () => {
    dispatch(handleChange('messages', []));
    setIsShowDialog(false);
  };

  // @ts-ignore
  return (
    <SafeAreaView
      style={[
        styles.container,
        {paddingBottom: Platform.OS === 'ios' ? iosPadding : andoidPadding},
      ]}>
      {connectResult?.url ? (
        <WebView
          source={{uri: connectResult?.url, cache: false}}
          startInLoadingState
          cacheEnabled={false}
        />
      ) : (
        <>
          <Header
            title={t('NEW_CHAT')}
            leftIcon={
              isShowDialog ? (
                <TouchableOpacity
                  onPress={handleClickBurgerIcon}
                  style={{alignItems: 'center'}}>
                  <BurgerIcon />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={handleClickSettings}
                  style={{alignItems: 'center'}}>
                  <SettingsIcon />
                  <Text
                    style={{
                      color: '#FFF',
                      fontSize: 10,
                      fontFamily: 'ABeeZee-Regular',
                    }}>
                    {t('SETTINGS')}
                  </Text>
                </TouchableOpacity>
              )
            }
            rightIcon={
              <View style={{alignItems: 'center', marginLeft: 10}}>
                <MinLogo />
              </View>
            }
          />

          <View>
            {isShowDialog ? (
              <DialogWithGpt messages={messages} />
            ) : (
              <ExampleMessage
                messages={
                  i18n.language === 'en' ? exampleMessagesEN : exampleMessagesFR
                }
                handleSelectMessage={(question: string) => {
                  sendMessage(question);
                  // setInputText(question);
                  setIsShowDialog(true);
                }}
              />
            )}
          </View>

          <SafeAreaView
            style={{
              position: 'absolute',
              bottom:
                keyboardHeight && Platform.OS === 'ios'
                  ? keyboardHeight - 40
                  : 10,
              zIndex: 5000,
              backgroundColor: '#31323d',
            }}>
            <InputField
              onChangeText={setInputText}
              value={inputText}
              onSubmit={sendMessage}
            />
          </SafeAreaView>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingTop: 80,
    backgroundColor: '#31323d',
    justifyContent: 'space-between',
    paddingBottom: 50,
    zIndex: 2000,
  },
});
