import React, { useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Button, ImageBackground} from 'react-native';

const cacio = {
  nome1: 'caciocavalli podolici',
  nome10: 'i migliori al mondo ',
  nome2: 'assapora un gusto',
  nome20: 'rude ma raffinato con',
  nome200: 'caciocavallo podolico',
};

const App = () => {
  const [count, setCount] = useState(0);

  const Press = () => {
    setCount(count + 1);
  };

  const [showText, setShowText] = useState(false);

  const BPress = () => {
    setShowText(!showText);
  };

  return (
    <ImageBackground style={styles.table} source={'https://cdn.shopify.com/s/files/1/0506/0742/3640/products/Carmasciando_Caciocavallo_podolico_stagionato_breve.jpg?v=1623256097'} resizeMode="cover">
    <ScrollView style={styles.table} >
      <View style={styles.table}>
        <View style={styles.table}>
          <Text style={styles.title}> CACIOCAVALLO PODOLICO</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.cella}>
            <Image style={styles.image} source={{uri: 'https://www.ilbuongustaiomatera.it/wp-content/uploads/2018/12/img_4405.jpg',}}/>
            <Text style={styles.testo}>{cacio.nome1}</Text>
            <Text style={styles.testo}>{cacio.nome10}</Text>
          </View>
          <View style={styles.bott}>
            <Text style={styles.space}> caciocavalli: {count}</Text>
            <Button color="#452411" title="Aggiungi" onPress={Press} />
          </View>
          <View style={styles.cella}>
            <Image style={styles.image} source={{uri: 'https://www.lamassaia.it/945-large_default/caciocavallo-podolico.jpg',}}/>
            <Text style={styles.testo}>{cacio.nome2}</Text>
            <Text style={styles.testo}>{cacio.nome20}</Text>
            <Text style={styles.testo}>{cacio.nome200}</Text>
          </View>
          <View style={styles.bott}>
            <Button color="#582E16" title="      Compra      " onPress={BPress} />
            {showText && <Text style={styles.testo}> Aquistato con </Text> }
            {showText && <Text style={styles.testo}> successo!!!</Text> }
          </View>
        </View>
        <View style={styles.table}>
          <Text style={styles.title}> </Text>
          <Text style={styles.title}> </Text>
        </View>
    </View>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    margin: 10,
    marginBottom: 40,
  },
  space: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  table: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap',
    alignContent:'column',
    borderColor: '#000000',
  },
  cella: {
    margin: 10,
    marginBottom: 30,
  },
  bott: {
    marginLeft: 15,
    marginBottom: 30,
  },
  row: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    alignContent:'column',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  testo: {
    color: 'white',
    fontWeight: 'bold',
    borderColor: '#000000',
    fontSize: 14,
    marginLeft: 20,
  },
  image: {
    width: 125,
    height: 100,
    marginLeft: 35,
    borderRadius: 20,
  },
});

export default App;

// npx expo start --tunnel
// ctrl c uscire 
// npx create-expo-app nomeprogect