import React, {FunctionComponent} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Tops from '../pages/WardrobePages/Tops';
import Bottoms from '../pages/WardrobePages/Bottoms';
import Shoes from '../pages/WardrobePages/Shoes';

interface IDrawerRoutes {
  component: FunctionComponent;
  name: string;
}
const Drawer = createDrawerNavigator();
export const DrawerRoutes: React.FC<IDrawerRoutes> = props => {
  return (
    <Drawer.Navigator initialRouteName={props.name || 'Tops'}>
      <Drawer.Screen name="Tops" component={Tops} />
      <Drawer.Screen name="Bottoms" component={Bottoms} />
      <Drawer.Screen name="Shoes" component={Shoes} />
      <Drawer.Screen
        options={{
          drawerLabel: () => null,
          title: undefined,
          drawerIcon: () => null,
        }}
        name={props.name || 'Other'}
        component={props.component}
      />
    </Drawer.Navigator>
  );
};
