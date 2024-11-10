import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

type ExampleMessagesType = {
  messages: any[];
  handleSelectMessage: (question: string) => void;
};

const Message = ({
  message,
  handlePressQuestion,
}: {
  message: {id: number; text: string};
  handlePressQuestion: (message: string) => any;
}) => (
  <TouchableOpacity
    onPress={() => handlePressQuestion(message.text)}
    style={styles.messageStyleContainer}>
    <Text style={styles.messageStyle}>{message.text}</Text>
  </TouchableOpacity>
);

export default function ExampleMessage({
  messages,
  handleSelectMessage,
}: ExampleMessagesType) {
  return (
    <ScrollView>
      {messages.map(message => (
        <React.Fragment key={message.id}>
          <View style={styles.titleStyleContainer}>
            {message.logo}
            <Text key={message.id} style={styles.titleStyle}>
              {message.title}
            </Text>
          </View>
          <View style={styles.messagesContainer}>
            {message.messages.map(
              (message: {id: number; text: string}, index: number) => (
                <Message
                  key={index}
                  message={message}
                  handlePressQuestion={handleSelectMessage}
                />
              ),
            )}
          </View>
        </React.Fragment>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleStyleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
    marginVertical: 20,
  },
  titleStyle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '400',
    letterSpacing: 1.5,
  },
  messagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  messageStyleContainer: {
    width: '45%',
    paddingVertical: 30,
    paddingHorizontal: 5,

    // height: 100,
    backgroundColor: 'rgba(217, 217, 217, 0.12)',
    borderRadius: 19,
    alignItems: 'center',
  },
  messageStyle: {
    color: 'rgba(255, 255, 255, 0.77)',
    textAlign: 'center',
    fontSize: 13,
  },
});
