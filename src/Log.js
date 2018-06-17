import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

class Log extends React.Component {
  constructor() {
    super();
  }


  handlePress = (entry) => {
    this.props.navigation.navigate('SingleEntry', entry)
  }
  render() {
    return (
      <ScrollView style={styles.scrollWrap}>
      {
        this.props.allEntry.map(entry => {
          return (
            <TouchableOpacity key={entry.date} onPress={() => this.handlePress(entry)}>
              <View style={styles.logWrap}>
                <Text style={styles.entryDate}>{entry.date}</Text>
                <Text style={styles.entryText}>{entry.text}</Text>
              </View>
            </TouchableOpacity>
          )
        })
      }
        <Button
        title='New Entry'
        style={styles.newEntryBtn}
        onPress={() => this.props.navigation.navigate('NewEntry')}
        />
      </ScrollView>
    );
  }
}

const mapState = (state) => {
  return {
    allEntry: state.allEntry
  }
}

export default connect(mapState)(Log)

const styles = StyleSheet.create({
  scrollWrap: {
    flex: 1,
    backgroundColor: '#bed4f7'
  },
  logWrap: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    height: 200,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: 'white',
    borderWidth: 1
  },
  entryDate: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    paddingBottom: 5
  },
  entryText: {

  },
  newEntryBtn: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
