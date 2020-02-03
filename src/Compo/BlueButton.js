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
  }

  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          width: '100%',
          height: 100,
          backgroundColor: '#AFA',
        }}>
        <TouchableOpacity style={{backgroundColor: '#EaE3Ea'}}>
          <Text> This is blue button</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
