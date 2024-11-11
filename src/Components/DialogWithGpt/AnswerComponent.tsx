import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import GptImage from '../../images/GptImage';
import LikeIcon from '../../Icons/LikeIcon';
import CopyIcon from '../../Icons/CopyIcon';
import Clipboard from '@react-native-clipboard/clipboard';

export default function AnswerComponent({answer}: {answer: string}) {
  const handleClickCopyText = () => {
    Clipboard.setString(answer);
    Alert.alert('Copied', 'Answer has been copied to clipboard');
  };
  return (
    <View style={styles.globalContainer}>
      <View style={styles.container}>
        <GptImage />
        <Text style={styles.isAnswerText}>{answer}</Text>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => console.log('Like button pressed')}>
          <LikeIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dislike}
          onPress={() => console.log('DisLike button pressed')}>
          <LikeIcon />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleClickCopyText}
          style={styles.copyContainer}>
          <CopyIcon />
          <Text style={{color: '#83848b', fontSize: 14, marginLeft: 5}}>
            Copy
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  globalContainer: {
    maxWidth: '90%',
  },
  container: {
    backgroundColor: '#5C5C5C33',
    padding: 10,
    paddingBottom: 15,
    borderRadius: 18,
    flexDirection: 'row',
    gap: 10,
  },
  isAnswerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: '#5C5C5C33',
  },
  isAnswerText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'ABeeZee-Regular',
  },
  footerContainer: {
    flexDirection: 'row',
    gap: 15,
    paddingHorizontal: 5,
    paddingTop: 10,
    paddingBottom: 20,
  },
  dislike: {
    transform: [{rotate: '180deg'}],
  },
  copyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
    gap: 10,
  },
});
