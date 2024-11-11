import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Platform,
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
  let margin = 0;

  if (Platform.OS === 'ios') {
    margin = 20;
  }
  return (
    <SafeAreaView style={[styles.container, {marginBottom: margin}]}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    // maxHeight: Dimensions.get('window').height * 0.7,
  },
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
    fontFamily: 'ABeeZee-Regular',
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
    fontFamily: 'ABeeZee-Regular',
  },
});
