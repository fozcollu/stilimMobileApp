import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationOptions} from '../options';
import {DrawerRoutes} from '../app/DrawerRoutes';

class ProfilePage extends Component {
  render() {
    return (
      <View>
        <Text> Profile </Text>
      </View>
    );
  }
}
const ProfileStack = createStackNavigator();
function ProfileScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{...navigationOptions}}>
      <ProfileStack.Screen name="Profile" component={ProfilePage} />
    </ProfileStack.Navigator>
  );
}

export default () => {
  return <DrawerRoutes component={ProfileScreen} name="Profile" />;
};
