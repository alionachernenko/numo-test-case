import React from 'react';
import {StyleSheet, Text} from 'react-native';
import commonStyles from '../commonStyles';

const Error = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: commonStyles.accentColor,
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
});
export default Error;
