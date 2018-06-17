import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'

class Single extends React.Component {
  
  render() {

    const { navigation } = this.props
    const entryDate = navigation.getParam('date', 'no input')
    const entryText = navigation.getParam('text', 'no input')
    const entryPolarity = navigation.getParam('polarity', 'no input')
    const entryBackground = navigation.getParam('backGround', 'no input')

    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: entryBackground
      }}>
        <View style={styles.viewWrap}>
          <Text style={styles.entryDate}>{entryDate}</Text>
          <Text>{entryText}</Text>
        </View>
      </View>
    );
  }
}

const mapState = (state) => {
  return {
    allEntry: state.allEntry
  }
}

export default connect(mapState)(Single)

const styles = StyleSheet.create({
  viewWrap: {
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
    borderWidth: 1,
    marginBottom: 195,
  },
  entryDate: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    paddingBottom: 5
  },
});
