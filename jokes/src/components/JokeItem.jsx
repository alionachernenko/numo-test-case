import {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LikeButton from './LikeButton';
import commonStyles from '../commonStyles';

const JokeItem = memo(({joke, type}) => {
  return (
    <View style={{...styles.item, ...styles[type]}}>
      <Text style={{...styles.text, ...styles[type].text}}>{joke.text}</Text>
      <LikeButton type={type} joke={joke} />
    </View>
  );
});

const styles = StyleSheet.create({
  item: {
    width: '100%',
    padding: 24,
    gap: 10,
  },
  text: {
    color: commonStyles.primaryColor,
    fontFamily: 'Inter-Medium',
  },
  list: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: commonStyles.secondaryColor,
    alignContent: 'space-between',

    text: {
      fontSize: 16,
      lineHeight: 26,
      maxWidth: 260,
    },

    like: {
      width: 48,
      height: 48,
      marginLeft: 'auto',
    },
  },
  today: {
    flexDirection: 'column',
    text: {
      fontSize: 24,
      lineHeight: 38,
    },
    like: {
      width: 64,
      height: 64,
    },
  },

  like: {
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default JokeItem;
