import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getNewJoke} from '../redux/jokesOperations';
import {Screen} from '@react-navigation/native';

const Today = () => {
  const dispatch = useDispatch();
  const {todayJoke} = useSelector(state => state.jokes);
  console.log('text', todayJoke)

  useEffect(() => {
    dispatch(getNewJoke());
  }, []);

  return (
    <View>
      <Text>Joke</Text>
      <Text>{todayJoke.text}</Text>
    </View>
  );
};

export default Today;
