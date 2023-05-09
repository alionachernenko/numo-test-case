import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';
import {View, FlatList, TouchableOpacity, SafeAreaView, Text} from 'react-native';

import {getHistory} from '../redux/jokesOperations';
import {selectJokesHistory} from '../redux/selectors';

import JokeItem from '../components/JokeItem';
import ScreenTitle from '../components/ScreenTitle';
import useFetchProgress from '../hooks/useFetchProgress';
import Loader from '../components/Loader';

const History = () => {
  const dispatch = useDispatch();
  const jokesHistory = useSelector(selectJokesHistory);
  const {isLoading, error} = useFetchProgress();

  useEffect(() => {
    dispatch(getHistory());
  }, []);


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flexDirection: 'row'}}>
        <ScreenTitle title="History" />
      </View>
      <View style={{borderBottomColor: '#E6E6E6', borderBottomWidth: 1}}></View>
      {error ? (
        <Text>{error}</Text>
      ) : isLoading ? (
        <Loader text="Wait..." />
      ) : (
        <FlatList
          style={{flex: 1}}
          data={jokesHistory}
          renderItem={({item}) => <JokeItem joke={item} type="list" />}
          keyExtractor={() => nanoid()}
        />
      )}
    </SafeAreaView>
  );
};

export default History;
