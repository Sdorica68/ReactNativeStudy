/**
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default class BlueButton extends React.Component {
  constructor(props) {
    super(props);
    console.log(' Blue Button is constructed !!! \n\n\n');
    // Initialize
    this.state = {theText: 'Initial Text', another: {age: 3}, theNum: 0};
    this.count = 0;
  }

  render() {
    const {theText, theNum} = this.state;
    const theColor = `#EE${theNum}`;
    console.log(`\n\n Render \n\n this.count :: ${this.count}`, this.state);
    return (
      <View
        style={{
          alignItems: 'center',
          width: '100%',
          height: 100,
          backgroundColor: '#229',
        }}>
        <TouchableOpacity
          onPress={() =>
            this.setState({theText: 'Changed', theNum: this.state.theNum + 1})
          }
          style={{backgroundColor: theColor, margin: 5}}>
          <Text> This is blue button</Text>
          <Text>
            {theText} {theColor}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.count += 1;
            console.log(' I added this.count', this.count);
          }}
          style={{backgroundColor: '#CCC', margin: 5}}>
          <Text> This is just member variable ..</Text>
          <Text>this.count is {this.count}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
