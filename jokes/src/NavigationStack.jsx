import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Today from './screens/Today';
import React from 'react';
import { History } from './screens/History';

const Tab = createBottomTabNavigator();

export const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Today" component={Today} />
        <Tab.Screen name='History' component={History}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
