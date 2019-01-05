/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

export default class App extends Component{

	state = {
		count: 0
	};

  render() {
    return (
      <View style={styles.text}>
				<Text>{this.state.count}</Text>
				<Button
					title="tambah" 
					onPress={() => this.setState({ count: this.state.count + 1 })}
				/>
				<Button
					title="kurang" 
					onPress={() => this.setState({ count: this.state.count - 1 })}
				/>
				<Button
					title="reset"
					onPress={() => this.setState({ count: this.state.count = 0 })}
				/>
			</View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
		flex: 1,
    justifyContent: "center",
		alignItems: "center",
    backgroundColor: "#F5FCFF"
	}
});
