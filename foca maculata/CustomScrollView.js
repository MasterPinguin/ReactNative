import React from 'react';
import { View, Text, ScrollView, TextInput, Image, StyleSheet } from 'react-native';

const CustomScrollView = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput style={styles.textInput} placeholder="Enter Text Here" />
      <Image style={styles.image} source={props.imageSource} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000000',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

export default CustomScrollView;
