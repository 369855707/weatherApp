import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { registerRootComponent } from 'expo';

class WeatherProject extends Component {
    constructor(props) {
        super(props)
        this.state = {
            zip: ''
        }
    }

    _handleTextChange = event => {
        this.setState({
            zip: event.nativeEvent.text
        })
    }

    render() {
        return (
            <View>
                <Text>
                    You input {this.state.zip}
                </Text>
                <TextInput
                    onSubmitEditing={this._handleTextChange}
                />
            </View>
        )
    }
}
