import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux'

class Single extends React.Component {
  
  render() {

    const { navigation } = this.props
    const entryDate = navigation.getParam('date', 'no input')
    const entryText = navigation.getParam('text', 'no input')
    const entryPolarity = navigation.getParam('polarity', 'no input')
    const entryBackground = navigation.getParam('backGround', 'no input')
    const entryAlbum = navigation.getParam('album', 'no input')
    
    return (
      <View style={{
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: entryBackground,
      }}>
        <View style={styles.viewWrap}>
          <Text style={styles.entryDate}>{entryDate}</Text>
          <Text>{entryText}</Text>
        </View>
        <Text style={styles.albumRec}>Album Recommendation</Text>
        <Text style={styles.albumTitle}>Album: {entryAlbum.name}</Text>
        <Text style={styles.albumArtist}>Artist: {entryAlbum.artist}</Text>
        <View style={styles.imageWrap}>
        {
          (entryAlbum.image[0]['#text']) ? <Image
          style={styles.albumImageStyle}
          source={{uri: entryAlbum.image[0]['#text'] + ''}}
          /> : ''
        }
        </View>
        <Text style={styles.url}>url: {entryAlbum.url}</Text>
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
    marginTop: 35,
    marginLeft: 30,
    marginRight: 30,
    height: 200,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
  },
  albumImageStyle: {
    width: 100,
    height: 100
  },
  imageWrap: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  albumRec: {
    textAlign: 'center',
    fontSize: 24
  },
  albumTitle: {
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 10
  },
  albumArtist: {
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 10
  },
  url: {
    textAlign: 'center',
    fontSize: 9,
    paddingTop: 15
  },
  entryDate: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    paddingBottom: 5
  },
});
