import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getNewJoke} from '../redux/jokesOperations';

export const Today = () => {
  const dispatch = useDispatch();
  const {todayJoke} = useSelector(state => state.jokes);

  useEffect(() => {
    dispatch(getNewJoke());
  }, [dispatch]);

  return (
    <View>
      <Text>Joke</Text>
      <Text>{todayJoke.text}</Text>
    </View>
  );
};
