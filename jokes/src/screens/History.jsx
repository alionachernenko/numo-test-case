import {useEffect} from 'react';
import {getHistory} from '../redux/jokesOperations';
import {useDispatch, useSelector} from 'react-redux';
import {JokeItem} from '../components/JokeItem';
import {View, FlatList, Button} from 'react-native';
import {nanoid} from '@reduxjs/toolkit';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const History = () => {
  const dispatch = useDispatch();
  const {jokesHistory} = useSelector(state => state.jokes);
  console.log(jokesHistory);

  useEffect(() => {
    dispatch(getHistory());
  }, []);

  return (
    <View style={{flex: 1}}>
      <Button onPress={() => AsyncStorage.clear()} title="Clear" />
      <FlatList
        style={{flex: 1}}
        data={jokesHistory}
        renderItem={({item}) => <JokeItem joke={item} />}
        keyExtractor={() => nanoid()}
      />
    </View>
  );
};
