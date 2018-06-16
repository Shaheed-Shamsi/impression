import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default class Log extends React.Component {
  constructor() {
    super();
  }


  handleClick(event) {
    
  }
  render() {
    return (
      <ScrollView style={styles.scrollWrap}>
        <Text>weeee!</Text>
        <Button
        title='New Entry'
        style={styles.newEntryBtn}
        onPress={() => this.props.navigation.navigate('NewEntry')}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollWrap: {
    flex: 1,
  },
  newEntryBtn: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
