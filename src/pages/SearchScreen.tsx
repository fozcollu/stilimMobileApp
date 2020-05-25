import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

class SearchPage extends Component {
  render() {
    return (
      <View>
        <Text> Search </Text>
      </View>
    );
  }
}
const SearchStack = createStackNavigator();
function SearchScreen() {
  return (
    <SearchStack.Navigator
      screenOptions={{
        header: () => undefined,
      }}>
      <SearchStack.Screen name="Search" component={SearchPage} />
    </SearchStack.Navigator>
  );
}

export default SearchScreen;
