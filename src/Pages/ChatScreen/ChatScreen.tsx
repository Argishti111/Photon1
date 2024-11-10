import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
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
import {useKeyboard} from '../../hooks/useKeyboard';
import {useDispatch} from 'react-redux';
import {handleChange} from '../../store';

export default function ChatScreen() {
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();
  const [messages, setMessages] = useState<any>([
    {
      question: '',
      answer: '',
    },
    {
      question: '',
      answer: '',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [connectResult, setConnectResult] = useState<any>();
  const [isShowDialog, setShowDialog] = useState(false);
  const dispatch = useDispatch();

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

  const sendMessage = () => {
    if (inputText.trim()) {
      setInputText('');
    }

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', 'Bearer PXf6n09PH9oNjW16VZ5Dww6bLO');

    const raw = JSON.stringify({
      question: inputText,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };
    setShowDialog(true);

    // @ts-ignore
    fetch('https://api.photonchatai.cloud/ask', requestOptions)
      .then(response => {
        return response.json();
      })
      .then(result => {
        dispatch(handleChange('inputText', inputText));
        setMessages([
          ...messages,
          {
            question: inputText,
            answer: '',
          },
          {
            question: '',
            answer: result.answer,
          },
        ]);
      })
      .catch(error => console.error(error));
  };

  const handleClickSettings = () => navigation.navigate('Settings' as never);

  // @ts-ignore
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={t('NEW_CHAT')}
        leftIcon={
          <TouchableOpacity
            onPress={handleClickSettings}
            style={{alignItems: 'center'}}>
            <SettingsIcon />
            <Text style={{color: '#FFF', fontSize: 10}}>{t('SETTINGS')}</Text>
          </TouchableOpacity>
        }
        rightIcon={
          <View style={{alignItems: 'center', marginLeft: 10}}>
            <MinLogo />
          </View>
        }
      />

      {/* <DialogWithGpt messages={messages} /> */}

      {connectResult?.url ? (
        <WebView
          source={{uri: connectResult?.url, cache: false}}
          startInLoadingState
          cacheEnabled={false}
        />
      ) : (
        <View>
          {isShowDialog ? (
            <DialogWithGpt messages={messages} />
          ) : (
            <ExampleMessage
              messages={
                i18n.language === 'en' ? exampleMessagesEN : exampleMessagesFR
              }
              handleSelectMessage={(question: string) => {
                sendMessage();
                // setInputText(question);
                setShowDialog(true);
              }}
            />
          )}

          {/* <SafeAreaView style={{flex: 1}}> */}
          {/* </SafeAreaView> */}

          {/* <SafeAreaView style={{flex: 1, justifyContent: 'flex-end'}}>
            <View style={{paddingBottom: 10}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextInput
                  mode="outlined"
                  placeholder="Type something"
                  style={{flex: 1}}
                  outlineStyle={{borderRadius: 25}}
                  value={inputText}
                  onChangeText={setInputText}
                  onSubmitEditing={sendMessage}
                  returnKeyType="send"
                />
                <IconButton icon="send" size={24} onPress={sendMessage} />
              </View>
            </View>
          </SafeAreaView> */}
        </View>
      )}
      <SafeAreaView style={styles.inputContainer}>
        <InputField
          onChangeText={setInputText}
          value={inputText}
          onSubmit={sendMessage}
        />
      </SafeAreaView>
    </SafeAreaView>
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
  },
});
