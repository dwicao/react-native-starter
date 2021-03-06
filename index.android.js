/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class Home extends Component {
  state = {
    amountTotal: 0,
    tipPercentage: 0.15,
    tipTotal: 0
  };

  calculateTip(value) {
    this.state.amountTotal = value;
    this.state.tipTotal = value * this.state.tipPercentage;
    this.setState(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Amount Total:
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={this.calculateTip.bind(this)}>
        </TextInput>
        <Text>
          Total Tip:
        </Text>
        <Text style={styles.amount}>
          ${this.state.tipTotal.toFixed(2)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    textAlign: 'left',
    color: '#333333',
    margin: 5,
    height: 50,
    width: 200,
    borderColor: '#60b7e2',
    borderWidth: 1
  },
  amount: {
    fontWeight: 'bold',
    textAlign: 'left'
  }

});

AppRegistry.registerComponent('Home', () => Home);
