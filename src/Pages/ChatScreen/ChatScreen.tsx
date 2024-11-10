import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {ExampleMessage, Header} from '../../Components';
import SettingsIcon from '../../Icons/SettingsIcon';
import MinLogo from '../../Icons/MinLogo';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {exampleMessages} from '../../data/data';

const API_TOKEN = 'PXf6n09PH9oNjW16VZ5Dww6bLO';
const API_BASE_URL = 'https://api.photonchatai.cloud';

export default function ChatScreen() {
  const navigation = useNavigation();

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isChatReady, setIsChatReady] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkChatReady();
  }, []);

  const checkChatReady = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/connect`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({question: 'Is the chat ready?'}),
      });
      const data = await response.json();
      setIsChatReady(data.message === 'Chat is ready!');
    } catch (error) {
      console.error('Error checking chat status:', error);
    }
  };

  // const sendQuestion = async () => {
  //   if (!isChatReady) {
  //     Alert.alert('Chat is not ready yet.');
  //     return;
  //   }
  //   setLoading(true);
  //   try {
  //     const response = await fetch(`${API_BASE_URL}/ask`, {
  //       method: 'POST',
  //       headers: {
  //         Authorization: `Bearer ${API_TOKEN}`,
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({question}),
  //     });
  //     const data = await response.json();
  //     setAnswer(data.answer || data.message);
  //   } catch (error) {
  //     console.error('Error fetching answer:', error);
  //     setAnswer('An error occurred. Please try again later.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const handleClickSettings = () => navigation.navigate('Settings' as never);

  return (
    <SafeAreaView style={styles.container}>
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

      <ExampleMessage messages={exampleMessages} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
    backgroundColor: '#31323d',
    // justifyContent: 'center',
  },
  infoButton: {
    color: '#FF6F61',
    fontSize: 18,
    textAlign: 'right',
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: '#666',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#FFFFFF',
    backgroundColor: '#333',
  },
  status: {
    color: '#FF6F61',
    textAlign: 'center',
    marginBottom: 10,
  },
  answer: {
    color: '#A9A9A9',
    textAlign: 'center',
    marginTop: 20,
  },
});
