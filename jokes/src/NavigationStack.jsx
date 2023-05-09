import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Today from './screens/Today';
import History from './screens/History';
import TodayIcon from '../assets/icons/Today';
import HistoryIcon from '../assets/icons/History';

const Tab = createBottomTabNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            paddingHorizontal: 80,
            height: 70,
          },
          tabBarIconStyle: {
            marginBottom: 4,
            marginTop: 10,
          },
          tabBarLabelStyle: {
            fontFamily: 'Inter-SemiBold',
            fontSize: 12,
            marginBottom: 10,
          },
          tabBarActiveTintColor: '#9763FF',
          tabBarInactiveTintColor: '#C1C3C6',
          headerShown: false,
        }}>
        <Tab.Screen
          name="Today"
          component={Today}
          options={{
            tabBarIcon: ({focused}) => (
              <TodayIcon size={28} focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            tabBarIcon: ({focused}) => (
              <HistoryIcon size={28} focused={focused} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
