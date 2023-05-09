import React from 'react';
import {Text, StyleSheet} from 'react-native';
import commonStyles from '../commonStyles';

const ScreenTitle = ({title}) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    marginTop: 72,
    fontFamily: 'Inter-Bold',
    fontSize: commonStyles.titleFontSize,
    lineHeight: 48,
    marginBottom: 24,
    marginLeft: 24,
    color: commonStyles.primaryColor,
  },
});

export default ScreenTitle;
