import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Homescreen extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                Sai Vidya Institute of Technology.
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});