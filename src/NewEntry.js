import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class Log extends React.Component {
  constructor() {
    super();
  }


  handleClick(event) {
    
  }
  render() {
    return (
      <View style={styles.ViewWrap}>
        <Text>add a new entry here!</Text>
        <Button
        title='Add'
        style={styles.newEntryBtn}
        onPress={() => this.props.navigation.navigate('Log')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewWrap: {
    flex: 1,
  },
  newEntryBtn: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
