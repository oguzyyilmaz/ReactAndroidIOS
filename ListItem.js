import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

var MOCKED_MOVIES_DATA = [
  {title: 'Title',
   year: '2015',
  posters: {thumbnail: 'http://www.resimyukleyin.net/images/2016/02/13/en-iyi-resim-ve-fotograf-format-donusturme-manset_640x360.jpg'}
},
  {
    title: 'Title',
     year: '2015',
    posters: {thumbnail: 'http://www.resimyukleyin.net/images/2016/02/13/en-iyi-resim-ve-fotograf-format-donusturme-manset_640x360.jpg'}
},
];

export default class listItem extends Component {
  var movie1 = MOCKED_MOVIES_DATA[0];
  var movie2 = MOCKED_MOVIES_DATA[1];
  render() {
    return(
      <View style={styles.bodyContainer}>
      <Text>
      {movie1.title}
      </Text>
      <Text>
      {movie1.year}
      </Text>
      <Image
      source={{uri: movie1.posters.thumbnail}}
      style={styles.thumbnail}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  bodyContainer: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  headerContainer: {
    flex: 1,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  thumbnail: {
  width: 53,
  height: 81,
  },
  headerText:{
    fontSize: 20,
    top: 0,
  },
});
