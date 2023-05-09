import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

import NavigationStack from './src/NavigationStack';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationStack />
    </Provider>
  );
};

export default App;
