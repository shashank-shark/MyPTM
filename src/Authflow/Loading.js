import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';

export default class Loading extends Component {
    render () {
        return (
            <View style={styles.container}>
            <Text>Checking Authentication</Text>
            <Text>Please wait for a moment</Text>
            <ActivityIndicator size="large" />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  })