import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

type Porps = {};

export default class helloworld extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.department}>Department of CSE.</Text>
                <Text style={styles.college}>Sai Vidya Institute of Technology.</Text>
                <Text style={styles.place}>Rajankunte, Bengaluru</Text>
            </View>
        );
    }
}