import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../pages/HomeScreen';
import NotificationScreen from '../pages/NotificationScreen';
import SearchScreen from '../pages/SearchScreen';
import WardrobeScreen from '../pages/WardrobeScreen';
import ProfileScreen from '../pages/ProfileScreen';

type TabParamList = {
  Home: {Icon: string};
  Search: {Icon: string};
  Wardrobe: {Icon: string};
  Notification: {Icon: string};
  Profile: {Icon: string};
};

const Tab = createBottomTabNavigator<TabParamList>();
const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={props => ({
        tabBarVisible: true,
        tabBarIcon: ({color, size}) => {
          return (
            <Ionicons
              name={props.route.params.Icon}
              size={size}
              color={color}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{Icon: 'ios-home'}}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        initialParams={{Icon: 'ios-search'}}
      />
      <Tab.Screen
        name="Wardrobe"
        component={WardrobeScreen}
        initialParams={{Icon: 'ios-shirt'}}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        initialParams={{Icon: 'md-megaphone'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{Icon: 'md-person'}}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
