import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import Log from './src/Log'
import Main from './src/Main'
import { createStackNavigator } from 'react-navigation';


class App extends React.Component {
  render() {
    return (
      <StackNav />
    );
  }
}

const StackNav = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: ({ navigation, header }) => ({
      ...header,
      headerTintColor: 'white',
      title: 'Impressions',
      headerStyle: { backgroundColor: 'black', borderWidth: 1, height: 60 },
    })
  },
  Log: {
    screen: Log,
    navigationOptions: ({ navigation, header }) => ({
      ...header,
      headerTintColor: 'white',
      title: 'Log History',
      headerStyle: { backgroundColor: 'black', borderWidth: 1, height: 60 },
    })
  }
})

export default StackNav

