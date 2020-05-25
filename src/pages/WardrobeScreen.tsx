import React, {Component} from 'react';
import {View, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationOptions} from '../options';
import {DrawerRoutes} from '../app/DrawerRoutes';

class WardrobeMainPage extends Component<any> {
  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('newWardrobeItemModal')}
          title="Yeni kıyafet ekle"
        />
      </View>
    );
  }
}

const WardrobeStack = createStackNavigator();
function WardrobeScreen() {
  return (
    <WardrobeStack.Navigator screenOptions={{...navigationOptions}}>
      <WardrobeStack.Screen name="Wardrobe" component={WardrobeMainPage} />
    </WardrobeStack.Navigator>
  );
}

export default () => {
  return <DrawerRoutes component={WardrobeScreen} name="Wardrobe" />;
};
