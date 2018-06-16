import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class Log extends React.Component {
  constructor() {
    super();
    this.state = {
      newDate: '',
      newEntry: ''
    }
  }

  handleDatePress = (event) => {
    this.setState({
      newDate: event
    })
  }

  handleEntryPress = (event) => {
    this.setState({
      newEntry: event
    })
  }

  handleClick = (event) => {
    
  }
  render() {
    return (
      <View style={styles.ViewWrap}>
        <View style={styles.dateInputWrap}>
          <TextInput
          style={styles.dateInput}
          value={this.state.newDate}
          placeholder='Add a date!'
          onChangeText={this.handleDatePress}
          />
        </View>
        <View style={styles.inputWrap}>
          
          <TextInput
          multiline={true}
          style={styles.input}
          onChangeText={this.handleEntryPress}
          value={this.state.newEntry}
          placeholder='Add a new entry here!'
          />
        </View>
        <Text>{this.state.newEntry}</Text>
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
    backgroundColor: '#bed4f7'
  },
  dateInputWrap: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 30,
    marginLeft: 30,
    marginRight: 147,
    height: 35,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 5,
    // color: 'red',
    borderWidth: 1
  },
  dateInput: {
    
  },
  inputWrap: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    marginLeft: 30,
    marginRight: 30,
    height: 200,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: 'white',
    // color: 'red',
    borderWidth: 1
  },
  input: {
    // borderColor: 'black',
  },
  newEntryBtn: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
