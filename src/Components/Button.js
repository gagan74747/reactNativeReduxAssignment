import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';

export default function Button({flex}) {
  return (
    <View style={[styles.buttonContainer, {flex}]}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent:'center'
  },
  button: {
    width: '95%',
    backgroundColor: '#F24A58',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
