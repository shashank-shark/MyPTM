import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Events extends React.Component {
    render () {
        return (
            <View style={styles.container}>
               <Text> Events happening in Bengaluru.</Text>
                <Button title="BACK TO HOME" onPress={() => this.props.navigation.navigate('Homescreen')}
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