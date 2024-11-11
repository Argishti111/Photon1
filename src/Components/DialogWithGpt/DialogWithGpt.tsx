import React, {useRef} from 'react';
import {Dimensions, FlatList} from 'react-native';
import Message from './Message';
import {useKeyboard} from '../../hooks/useKeyboard';

export default function DialogWithGpt({messages}: {messages: any[]}) {
  const scrollViewRef = useRef<any>(null);
  const keyboardHeight = useKeyboard();
  const listHeight = Dimensions.get('window').height / 1.7 - keyboardHeight;

  return (
    <FlatList
      style={{height: listHeight, marginBottom: 10}}
      ref={scrollViewRef}
      data={messages}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => <Message item={item} index={index} />}
      onContentSizeChange={() =>
        scrollViewRef.current.scrollToEnd({animated: true})
      }
    />
  );
}
