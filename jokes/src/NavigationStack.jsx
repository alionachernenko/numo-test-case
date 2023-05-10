import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Today from './screens/Today';
import History from './screens/History';
import TodayIcon from '../assets/icons/Today';
import HistoryIcon from '../assets/icons/History';
import commonStyles from './commonStyles';
import {SafeAreaView} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const NavigationStack = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
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
            tabBarActiveTintColor: commonStyles.accentColor,
            tabBarInactiveTintColor: commonStyles.secondaryColor,
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
    </SafeAreaView>
  );
};

export default NavigationStack;
