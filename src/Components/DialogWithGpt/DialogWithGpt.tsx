import React, {useRef} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import Message from './Message';

export default function DialogWithGpt({messages}: {messages: any[]}) {
  const scrollViewRef = useRef<any>(null);

  return (
    <>
      <Text style={styles.bonkText}>Bonk Bot</Text>
      <FlatList
        style={{marginBottom: 10}}
        ref={scrollViewRef}
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => <Message item={item} index={index} />}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({animated: true})
        }
      />
    </>
  );
}

const styles = StyleSheet.create({
  bonkText: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    paddingBottom: 5,
    fontFamily: 'ABeeZee-Regular',
  },
});
