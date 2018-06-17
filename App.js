import React from 'react';
import Log from './src/Log'
import Main from './src/Main'
import NewEntry from './src/NewEntry'
import SingleEntry from './src/SingleEntry'
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'
import store from './store/reducer'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StackNav />
      </Provider>
    );
  }
}

const StackNav = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: ({ navigation, header }) => ({
      ...header,
      headerTintColor: 'white',
      title: 'Welcome',
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
  },
  NewEntry: {
    screen: NewEntry,
    navigationOptions: ({ navigation, header }) => ({
      ...header,
      headerTintColor: 'white',
      title: 'New Entry',
      headerStyle: { backgroundColor: 'black', borderWidth: 1, height: 60 },
    })
  },
  SingleEntry: {
    screen: SingleEntry,
    navigationOptions: ({ navigation, header }) => ({
      ...header,
      headerTintColor: 'white',
      title: 'Log History',
      headerStyle: { backgroundColor: 'black', borderWidth: 1, height: 60 },
    })
  }
})

export default App

