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

const API_TOKEN = 'PXf6n09PH9oNjW16VZ5Dww6bLO';
const API_BASE_URL = 'https://api.photonchatai.cloud';

export default function ChatScreen({navigation}: any) {
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

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Info')}>
        <Text style={styles.infoButton}>ℹ️ Info</Text>
      </TouchableOpacity>
      {isChatReady ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter your question"
            placeholderTextColor="#A9A9A9"
            value={question}
            onChangeText={setQuestion}
          />
          {/* <Button title="Send" onPress={sendQuestion} /> */}
        </>
      ) : (
        <Text style={styles.status}>Chat is not ready yet...</Text>
      )}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Text style={styles.answer}>{answer}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
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
