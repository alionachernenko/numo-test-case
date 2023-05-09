import 'react-native-gesture-handler';
import React from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {Today} from './src/screens/Today';
import {NavigationStack} from './src/NavigationStack';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationStack />
    </Provider>
  );
};

export default App;
