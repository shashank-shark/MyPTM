import React, { Components } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";
import { TextInput } from 'react-native-gesture-handler';
// import { styles } from 'react-native-really-awesome-button/src/styles';

export default class Signup extends Components {
    state = {
        email: '',
        password: '',
        errorMessage: null,
    }

    handleSignUp = () => {
        // here we write the code for signup operations
        console.log ('Signup operation performed here');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Signup</Text>
                {this.state.errorMessage && <Text style={{color: 'red'}}>
                    {this.state.errorMessage}
                </Text>}
                <TextInput 
                placeholder="Email"
                autoCapitalize="none"
                style={styles.textInput}
                onChangeText={email => this.setState({email})}
                value={this.state.email}
                />

                <Button title="Sign Up" onPress={this.handleSignUp} />
                <Button title="Already have an account? Login"
                onPress={() => this.props.navigation.navigate('Login')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textInput: {
      height: 40,
      width: '90%',
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 8
    }
  })