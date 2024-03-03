import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const App = () => {
  const [cvar,setCvar] = useState('0');
  const [v, setV ] = useState(true);
  const [ris, setRis ] = useState('0');

  const Press1 = () => {
    if(v==false){setV(true);}
    if(cvar=='0'){
      setCvar('1');
      setRis('1');
    }else{
      setCvar(cvar + '1');
      setRis(ris + '1');
    }
    if(v==false){
      setV(true);
      setRis('1');
    }
  };
  const Press2 = () => {
    if(v==false){setV(true);}
    if(cvar=='0'){
      setCvar('2');
      setRis('2');
    }else{
      setCvar(cvar + '2');
      setRis(ris + '2');
    }
    if(v==false){
      setV(true);
      setRis('2');
    }
  };
  const Press3 = () => {
    if(v==false){setV(true);}
    if(cvar=='0'){
      setCvar('3');
      setRis('3');
    }else{
      setCvar(cvar + '3');
      setRis(ris + '3');
    }
    if(v==false){
      setV(true);
      setRis('3');
    }
  };
  const Press4 = () => {
    if(v==false){setV(true);}
    if(cvar=='0'){
      setCvar('4');
      setRis('4');
    }else{
      setCvar(cvar + '4');
      setRis(ris + '4');
    }
    if(v==false){
      setV(true);
      setRis('4');
    }
  };
  const Press5 = () => {
    if(v==false){setV(true);}
    if(cvar=='0'){
      setCvar('5');
      setRis('5');
    }else{
      setCvar(cvar + '5');
      setRis(ris + '5');
    }
    if(v==false){
      setV(true);
      setRis('5');
    }
  };
  const Press6 = () => {
    if(v==false){setV(true);}
    if(cvar=='0'){
      setCvar('6');
      setRis('6');
    }else{
      setCvar(cvar + '6');
      setRis(ris + '6');
    }
    if(v==false){
      setV(true);
      setRis('6');
    }
  };
  const Press7 = () => {
    if(v==false){setV(true);}
    if(cvar=='0'){
      setCvar('7');
      setRis('7');
    }else{
      setCvar(cvar + '7');
      setRis(ris + '7');
    }
    if(v==false){
      setV(true);
      setRis('7');
    }
  };
  const Press8 = () => {
    if(v==false){setV(true);}
    if(cvar=='0'){
      setCvar('8');
      setRis('8');
    }else{
      setCvar(cvar + '8');
      setRis(ris + '8');
    }
    if(v==false){
      setV(true);
      setRis('8');
    }
  };
  const Press9 = () => {
    if(cvar=='0'){
      setCvar('9');
      setRis('9');
    }else{
      setCvar(cvar + '9');
      setRis(ris + '9');
    }
    if(v==false){
      setV(true);
      setRis('9');
    }
  };
  const Press0 = () => {
    if(v==false){setV(true);}
    if(cvar=='0'){
      setCvar('0');
      setRis('0');
    }else{
      setCvar(cvar + '0');
      setRis(ris + '0');
    }
    if(v==false){
      setV(true);
      setRis('0');
    }
  };
  const Pressvi = () => {
    setCvar(cvar + '.');
    setRis(ris + ',');
  };
  const Pressac = () => {
    setCvar('0');
    setRis('0');
  };
  const Pressmp = () => {
    let si = '';
    setCvar(cvar*-1);
    si = cvar*-1;
    si = si.toString();
    si = si.replace('.', ',');
    setRis(si);
  };
  const Pressc = () => {
    let cv=cvar;
    let pos=0;
    let si = '';
    while ((!isNaN(cv.charAt(pos)) || cv.charAt(pos)=='.') && pos<cv.length) {
      pos++;
    }
    pos++;
    cv = cv.substring(0, pos);
    si=eval((ris.replace(',', '.')) + '/100');
    if(pos==(cv.length+1)){setCvar(si);}
    else{setCvar(cv + si);}
    si = si.toString();
    si = si.replace('.', ',');
    setRis(si);
  };
  const Pressd = () => {
    setCvar(cvar + '/');
    setV(false);
  };
  const Pressp = () => {
    setCvar(cvar + '*');
    setV(false);
  };
  const Pressm = () => {
    setCvar(cvar + '-');
    setV(false);
  };
  const Presspi = () => {
    setCvar(cvar + '+');
    setV(false);
  };
  const Pressris = () => {
    if (Number.isInteger(eval(cvar))) {
      setRis(eval(cvar));
      setCvar(eval(cvar));
    }else{
      let y = (eval(cvar)).toString();
      let x = y.indexOf('.');
      let st = eval(cvar).toFixed(7-x);
      let def = (parseFloat(st)).toString();
      setRis(def.replace('.', ','));
      setCvar(def);
      setV(false);
    }
  };

  
  return (
      <View style={{backgroundColor:"black"}}>
        <View style={styles.out}>
          <Text style={styles.title}> </Text>
        </View>
        <View style={styles.out}>
          <Text style={styles.title}>{ris}</Text>
        </View>
        <View style={styles.row}>
            <TouchableOpacity style={styles.bot1} onPress={Pressac}>
              <Text style={styles.t1}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bot1} onPress={Pressmp}>
              <Text style={styles.t1}>+/-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bot1} onPress={Pressc}>
              <Text style={styles.t1}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bot2} onPress={Pressd}>
              <Text style={styles.t}>÷</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <TouchableOpacity style={styles.bot3} onPress={Press7}>
              <Text style={styles.t}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bot3} onPress={Press8}>
              <Text style={styles.t}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bot3} onPress={Press9}>
              <Text style={styles.t}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bot2} onPress={Pressp}>
              <Text style={styles.t}>×</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <TouchableOpacity style={styles.bot3} onPress={Press4}>
              <Text style={styles.t}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bot3} onPress={Press5}>
              <Text style={styles.t}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bot3} onPress={Press6}>
              <Text style={styles.t}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bot2} onPress={Pressm}>
              <Text style={styles.t}>–</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <TouchableOpacity style={styles.bot3} onPress={Press1}>
              <Text style={styles.t}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bot3} onPress={Press2}>
              <Text style={styles.t}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bot3} onPress={Press3}>
              <Text style={styles.t}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bot2} onPress={Presspi}>
              <Text style={styles.t}>+</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <TouchableOpacity style={styles.bot31} onPress={Press0}>
              <Text style={styles.t}>0          </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bot3} onPress={Pressvi}>
              <Text style={styles.t}>,</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bot2} onPress={Pressris}>
              <Text style={styles.t}>=</Text>
            </TouchableOpacity>
        </View>
        <Text> </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  t: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    margin: 20,
    marginBottom: 24,
    fontWeight: 'bold',
  },
  t1: {
    color: 'black',
    textAlign: 'center',
    fontSize: 28,
    margin: 14,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 70,
    margin: 10,
  },
  row: {
    flex:1,
    justifyContent:'center',
    flexDirection: 'row',
    backgroundColor:"black",
  },
  out: {
    flex:1.3,
    justifyContent:'Right',
    flexDirection: 'row',
    backgroundColor:"black",
  },
  bot1: {
    borderRadius: 70,
    flex: 1,
    borderWidth: 5,
    borderColor:"black",
    backgroundColor:"#D1D1D8",
    justifyContent:'center',
  },
  bot2: {
    borderRadius: 70,
    flex: 1,
    borderWidth: 5,
    borderColor:"black",
    backgroundColor:"#F29E33",
    justifyContent:'center',
  },
  bot3: {
    borderRadius: 70,
    flex: 1,
    borderWidth: 5,
    borderColor:"black",
    backgroundColor:"#272728",
    justifyContent:'center',
  },
  bot31: {
    borderRadius: 70,
    flex: 2.03,
    borderWidth: 5,
    borderColor:"black",
    backgroundColor:"#272728",
    justifyContent:'center',
  }
});

export default App;

// npx expo start --tunnel
// ctrl c uscire 
// npx create-expo-app nomeprogect