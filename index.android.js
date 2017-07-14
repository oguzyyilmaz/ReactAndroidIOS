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
  {title: 'Title', year: '2015', posters: {thumbnail: 'http://www.resimyukleyin.net/images/2016/02/13/en-iyi-resim-ve-fotograf-format-donusturme-manset_640x360.jpg'}},
];

async function getMoviesFromApi() {
  try {
    let response = await fetch('https://facebook.github.io/react-native/movies.json');
    let responseJson = await response.json();
    console.log(responseJson);
  //  this.state.myData=responseJson.movies;
    return responseJson;
  } catch(error) {
    console.error(error);
  }
}
export default class projectOne extends Component {
constructor() {
  super()
  this.state = {myData: []}
}
async componentDidMount(){
//  this.state.myData = await getMoviesFromApi();
  this.setState({
     myData: await getMoviesFromApi()
 });
  console.log("didmount",this.state.myData)
}
  render() {
      var movie = MOCKED_MOVIES_DATA[0];
      console.log(MOCKED_MOVIES_DATA)

    return (

      <View style={styles.container}>
        <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Bibilen</Text>
        </View>
        <View style={styles.bodyContainer}>
        <Text>{movie.title}</Text>
        <Text>{movie.year}</Text>
        <Text>
        {this.state.myData.title}
        </Text>
        {console.log("bok",this.state.myData.title)}
        <Image
        source={{uri: movie.posters.thumbnail}}
        style={styles.thumbnail}/>
        </View>
      </View>
    );
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
    backgroundColor: 'red',
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

AppRegistry.registerComponent('projectOne', () => projectOne);
