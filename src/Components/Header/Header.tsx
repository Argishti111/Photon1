import {View, Text, StyleSheet, Dimensions} from 'react-native';
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
    <View style={styles.headerContainer}>
      <View style={styles.bodyContainer}>
        <View>{leftIcon}</View>
        <View style={styles.titleContainer}>
          <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
        </View>
        <View>{rightIcon}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#31323d',
    position: 'absolute',
    top: 0,
    width: Dimensions.get('window').width,
    height: 70,
    zIndex: 1000,
    paddingHorizontal: 16,
  },
  bodyContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderBottomColor: '#6D6D6D',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
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
