import React from 'react';
import {useDispatch} from 'react-redux';
import {TouchableOpacity, StyleSheet} from 'react-native';

import LikeIcon from '../../assets/icons/Like';
import {toggleLike} from '../redux/jokesOperations';

const LikeButton = ({joke, type}) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(toggleLike(joke));
      }}
      style={{
        ...styles.like,
        backgroundColor: joke.isFavourite ? '#9763FF' : '#EAE0FF',
        ...styles[type],
      }}>
      <LikeIcon type={joke.isFavourite ? 'fav' : 'unfav'} size={28} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  like: {
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  list: {
    width: 48,
    height: 48,
    marginLeft: 'auto',
  },

  today: {
    width: 64,
    height: 64,
  },
});

export default LikeButton