import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Homescreen extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>Sai Vidya Institute of Technology.</Text>
                <Button title="EVENTS" onPress={() => this.props.navigation.navigate('Events')}
                 />
                 <Button title="ESCORT" onPress={() => this.props.navigation.navigate('Escort')}
                 />
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