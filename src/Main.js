import React from 'react';
import { StyleSheet, ImageBackground, View, Button, Text } from 'react-native';


export default class Main extends React.Component {
  render() {
    return (
        <ImageBackground
        style={styles.imageStyle}
        source={require('/Users/shaheed/Senior/impression/public/backImage.jpg')}
        >
          <View style={styles.btnView}>
          <Text style={styles.titleText}>Impressions</Text>
          <Button
            title='Login'
            style={styles.enterBtn}
            onPress={() => this.props.navigation.navigate('Log')}
            />
          </View>
          
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
    width: undefined,
    height: undefined,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },
  titleText: {
    textAlign: 'center',
    color: '#42c8f4',
    fontSize: 36,
    paddingBottom: 400
  },
  enterBtn: {
    color: 'white'
  },
  btnView: {
    paddingBottom: 200,
    
  }
});
