import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabRoutes from './app/TabRoutes';
import {createStackNavigator} from '@react-navigation/stack';
import NewWardrobeItemModal from './pages/WardrobePages/NewWardrobeItem';
import Camera from './pages/Camera';

const RootStack = createStackNavigator();

const App: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          header: () => undefined,
        }}>
        <RootStack.Screen name="root" component={TabRoutes} />
        <RootStack.Screen name="newWardrobeItemModal" component={Camera} />
      </RootStack.Navigator>
      {/* <TabRoutes /> */}
    </NavigationContainer>
  );
};

export default App;
