import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';

export default function App() {
  // Stati per gestire gli input e il contenuto del file
  const [inputText, setInputText] = useState('');
  const [fileContent, setFileContent] = useState('');
  const [letterToReplace, setLetterToReplace] = useState('');
  const [replacementLetter, setReplacementLetter] = useState('');
  const [letterCount, setLetterCount] = useState(0);

  // Funzione per creare e scrivere su un file
  const createAndWriteToFile = async () => {
    const fileUri = FileSystem.documentDirectory + 'testFile.txt';
    await FileSystem.writeAsStringAsync(fileUri, inputText);
    console.log('File scritto correttamente');
  };

  // Funzione per leggere il contenuto di un file
  const readFromFile = async () => {
    const fileUri = FileSystem.documentDirectory + 'testFile.txt';
    const fileInfo = await FileSystem.readAsStringAsync(fileUri);
    setFileContent(fileInfo);
    setLetterCount(countLetters(fileInfo));
  };

  // Funzione per contare le lettere nel testo
  const countLetters = (text) => {
    const regex = /[a-zA-Z]/g;
    const matches = text.match(regex);
    return matches ? matches.length : 0;
  };

  // Funzione per sostituire una lettera nel testo
  const replaceLetter = () => {
    if (fileContent && letterToReplace && replacementLetter) {
      const updatedText = fileContent.split(letterToReplace).join(replacementLetter);
      setFileContent(updatedText);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Interazione con file di testo</Text>
      
      {/* Input per inserire il testo da scrivere */}
      <TextInput
        style={styles.input}
        onChangeText={text => setInputText(text)}
        value={inputText}
        placeholder="Inserisci il testo da scrivere"
      />
      
      {/* Bottone per creare e scrivere su un file */}
      <View style={styles.buttonContainer}>
        <Button title="Crea e scrivi su file" onPress={createAndWriteToFile} color="#408880" />
      </View>
      
      {/* Visualizzazione del contenuto del file */}
      <Text style={styles.fileContent}>{fileContent}</Text>
      
      {/* Visualizzazione del numero di lettere nel file */}
      <Text style={styles.title}>Numero di lettere nel file: {letterCount}</Text>
      
      {/* Input per inserire la lettera da cercare */}
      <TextInput
        style={styles.input}
        onChangeText={text => setLetterToReplace(text)}
        value={letterToReplace}
        placeholder="Inserisci la lettera da cercare"
      />
      
      {/* Input per inserire la lettera di sostituzione */}
      <TextInput
        style={styles.input}
        onChangeText={text => setReplacementLetter(text)}
        value={replacementLetter}
        placeholder="Inserisci la lettera di sostituzione"
      />
      
      {/* Bottone per sostituire la lettera nel testo */}
      <View style={styles.buttonContainer}>
        <Button title="Sostituisci lettera" onPress={replaceLetter} color="#408880" />
      </View>
            {/* Bottone per leggere il contenuto del file */}
      <View style={styles.buttonContainer}>
        <Button title="Leggi file" onPress={readFromFile} color="#408880" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#c0fff0',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    fontWeight: 'bold',
    height: 40,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderColor: '#444444',
    borderWidth: 3,
  },
  buttonContainer: {
    width: '50%',
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
    borderColor: '#444444',
    borderWidth: 3,
    backgroundColor: '#ffffff',
  },
  fileContent: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});