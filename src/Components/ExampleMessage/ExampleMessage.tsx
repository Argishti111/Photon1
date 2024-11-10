import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

type ExampleMessagesType = {
  messages: any[];
};

export default function ExampleMessage({messages}: ExampleMessagesType) {
  console.log(messages); // Print the messages array to the console for debugging);

  return (
    <View>
      {messages.map((message, index) => (
        <View>
          <Text key={message.id}>{message.messageTitle}</Text>
          {message.messageLogo}
        </View>
      ))}
      <Text>ExampleMessage</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
