import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text, View, ScrollView, Dimensions, StyleSheet, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import ScreenTitle from '../components/ScreenTitle';
import Loader from '../components/Loader';
import JokeItem from '../components/JokeItem';

import {getNewJoke} from '../redux/jokesOperations';

import {selectJoke} from '../redux/selectors';
import useFetchProgress from '../hooks/useFetchProgress';
import commonStyles from '../commonStyles';

const screenHeight = Dimensions.get('screen').height;

const Today = () => {
  const dispatch = useDispatch();
  const todayJoke = useSelector(selectJoke);
  const {isLoading, error} = useFetchProgress();

  useEffect(() => {
    dispatch(getNewJoke());
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <ScreenTitle title="Today" />
      <View style={styles.titleUnderline}></View>
      <ScrollView>
        <View style={styles.contentWrapper}>
          {error ? (
            <Error text={error} />
          ) : isLoading ? (
            <Loader text="Get ready..." />
          ) : (
            <JokeItem type="today" joke={todayJoke} />
          )}
        </View>
      </ScrollView>
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
  contentWrapper: {
    minHeight: screenHeight - 300,
    justifyContent: 'center',
    flex: 1,
  },
});

export default Today;
