import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AnswerComponent from './AnswerComponent';

export default function Message({index, item}: {index: number; item: any}) {
  return item.question || item.answer ? (
    <View
      key={index}
      style={
        item.question !== ''
          ? styles.isQuestionContainer
          : styles.isAnswerContainer
      }>
      {item.question !== '' ? (
        <Text style={styles.isQuestionText}>{item.question}</Text>
      ) : (
        <AnswerComponent answer={item?.answer} />
      )}
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  isQuestionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 10,
    marginBottom: 5,
  },
  isQuestionText: {
    backgroundColor: '#19B692',
    color: 'white',
    display: 'flex',
    padding: 10,
    borderRadius: 15,
    maxWidth: '80%',
    fontSize: 15,
    fontFamily: 'ABeeZee-Regular',
  },

  isAnswerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 10,
  },
});
