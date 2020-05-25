import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {StackHeaderProps} from '@react-navigation/stack';

interface IAppHeader extends StackHeaderProps {}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#F6D2AD',
    color: 'white',
    minHeight: 30,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

const AppHeader: React.FunctionComponent<IAppHeader> = props => {
  const {
    scene: {
      route: {name: RouteName},
    },
  } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{RouteName}</Text>
    </View>
  );
};

export default AppHeader;
