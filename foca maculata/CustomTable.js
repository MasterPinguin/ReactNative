import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomTable = () => {
  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.cell}>Riga 1, Colonna 1</Text>
        <Text style={styles.cell}>Riga 1, Colonna 2</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>Riga 2, Colonna 1</Text>
        <Text style={styles.cell}>Riga 2, Colonna 2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
});

export default CustomTable;
