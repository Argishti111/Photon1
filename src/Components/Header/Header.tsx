import {View, Text, StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import React from 'react';

type HeaderType = {
  title?: string;
  titleStyle?: any;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export default function Header({
  title,
  titleStyle,
  leftIcon,
  rightIcon,
}: HeaderType) {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.bodyContainer}>
        <View>{leftIcon}</View>
        <View style={styles.titleContainer}>
          <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
        </View>
        <View>{rightIcon}</View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#31323d',
    position: 'absolute',
    top: 0,
    width: Dimensions.get('window').width,
    minHeight: 70,
    zIndex: 1000,
  },
  bodyContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderBottomColor: '#6D6D6D',
    marginHorizontal: 20,
    paddingVertical: 16,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  titleStyle: {
    width: '100%',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 21,
  },
});
