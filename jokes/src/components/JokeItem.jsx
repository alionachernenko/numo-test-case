import {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const JokeItem = memo(({joke}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{joke.text}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  item: {
    width: '100%',
    padding: 24,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
  },
  text: {
    color: '#000',
    fontSize: 16,
  },
});
