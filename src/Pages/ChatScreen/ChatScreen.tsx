import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {ExampleMessage, Header, InputField} from '../../Components';
import SettingsIcon from '../../Icons/SettingsIcon';
import MinLogo from '../../Icons/MinLogo';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {exampleMessages} from '../../data/data';
import WebView from 'react-native-webview';

export default function ChatScreen() {
  const navigation = useNavigation();

  const [messages, setMessages] = useState<[{question: string, answer:string}]>();
  const [inputText, setInputText] = useState('');
  const [connectResult, setConnectResult] = useState<any>();

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
    if (inputText?.trim()) {
      setInputText('');
    }

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', 'Bearer PXf6n09PH9oNjW16VZ5Dww6bLO');

    const rawText = typeof text === 'string' && text !== '' ? text : inputText?.trim()

    const raw = JSON.stringify({
      question: rawText,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    // @ts-ignore
    fetch('https://api.photonchatai.cloud/ask', requestOptions)
      .then(response => {
        return response.json();
      })
      .then(result => {
        const mes = [];
        // @ts-ignore
        if(messages?.length > 0) {
          // @ts-ignore
          mes.push(...messages)
        }
        // @ts-ignore
        setMessages([
            ...mes,
          {
            question: typeof text === 'string' && text !== '' ? text : inputText?.trim(),
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
    <SafeAreaView style={styles.container} >
      <Header
        title="New Chat"
        leftIcon={
          <TouchableOpacity
            onPress={handleClickSettings}
            style={{alignItems: 'center'}}>
            <SettingsIcon />
            <Text style={{color: '#FFF', fontSize: 10}}>Settings</Text>
          </TouchableOpacity>
        }
        rightIcon={
          <View style={{alignItems: 'center', marginLeft: 10}}>
            <MinLogo />
          </View>
        }
      />

      {!messages && <ExampleMessage messages={exampleMessages} sendMessage={sendMessage}/>}
      <ScrollView>
      {connectResult?.url ? (
        <WebView
          source={{uri: connectResult?.url, cache: false}}
          startInLoadingState
          cacheEnabled={false}
        />
      ) : (
        <View>
          {messages?.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                justifyContent:
                  item.question !== '' ? 'flex-end' : 'flex-start',
                padding: 10,
                marginVertical: 5,
              }}>
              <Text
                style={{
                  backgroundColor: item.question !== '' ? '#007AFF' : '#E8E8E8',
                  color: item.question !== '' ? 'white' : 'black',
                  padding: 10,
                  borderRadius: 15,
                  maxWidth: '80%',
                }}>
                {item.question !== '' ? item.question : item.answer}
              </Text>
            </View>
          ))}
        </View>
      )}
      </ScrollView>
      <InputField sendMessage={sendMessage} setInputText={setInputText} inputText={inputText} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
    backgroundColor: '#31323d',
  },
});
