import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationOptions} from '../options';
import {DrawerRoutes} from '../app/DrawerRoutes';

class Home extends Component {
  render() {
    return (
      <View>
        <Text> home </Text>
      </View>
    );
  }
}

const HomeStack = createStackNavigator();
function HomeScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{...navigationOptions, headerTitle: 'StilimApp'}}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

export default () => {
  return <DrawerRoutes component={HomeScreen} name="Home" />;
};
