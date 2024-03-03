import React from 'react';
import {Text, Image, ScrollView, TextInput } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text> </Text>
      <Text> </Text>
      <Text style={{ color: 'green', fontFamily: 'Verdana', fontSize: 20, textAlign: 'center' }}>
        Un <Text style={{ fontWeight: 'bold' }}>testo</Text> <Text style={{ fontStyle: 'italic' }}>verde</Text>
      </Text>
      <Image
        source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png',}}
        style={{ width: 380, height: 380 }}
      />
      <TextInput
        style={{ height: 40, borderColor: 'blue', borderWidth: 1, backgroundColor: 'pink' }}
        placeholder="Inserisci il tuo nome"
      />
    </ScrollView>
  );
};

export default App;

// npx expo start --tunnel
// ctrl c uscire 
// npx create-expo-app nomeprogect