import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function TermsAndPrivacyPolicy() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodyContainer}>
        <TouchableOpacity style={{width: 100}} onPress={() => {}}>
          <Text style={styles.items}>Terms of use </Text>
        </TouchableOpacity>
        <Text style={[styles.items, {width: 2}]}>| </Text>
        <TouchableOpacity
          style={{width: 100, marginLeft: 10}}
          onPress={() => {}}>
          <Text style={styles.items}>Privacy policy </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#31323d',
    alignItems: 'center',
  },

  bodyContainer: {
    flexDirection: 'row',
  },

  items: {
    color: '#797a81',
  },
});
