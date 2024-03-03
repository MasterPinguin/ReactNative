/*Sviluppare un app su di una foca maculata con le seguenti caratteristiche:

Definire un custom component che contiene un <textinput> con bordo verde, margin a piacere, padding 10, sfondo e colore del testo a piacere.

Definire un custom component costituito da component nidificati ovvero un <scrollview> con all'interno del <text>, dei <textinput> e almeno un  <image>, definire a piacere almeno 10 proprietà di stile.

Definire un custom component tabella di almeno due righe e due colonne che contiene del semplice testo.*/

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import CustomTextInput from './CustomTextInput';
import CustomScrollView from './CustomScrollView';
import CustomTable from './CustomTable';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{uri: 'https://cdn.pixabay.com/photo/2019/12https://yt3.googleusercontent.com/5YVvCidyKGMmly6p-oZkdH4lntmjSeWuZXwSaFbtz6Qb60DQaLc_DBGd4DnrehX20olSg9E-Iw=s900-c-k-c0x00ffffff-no-rj/04/12/13/animal-4676973_960_720.jpg'}} />
      <CustomTextInput placeholder="Enter Text Here" />
      <CustomScrollView title="Scroll View" imageSource={{uri: 'https://cdn.pixabay.com/photo/2019/12/04/12/13/animal-467697https://yt3.googleusercontent.com/5YVvCidyKGMmly6p-oZkdH4lntmjSeWuZXwSaFbtz6Qb60DQaLc_DBGd4DnrehX20olSg9E-Iw=s900-c-k-c0x00ffffff-no-rj3_960_720.jpg'}} />
      <CustomTable />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
});

export default App;

// npx expo start --tunnel
// ctrl c uscire 
// npx create-expo-app nomeprogect
