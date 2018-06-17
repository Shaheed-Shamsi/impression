import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'

class Single extends React.Component {
  
  render() {

    const { navigation } = this.props
    const entryDate = navigation.getParam('date', 'no input')
    const entryText = navigation.getParam('text', 'no input')

    return (
      <View style={styles.outerViewWrap}>
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
  outerViewWrap: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#bed4f7'
  },
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
