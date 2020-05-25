import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationOptions} from '../options';
import {DrawerRoutes} from '../app/DrawerRoutes';
class NotificationPage extends Component {
  render() {
    return (
      <View>
        <Text> Notification </Text>
      </View>
    );
  }
}

const NotificationStack = createStackNavigator();
function NotificationScreen() {
  return (
    <NotificationStack.Navigator
      screenOptions={{
        ...navigationOptions,
      }}>
      <NotificationStack.Screen
        name="Notification"
        component={NotificationPage}
      />
    </NotificationStack.Navigator>
  );
}

export default () => {
  return <DrawerRoutes component={NotificationScreen} name="Notification" />;
};
