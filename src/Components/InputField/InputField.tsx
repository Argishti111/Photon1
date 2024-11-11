import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import SendMessageIcon from '../../Icons/SendMessageIcon';

export default function InputField({
    sendMessage = ()=>{},
                                     setInputText= (text:string) =>{},
    inputText = ''
                                   }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.inputContainer}></Text> */}
      <TextInput
          onChangeText={text => setInputText(text)}
        style={styles.inputContainer}
        placeholder="Send a message or tap to record"
          onSubmitEditing={sendMessage}
          returnKeyType="send"
          value={inputText}
      />
      <TouchableOpacity style={styles.sendMessageIcon} onPress={()=>sendMessage()}>
        <SendMessageIcon />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 10,
  },
  inputContainer: {
    width: '80%',
    backgroundColor: 'rgba(217, 217, 217, 0.2)',
    borderRadius: 12,
    padding: 10,
  },
  sendMessageIcon: {
    backgroundColor: '#53535C',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 11,
  },
});
