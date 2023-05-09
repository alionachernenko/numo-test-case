import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import ScreenTitle from '../components/ScreenTitle';
import Loader from '../components/Loader';
import JokeItem from '../components/JokeItem';

import {getNewJoke} from '../redux/jokesOperations';

import {selectJoke} from '../redux/selectors';
import useFetchProgress from '../hooks/useFetchProgress';

const Today = () => {
  const dispatch = useDispatch();
  const todayJoke = useSelector(selectJoke);
  const {isLoading, error} = useFetchProgress();

  useEffect(() => {
    dispatch(getNewJoke());
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScreenTitle title="Today" />
      <View style={{borderBottomColor: '#E6E6E6', borderBottomWidth: 1}}></View>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          flex: 1,
        }}>
        {error ? (
          <Text>{error}</Text>
        ) : isLoading ? (
          <Loader text="Get ready..." />
        ) : (
          <JokeItem type="today" joke={todayJoke} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Today;
