import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ScreenTitle = ({title}) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    marginTop: 72,
    fontFamily: 'Inter-Bold',
    fontSize: 36,
    lineHeight: 48,
    marginBottom: 24,
    marginLeft: 24,
    color: '#000',
  },
});

export default ScreenTitle;
