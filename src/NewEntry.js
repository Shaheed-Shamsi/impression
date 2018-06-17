import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { addEntryThunk } from '../store/reducer'
import { connect } from 'react-redux'

class NewEntry extends React.Component {
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

  handleSubmit = () => {
    let obj = {
      date: this.state.newDate,
      text: this.state.newEntry
    }
    this.props.addEntryMethod(obj)
    this.props.navigation.navigate('Log')
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
        <Button
        title='Add'
        style={styles.newEntryBtn}
        onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addEntryMethod: (entry) => dispatch(addEntryThunk(entry))
  }
}

export default connect(null, mapDispatch)(NewEntry)



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
