import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const boolArray = [false, false, false, false, false, false, false, false, false, false];

export const boolMatrix = [
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false]
];

const Page0 = ({ onNext }) => {
  return (
    <View>
      <Text style={styles.text}>BENVENVENUTO SUL NOSTRO QUIZ SULLA FISICA QUANTISTICA</Text>
      <Text style={styles.text}> </Text>
      <Text style={styles.text}> </Text>
      <Text style={styles.text}> </Text>
      <TouchableOpacity onPress={onNext} style={styles.button}>
        <Text style={styles.buttonText}>INIZIA IL QUIZ</Text>
      </TouchableOpacity>
    </View>
  );
};

const Page1 = ({ onNext }) => {
  let x=0;
  
  const [options, setOptions] = useState([
    { id: 1, label: 'L\'atomo è la particella piú piccola conoscita dall\'uomo e non ha componenti più piccole.', selected: boolMatrix[x][0], risp:"a" },
    { id: 2, label: 'L\'atomo è uno dei più piccoli componenti dell\'universo ed è composto da protoni,elettroni e neutroni le piú piccole particelle conosciute dall\'uomo e non ha componenti più piccoli.', selected: boolMatrix[x][1], risp:"b" },
    { id: 3, label: 'L\'atomo è uno dei più piccoli componenti dell\'universo ed è composto da bosoni,elettroni e Quark.', selected: boolMatrix[x][2], risp:"c" },
    { id: 4, label: 'L\'atomo è uno dei più piccoli componenti dell\'universo ed è composto da protoni,elettroni e neutroni che a loro volta sono composti da altre particelle ancora piu piccole, le particelle elementari.', selected: boolMatrix[x][3], risp:"d" },
  ]);

  const handleOptionClick = (id) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option) => {
        return {
          ...option,
          selected: option.id === id ? true : false,
        };
      });
    });
  };

  const allClickNext = async () => {
    await handleCompareButtonClick();
    await onNext();
  };

  const handleCompareButtonClick = async () => {
    const selectedOption = options.find((option) => option.selected); 

    for(i=0;i<4;i++){
      boolMatrix[x][i]=false;
    }

    if (selectedOption) {
        if (selectedOption.id === 4) {
          boolArray[x]=true;
        } else {
          boolArray[x]=false;
        }
        boolMatrix[x][selectedOption.id-1]=true;
      } else {
        boolArray[x]=false;
      }
  };

  return (
    <View>
      <View style={styles.view}>
        <Text style={styles.text}>Quesito {x+1}</Text>
        <Text style={styles.t}> </Text>
        <Text style={styles.t}> {x+1}) Cos'è l'atomo e da cosa è composto?</Text>
        <View style={styles.container111}>
          {options.map((option) => (
            <View key={option.id} style={styles.optionContainer}>
              <TouchableOpacity
              key={option.id}
              onPress={() => handleOptionClick(option.id)}
              style={[styles.button1, { backgroundColor: option.selected ? '#123d3c' : '#96fffbb9' }]}
            >
              <Text style={[styles.buttonText1,{color: option.selected ? '#96fffbb9' : '#123d3c' }]}>{option.risp}</Text>
            </TouchableOpacity>
            <Text style={styles.text1}>{option.label}</Text>
            </View>
          ))}
        </View>
        <Text> </Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={allClickNext} style={styles.button}>
          <Text style={styles.buttonText}>Avanti</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Page2 = ({ onPrev, onNext }) => {
  let x=1;
  
  const [options, setOptions] = useState([
    { id: 1, label: 'Le particelle elementari sono quelle particelle che compongono ogni essere vivente.', selected: boolMatrix[x][0], risp:"a" },
    { id: 2, label: 'Le particelle elementari sono quelle particelle alla base di ogni cosa che compongono tutto e tutti.', selected: boolMatrix[x][1], risp:"b" },
    { id: 3, label: 'Le particelle elementari sono quelle particelle che compongono ogni oggetto.', selected: boolMatrix[x][2], risp:"c" },
    { id: 4, label: 'Le particelle elementari sono un insieme di atomi.', selected: boolMatrix[x][3], risp:"d" },
  ]);

  const handleOptionClick = (id) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option) => {
        return {
          ...option,
          selected: option.id === id ? true : false,
        };
      });
    });
  };

  const allClickNext = async () => {
    await handleCompareButtonClick();
    await onNext();
  };

  const allClicPrev = async () => {
    await handleCompareButtonClick();
    await onPrev();
  };

  const handleCompareButtonClick = async () => {
    const selectedOption = options.find((option) => option.selected); 

    for(i=0;i<4;i++){
      boolMatrix[x][i]=false;
    }
    
    if (selectedOption) {
        if (selectedOption.id === 2) {
          boolArray[x]=true;
        } else {
          boolArray[x]=false;
        }
        boolMatrix[x][selectedOption.id-1]=true;
      } else {
        boolArray[x]=false;
      }
  };

  return (
    <View>
      <View style={styles.view}>
        <Text style={styles.text}>Quesito {x+1}</Text>
        <Text style={styles.t}> </Text>
        <Text style={styles.t}> {x+1}) Cosa sono le particelle elementari?</Text>
        <View style={styles.container111}>
          {options.map((option) => (
            <View key={option.id} style={styles.optionContainer}>
              <TouchableOpacity
              key={option.id}
              onPress={() => handleOptionClick(option.id)}
              style={[styles.button1, { backgroundColor: option.selected ? '#123d3c' : '#96fffbb9' }]}
            >
              <Text style={[styles.buttonText1,{color: option.selected ? '#96fffbb9' : '#123d3c' }]}>{option.risp}</Text>
            </TouchableOpacity>
            <Text style={styles.text1}>{option.label}</Text>
            </View>
          ))}
        </View>
        <Text> </Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={allClicPrev} style={styles.button}>
          <Text style={styles.buttonText}>Indietro</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={allClickNext} style={styles.button}>
          <Text style={styles.buttonText}>Avanti</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Page3 = ({ onPrev, onNext }) => {
  let x=2;
  
  const [options, setOptions] = useState([
    { id: 1, label: '17', selected: boolMatrix[x][0], risp:"a" },
    { id: 2, label: '4', selected: boolMatrix[x][1], risp:"b" },
    { id: 3, label: '3', selected: boolMatrix[x][2], risp:"c" },
    { id: 4, label: '12', selected: boolMatrix[x][3], risp:"d" },
  ]);

  const handleOptionClick = (id) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option) => {
        return {
          ...option,
          selected: option.id === id ? true : false,
        };
      });
    });
  };

  const allClickNext = async () => {
    await handleCompareButtonClick();
    await onNext();
  };

  const allClicPrev = async () => {
    await handleCompareButtonClick();
    await onPrev();
  };

  const handleCompareButtonClick = async () => {
    const selectedOption = options.find((option) => option.selected); 

    for(i=0;i<4;i++){
      boolMatrix[x][i]=false;
    }
    
    if (selectedOption) {
        if (selectedOption.id === 1) {
          boolArray[x]=true;
        } else {
          boolArray[x]=false;
        }
        boolMatrix[x][selectedOption.id-1]=true;
      } else {
        boolArray[x]=false;
      }
  };

  return (
    <View>
      <View style={styles.view}>
        <Text style={styles.text}>Quesito {x+1}</Text>
        <Text style={styles.t}> </Text>
        <Text style={styles.t}> {x+1}) Quante sono le particelle elementari?</Text>
        <View style={styles.container111}>
          {options.map((option) => (
            <View key={option.id} style={styles.optionContainer}>
              <TouchableOpacity
              key={option.id}
              onPress={() => handleOptionClick(option.id)}
              style={[styles.button1, { backgroundColor: option.selected ? '#123d3c' : '#96fffbb9' }]}
            >
              <Text style={[styles.buttonText1,{color: option.selected ? '#96fffbb9' : '#123d3c' }]}>{option.risp}</Text>
            </TouchableOpacity>
            <Text style={styles.text1}>{option.label}</Text>
            </View>
          ))}
        </View>
        <Text> </Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={allClicPrev} style={styles.button}>
          <Text style={styles.buttonText}>Indietro</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={allClickNext} style={styles.button}>
          <Text style={styles.buttonText}>Avanti</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Page4 = ({ onPrev, onNext }) => {
  let x=3;
  
  const [options, setOptions] = useState([
    { id: 1, label: 'Fermioni che comprendono 6 tipi di Leptoni e 6 tipi di Quark, 4 tipi di Bosoni e il Bosone di Higgs.', selected: boolMatrix[x][0], risp:"a" },
    { id: 2, label: 'Adroni, Barioni, Mesoni e Bosoni.', selected: boolMatrix[x][1], risp:"b" },
    { id: 3, label: 'Elettroni, Protoni, Neutroni.', selected: boolMatrix[x][2], risp:"c" },
    { id: 4, label: '3 tipi di Fotoni, 2 tipi di Tachioni, 4 tipi di Bosoni, e 3 tipi di Adroni.', selected: boolMatrix[x][3], risp:"d" },
  ]);

  const handleOptionClick = (id) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option) => {
        return {
          ...option,
          selected: option.id === id ? true : false,
        };
      });
    });
  };

  const allClickNext = async () => {
    await handleCompareButtonClick();
    await onNext();
  };

  const allClicPrev = async () => {
    await handleCompareButtonClick();
    await onPrev();
  };

  const handleCompareButtonClick = async () => {
    const selectedOption = options.find((option) => option.selected); 

    for(i=0;i<4;i++){
      boolMatrix[x][i]=false;
    }
    
    if (selectedOption) {
        if (selectedOption.id === 1) {
          boolArray[x]=true;
        } else {
          boolArray[x]=false;
        }
        boolMatrix[x][selectedOption.id-1]=true;
      } else {
        boolArray[x]=false;
      }
  };

  return (
    <View>
      <View style={styles.view}>
        <Text style={styles.text}>Quesito {x+1}</Text>
        <Text style={styles.t}> </Text>
        <Text style={styles.t}> {x+1}) Quali sono le particelle elementari?</Text>
        <View style={styles.container111}>
          {options.map((option) => (
            <View key={option.id} style={styles.optionContainer}>
              <TouchableOpacity
              key={option.id}
              onPress={() => handleOptionClick(option.id)}
              style={[styles.button1, { backgroundColor: option.selected ? '#123d3c' : '#96fffbb9' }]}
            >
              <Text style={[styles.buttonText1,{color: option.selected ? '#96fffbb9' : '#123d3c' }]}>{option.risp}</Text>
            </TouchableOpacity>
            <Text style={styles.text1}>{option.label}</Text>
            </View>
          ))}
        </View>
        <Text> </Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={allClicPrev} style={styles.button}>
          <Text style={styles.buttonText}>Indietro</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={allClickNext} style={styles.button}>
          <Text style={styles.buttonText}>Avanti</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Page5 = ({ onPrev, onNext }) => {
  let x=4;
  
  const [options, setOptions] = useState([
    { id: 1, label: 'Un qualcosa che osserva le particelle subatomiche.', selected: boolMatrix[x][0], risp:"a" },
    { id: 2, label: 'Un termine inventato appositamente per questa materia usato come nome per rappresentare e distinguere i suoi vari componenti.', selected: boolMatrix[x][1], risp:"b" },
    { id: 3, label: 'Un termine che indica l\'osservare le cose non nel loro insieme ma nelle loro singole parti.', selected: boolMatrix[x][2], risp:"c" },
    { id: 4, label: 'Una parte molto importante degli atomi.', selected: boolMatrix[x][3], risp:"d" },
  ]);

  const handleOptionClick = (id) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option) => {
        return {
          ...option,
          selected: option.id === id ? true : false,
        };
      });
    });
  };

  const allClickNext = async () => {
    await handleCompareButtonClick();
    await onNext();
  };

  const allClicPrev = async () => {
    await handleCompareButtonClick();
    await onPrev();
  };

  const handleCompareButtonClick = async () => {
    const selectedOption = options.find((option) => option.selected); 

    for(i=0;i<4;i++){
      boolMatrix[x][i]=false;
    }
    
    if (selectedOption) {
        if (selectedOption.id === 3) {
          boolArray[x]=true;
        } else {
          boolArray[x]=false;
        }
        boolMatrix[x][selectedOption.id-1]=true;
      } else {
        boolArray[x]=false;
      }
  };

  return (
    <View>
      <View style={styles.view}>
        <Text style={styles.text}>Quesito {x+1}</Text>
        <Text style={styles.t}> </Text>
        <Text style={styles.t}> {x+1}) Cosa significa il termine quantistico?</Text>
        <View style={styles.container111}>
          {options.map((option) => (
            <View key={option.id} style={styles.optionContainer}>
              <TouchableOpacity
              key={option.id}
              onPress={() => handleOptionClick(option.id)}
              style={[styles.button1, { backgroundColor: option.selected ? '#123d3c' : '#96fffbb9' }]}
            >
              <Text style={[styles.buttonText1,{color: option.selected ? '#96fffbb9' : '#123d3c' }]}>{option.risp}</Text>
            </TouchableOpacity>
            <Text style={styles.text1}>{option.label}</Text>
            </View>
          ))}
        </View>
        <Text> </Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={allClicPrev} style={styles.button}>
          <Text style={styles.buttonText}>Indietro</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={allClickNext} style={styles.button}>
          <Text style={styles.buttonText}>Avanti</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Page6 = ({ onPrev, onNext }) => {
  let x=5;
  
  const [options, setOptions] = useState([
    { id: 1, label: 'I Bosoni sono un quanto di energia.', selected: boolMatrix[x][0], risp:"a" },
    { id: 2, label: 'I Bosoni sono quelle particelle elementari responsabili dei vari tipi di interazioni tra materia come luce, forza nucleare forte e debole e persino la massa stessa della materia e oltre a essere delle particelle elementari possono anche divantare un onda.', selected: boolMatrix[x][1], risp:"b" },
    { id: 3, label: 'I Bosoni sono delle onde responsabili dei vari tipi di interazioni tra materia come luce, calore, gravità, magnetismo e forza nucleare.', selected: boolMatrix[x][2], risp:"c" },
    { id: 4, label: 'I Bosoni sono delle particelle che sono composte a loro volta da particelle elementari e principalmente vengono ricreate in laboratorio con accelleratori di particelle non esistono in natura non sintetizzati in laboratorio.', selected: boolMatrix[x][3], risp:"d" },
  ]);

  const handleOptionClick = (id) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option) => {
        return {
          ...option,
          selected: option.id === id ? true : false,
        };
      });
    });
  };

  const allClickNext = async () => {
    await handleCompareButtonClick();
    await onNext();
  };

  const allClicPrev = async () => {
    await handleCompareButtonClick();
    await onPrev();
  };

  const handleCompareButtonClick = async () => {
    const selectedOption = options.find((option) => option.selected); 

    for(i=0;i<4;i++){
      boolMatrix[x][i]=false;
    }
    
    if (selectedOption) {
        if (selectedOption.id === 2) {
          boolArray[x]=true;
        } else {
          boolArray[x]=false;
        }
        boolMatrix[x][selectedOption.id-1]=true;
      } else {
        boolArray[x]=false;
      }
  };

  return (
    <View>
      <View style={styles.view}>
        <Text style={styles.text}>Quesito {x+1}</Text>
        <Text style={styles.t}> </Text>
        <Text style={styles.t}> {x+1}) Cosa sono i Bosoni?</Text>
        <View style={styles.container111}>
          {options.map((option) => (
            <View key={option.id} style={styles.optionContainer}>
              <TouchableOpacity
              key={option.id}
              onPress={() => handleOptionClick(option.id)}
              style={[styles.button1, { backgroundColor: option.selected ? '#123d3c' : '#96fffbb9' }]}
            >
              <Text style={[styles.buttonText1,{color: option.selected ? '#96fffbb9' : '#123d3c' }]}>{option.risp}</Text>
            </TouchableOpacity>
            <Text style={styles.text1}>{option.label}</Text>
            </View>
          ))}
        </View>
        <Text> </Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={allClicPrev} style={styles.button}>
          <Text style={styles.buttonText}>Indietro</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={allClickNext} style={styles.button}>
          <Text style={styles.buttonText}>Avanti</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Page7 = ({ onPrev, onNext }) => {
  let x=6;
  
  const [options, setOptions] = useState([
    { id: 1, label: 'L\'entanglement quantistico è un complesso e misterioso fenomeno che genera energia all\'infinito nel mondo subatomico.', selected: boolMatrix[x][0], risp:"a" },
    { id: 2, label: 'L\'entanglement quantistico è un tipo di interazione tra fotoni che gli permette di muoversi a una velocità maggiore di quella della luce.', selected: boolMatrix[x][1], risp:"b" },
    { id: 3, label: 'L\'entanglement quantistico è un fenomeno misterioso che riesce a teletrasportare particelle da una parte all\'altra dell\'universo. L\'entanglement quantistico è il più complesso e misterioso fenomeno della meccanica quantistica, definito da Einstein come “spaventosa azione a distanza”', selected: boolMatrix[x][2], risp:"c" },
    { id: 4, label: 'L\'entanglement quantistico è un legame che avviene tra 2 particelle subatomiche, questo legame rompe le bariere dello spazio tempo stesso poichè i dati tra le 2 particelle vengono trasferiti dall\'una all\'altra in modo istantaneo come se lo spazio e il tempo non esistessero.L\'entanglement quantistico è il più complesso e misterioso fenomeno della meccanica quantistica, definito da Einstein come “spaventosa azione a distanza”.', selected: boolMatrix[x][3], risp:"d" },
  ]);

  const handleOptionClick = (id) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option) => {
        return {
          ...option,
          selected: option.id === id ? true : false,
        };
      });
    });
  };

  const allClickNext = async () => {
    await handleCompareButtonClick();
    await onNext();
  };

  const allClicPrev = async () => {
    await handleCompareButtonClick();
    await onPrev();
  };

  const handleCompareButtonClick = async () => {
    const selectedOption = options.find((option) => option.selected); 

    for(i=0;i<4;i++){
      boolMatrix[x][i]=false;
    }
    
    if (selectedOption) {
        if (selectedOption.id === 4) {
          boolArray[x]=true;
        } else {
          boolArray[x]=false;
        }
        boolMatrix[x][selectedOption.id-1]=true;
      } else {
        boolArray[x]=false;
      }
  };

  return (
    <View>
      <View style={styles.view}>
        <Text style={styles.text}>Quesito {x+1}</Text>
        <Text style={styles.t}> </Text>
        <Text style={styles.t}> {x+1}) Cos'è l'entanglement quantistico?</Text>
        <View style={styles.container111}>
          {options.map((option) => (
            <View key={option.id} style={styles.optionContainer}>
              <TouchableOpacity
              key={option.id}
              onPress={() => handleOptionClick(option.id)}
              style={[styles.button1, { backgroundColor: option.selected ? '#123d3c' : '#96fffbb9' }]}
            >
              <Text style={[styles.buttonText1,{color: option.selected ? '#96fffbb9' : '#123d3c' }]}>{option.risp}</Text>
            </TouchableOpacity>
            <Text style={styles.text1}>{option.label}</Text>
            </View>
          ))}
        </View>
        <Text> </Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={allClicPrev} style={styles.button}>
          <Text style={styles.buttonText}>Indietro</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={allClickNext} style={styles.button}>
          <Text style={styles.buttonText}>Avanti</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Page8 = ({ onPrev, onNext }) => {
  let x=7;
  
  const [options, setOptions] = useState([
    { id: 1, label: 'Il tempo viene visto come la 4˚ dimensione, infatti viviamo in una realtà quadridimensionale e non tridimensionale.', selected: boolMatrix[x][0], risp:"a" },
    { id: 2, label: 'Il tempo viene visto come un semplice susseguirsi di eventi.', selected: boolMatrix[x][1], risp:"b" },
    { id: 3, label: 'Il tempo viene visto come un fiume che non puo cambiare la sua direzione.', selected: boolMatrix[x][2], risp:"c" },
    { id: 4, label: 'Il tempo viene visto come una linea temporale alla quale si possono sovrapporre infinite altre linee temporali.', selected: boolMatrix[x][3], risp:"d" },
  ]);

  const handleOptionClick = (id) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option) => {
        return {
          ...option,
          selected: option.id === id ? true : false,
        };
      });
    });
  };

  const allClickNext = async () => {
    await handleCompareButtonClick();
    await onNext();
  };

  const allClicPrev = async () => {
    await handleCompareButtonClick();
    await onPrev();
  };

  const handleCompareButtonClick = async () => {
    const selectedOption = options.find((option) => option.selected); 

    for(i=0;i<4;i++){
      boolMatrix[x][i]=false;
    }
    
    if (selectedOption) {
        if (selectedOption.id === 1) {
          boolArray[x]=true;
        } else {
          boolArray[x]=false;
        }
        boolMatrix[x][selectedOption.id-1]=true;
      } else {
        boolArray[x]=false;
      }
  };

  return (
    <View>
      <View style={styles.view}>
        <Text style={styles.text}>Quesito {x+1}</Text>
        <Text style={styles.t}> </Text>
        <Text style={styles.t}> {x+1}) Come viene visto il tempo dalla relatività risteretta di Albert Einstein?</Text>
        <View style={styles.container111}>
          {options.map((option) => (
            <View key={option.id} style={styles.optionContainer}>
              <TouchableOpacity
              key={option.id}
              onPress={() => handleOptionClick(option.id)}
              style={[styles.button1, { backgroundColor: option.selected ? '#123d3c' : '#96fffbb9' }]}
            >
              <Text style={[styles.buttonText1,{color: option.selected ? '#96fffbb9' : '#123d3c' }]}>{option.risp}</Text>
            </TouchableOpacity>
            <Text style={styles.text1}>{option.label}</Text>
            </View>
          ))}
        </View>
        <Text> </Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={allClicPrev} style={styles.button}>
          <Text style={styles.buttonText}>Indietro</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={allClickNext} style={styles.button}>
          <Text style={styles.buttonText}>Avanti</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Page9 = ({ onPrev, onNext }) => {
  let x=8;
  
  const [options, setOptions] = useState([
    { id: 1, label: 'Si.', selected: boolMatrix[x][0], risp:"a" },
    { id: 2, label: 'Solo nel futuro.', selected: boolMatrix[x][1], risp:"b" },
    { id: 3, label: 'Dipende dal tipo di teoria fisica che vogliamo applicare, ma per ora non si sa.', selected: boolMatrix[x][2], risp:"c" },
    { id: 4, label: 'No.', selected: boolMatrix[x][3], risp:"d" },
  ]);

  const handleOptionClick = (id) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option) => {
        return {
          ...option,
          selected: option.id === id ? true : false,
        };
      });
    });
  };

  const allClickNext = async () => {
    await handleCompareButtonClick();
    await onNext();
  };

  const allClicPrev = async () => {
    await handleCompareButtonClick();
    await onPrev();
  };

  const handleCompareButtonClick = async () => {
    const selectedOption = options.find((option) => option.selected); 

    for(i=0;i<4;i++){
      boolMatrix[x][i]=false;
    }
    
    if (selectedOption) {
        if (selectedOption.id === 3) {
          boolArray[x]=true;
        } else {
          boolArray[x]=false;
        }
        boolMatrix[x][selectedOption.id-1]=true;
      } else {
        boolArray[x]=false;
      }
  };

  return (
    <View>
      <View style={styles.view}>
        <Text style={styles.text}>Quesito {x+1}</Text>
        <Text style={styles.t}> </Text>
        <Text style={styles.t}> {x+1}) È possibile viaggiare nel tempo?</Text>
        <View style={styles.container111}>
          {options.map((option) => (
            <View key={option.id} style={styles.optionContainer}>
              <TouchableOpacity
              key={option.id}
              onPress={() => handleOptionClick(option.id)}
              style={[styles.button1, { backgroundColor: option.selected ? '#123d3c' : '#96fffbb9' }]}
            >
              <Text style={[styles.buttonText1,{color: option.selected ? '#96fffbb9' : '#123d3c' }]}>{option.risp}</Text>
            </TouchableOpacity>
            <Text style={styles.text1}>{option.label}</Text>
            </View>
          ))}
        </View>
        <Text> </Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={allClicPrev} style={styles.button}>
          <Text style={styles.buttonText}>Indietro</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={allClickNext} style={styles.button}>
          <Text style={styles.buttonText}>Avanti</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Page10 = ({ onPrev, onNext }) => {
  let x=9;
  
  const [options, setOptions] = useState([
    { id: 1, label: 'No.', selected: boolMatrix[x][0], risp:"a" },
    { id: 2, label: 'Si esiste anche l\'antimateria ovvero la materia stessa al negativo e la materia oscura ovvero lo spazio che funge da cuscinetto tra la materia e l\'antimateria.', selected: boolMatrix[x][1], risp:"b" },
    { id: 3, label: 'Si esiste anche l\'antimateria ovvero la materia stessa al negativo.', selected: boolMatrix[x][2], risp:"c" },
    { id: 4, label: 'Si esiste anche la materia oscura ovvero la materia stessa al negativo e l\'antimateria ovvero lo spazio che funge da cuscinetto tra la materia e la materia oscura.', selected: boolMatrix[x][3], risp:"d" },
  ]);

  const handleOptionClick = (id) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option) => {
        return {
          ...option,
          selected: option.id === id ? true : false,
        };
      });
    });
  };

  const allClickNext = async () => {
    await handleCompareButtonClick();
    await onNext();
  };

  const allClicPrev = async () => {
    await handleCompareButtonClick();
    await onPrev();
  };

  const handleCompareButtonClick = async () => {
    const selectedOption = options.find((option) => option.selected); 

   for(i=0;i<4;i++){
      boolMatrix[x][i]=false;
    }
    
    if (selectedOption) {
        if (selectedOption.id === 2) {
          boolArray[x]=true;
        } else {
          boolArray[x]=false;
        }
        boolMatrix[x][selectedOption.id-1]=true;
      } else {
        boolArray[x]=false;
      }
  };

  return (
    <View>
      <View style={styles.view}>
        <Text style={styles.text}>Quesito {x+1}</Text>
        <Text style={styles.t}> </Text>
        <Text style={styles.t}> {x+1}) Oltre alla materia esiste altro?</Text>
        <View style={styles.container111}>
          {options.map((option) => (
            <View key={option.id} style={styles.optionContainer}>
              <TouchableOpacity
              key={option.id}
              onPress={() => handleOptionClick(option.id)}
              style={[styles.button1, { backgroundColor: option.selected ? '#123d3c' : '#96fffbb9' }]}
            >
              <Text style={[styles.buttonText1,{color: option.selected ? '#96fffbb9' : '#123d3c' }]}>{option.risp}</Text>
            </TouchableOpacity>
            <Text style={styles.text1}>{option.label}</Text>
            </View>
          ))}
        </View>
        <Text> </Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={allClicPrev} style={styles.button}>
          <Text style={styles.buttonText}>Indietro</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={allClickNext} style={styles.button}>
          <Text style={styles.buttonText}>Termina</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Page11 = ({ onRest }) => {
  let si=0;
  let no=0;
  let siboll=false;
  let noboll=false;
  for(i=0;i<10;i++){
    if(boolArray[i]){
      si++;
      siboll=true;
    }
    if(!boolArray[i]){
      no++;
      noboll=true;
    }
  }

  for(i=0;i<10;i++){
    boolArray[i]=false;
  }

  for(j=0;j<10;j++){
    for(i=0;i<4;i++){
      boolMatrix[j][i]=false;
    }
  }

  return (
    <View>
      <Text style={styles.text}>HAI COMPLETATO IL QUIZ ECCO IL TUO PUNTEGGIO:</Text>
      <Text style={styles.text}> </Text>
      <View style={styles.view}>
        <Text> </Text>
        {siboll && <Text style={styles.si}>risposte corrette: {si} </Text>}
        {siboll && noboll && <Text> </Text> }
        {noboll && <Text style={styles.no}>risposte errate: {no} </Text>}
        <Text> </Text>
      </View>
      <Text style={styles.text}> </Text>
      <TouchableOpacity onPress={onRest} style={styles.button}>
        <Text style={styles.buttonText}>Ritenta il Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {

  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const rest = () => {
    setCurrentPage(0);
  };

  let page;
  switch (currentPage) {
    case 0:
      page = <Page0 onNext={handleNext} />;
      break;
    case 1:
      page = <Page1 onNext={handleNext} />;
      break;
    case 2:
      page = <Page2 onPrev={handlePrev} onNext={handleNext} />;
      break;
    case 3:
      page = <Page3 onPrev={handlePrev} onNext={handleNext} />;
      break;
    case 4:
      page = <Page4 onPrev={handlePrev} onNext={handleNext} />;
      break;
    case 5:
      page = <Page5 onPrev={handlePrev} onNext={handleNext} />;
      break;
    case 6:
      page = <Page6 onPrev={handlePrev} onNext={handleNext} />;
      break;
    case 7:
      page = <Page7 onPrev={handlePrev} onNext={handleNext} />;
      break;
    case 8:
      page = <Page8 onPrev={handlePrev} onNext={handleNext} />;
      break;
    case 9:
      page = <Page9 onPrev={handlePrev} onNext={handleNext} />;
      break;
    case 10:
      page = <Page10 onPrev={handlePrev} onNext={handleNext} />;
      break;
    case 11:
      page = <Page11 onRest={rest} />;
      break;
    default:
      page = <Page0 onNext={handleNext} />;
      break;
  }

  return  <ImageBackground source={'https://www.unidformazione.com/wp-content/uploads/2022/04/numero-atomico-e-di-massa.jpg'} resizeMode="cover"> 
             <ScrollView style={styles.scroll}>
              {page}
            </ScrollView>
          </ImageBackground>;
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    marginBottom: 100,
  },
  container: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container111: {
    margin: 5,
    justifyContent: 'left',
  },
  view: {
    backgroundColor:"#9af8f57b",
    borderRadius: 40,
    margin: 9,
  },
  t: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    color: '#123d3c',
  },
  si: {
    fontSize: 30,
    margin: 10,
    fontWeight: 'bold',
    color: '#006938',
  },
  no: {
    fontSize: 30,
    margin: 10,
    fontWeight: 'bold',
    color: '#ff0000',
  },
  text: {
    color:"#96fffbda",
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 35,
    margin: 10,
    marginTop: 30,
    textShadowColor: '#123d3cf0',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 1,
  },
  button: {
    borderRadius: 50,
    borderColor:"#0000",
    backgroundColor:"#96fffbb9",
    justifyContent:'center',
    marginRight: 9,
    marginLeft: 9,
    marginBottom: 100,
  },
  button1: {
    borderRadius: 50,
    borderColor:"#0000",
    backgroundColor:"#96fffbb9",
    marginTop: 6,
    height: 27,
    width: 27,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  buttonText: {
    color: '#123d3c' ,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    margin: 15,
  },
  buttonText1: {
    color: '#123d3c' ,
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 20,
    marginRight: 8,
    marginLeft: 8,
    marginBottom: 2,
  },
  text1: {
    color: '#123d3c' ,
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 20,
    marginRight: 8,
    marginLeft: 35,
    marginBottom: 2,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  }
});

export default App;

// npx expo start --tunnel
// ctrl c uscire 
// npx create-expo-app nomeprogect