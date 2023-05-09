import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import {getHistory} from '../redux/jokesOperations';
import {selectJokesHistory} from '../redux/selectors';

import JokeItem from '../components/JokeItem';
import ScreenTitle from '../components/ScreenTitle';
import useFetchProgress from '../hooks/useFetchProgress';
import Loader from '../components/Loader';
import commonStyles from '../commonStyles';

const History = () => {
  const dispatch = useDispatch();
  const jokesHistory = useSelector(selectJokesHistory);
  const {isLoading, error} = useFetchProgress();

  useEffect(() => {
    dispatch(getHistory());
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <ScreenTitle title="History" />
      <View style={styles.titleUnderline}></View>
      {error ? (
        <Error text={error} />
      ) : isLoading ? (
        <Loader text="Wait..." />
      ) : (
        <FlatList
          style={{flex: 1}}
          data={jokesHistory}
          renderItem={({item}) => <JokeItem joke={item} type="list" />}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: commonStyles.backgroundColor,
  },
  titleUnderline: {
    borderBottomColor: commonStyles.secondaryColor,
    borderBottomWidth: 1,
  },
});

export default History;
