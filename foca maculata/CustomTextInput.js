import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const CustomTextInput = (props) => {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.textInput} 
        placeholder={props.placeholder} 
        onChangeText={props.onChangeText} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#00ff00',
  },
  textInput: {
    color: '#000000',
    backgroundColor: '#ffffff',
  },
});

export default CustomTextInput;