import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux'

class Log extends React.Component {
  constructor() {
    super();
  }


  handleClick(event) {
    
  }
  render() {
    return (
      <ScrollView style={styles.scrollWrap}>
      {
        this.props.allEntry.map(entry => {
          return (
            <View key={entry.date}>
              <Text>{entry.date}</Text>
              <Text>{entry.text}</Text>
            </View>
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
  },
  newEntryBtn: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
