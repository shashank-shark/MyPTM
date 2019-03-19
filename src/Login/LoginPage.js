import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

import AwesomeButton from "react-native-really-awesome-button";

function Button() {
    return (
      <AwesomeButton
        progress
        onPress={next => {
          /** Do Something **/
          next();
        }}
      >
        Text
      </AwesomeButton>
    );
  }