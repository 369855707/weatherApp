import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ImageBackground, TextInput } from 'react-native';
import Forecast from './Forecast';
import OpenWeatherMap from './open_weather_map'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zip: '',
      forecast: null
    }
  }

  _handleTextChange = event => {
    let zip = event.nativeEvent.text;
    OpenWeatherMap.fetchForecast(zip)
      .then(forecast => {
        console.log(forecast);
        this.setState({
          forecast: forecast,
          zip: zip
        })
      })
  }

  render() {
    let content = null;
    if (this.state.forecast != null) {
      content = (
        <Forecast
          main={this.state.forecast.main}
          description={this.state.forecast.description}
          temp={this.state.forecast.temp}
        />
      )
    }

    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./flowers.png")}
          resizeMode="cover"
          style={styles.backdrop}
        >

          <Text style={styles.welcome}>
            You input : {this.state.zip}
          </Text>
          {content}
          <TextInput
            style={styles.input}
            onSubmitEditing={this._handleTextChange}
          />

        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", //垂直居中
    alignItems: "center", //水平居中
    backgroundColor: "#666666"
  },

  welcome: {
    fontSize: 20,
    margin: 10
  },

  input: {
    fontSize: 20,
    borderWidth: 2,
    padding: 2,
    height: 40,
    width: 100
  },
  backdrop: {
    flex: 1,
    flexDirection: "column"
  }

})

