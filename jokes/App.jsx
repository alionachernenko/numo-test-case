import React from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import { Today } from './src/screens/Today';

const App = () => {
  return (
    <Provider store={store}>
      <Today/>
    </Provider>
  );
};

export default App;
