import {View, Text} from 'react-native';
import React from 'react';

type ExampleMessagesType = {
  messages: any[];
};

export default function ExampleMessage({messages}: ExampleMessagesType) {
  console.log(messages); // Print the messages array to the console for debugging);

  return (
    <View>
      {messages.map((message, index) => (
        <Text key={index}>{message}</Text>
      ))}
      <Text>ExampleMessage</Text>
    </View>
  );
}
