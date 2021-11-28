import React, {useState, useEffect} from 'react';
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../cores/colors';


const Home = ({user}) => {
  const [good, setGood] = useState('')
  const [greet, setGreet] = useState('');
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [result, setResult] = useState(0);
  const [textResult, setTextResult] = useState('');

  const findGood = () => {
    const hrs = new Date().getHours();
    if (hrs === 0 || hrs < 12) return setGood('Bom');
    setGood('Boa');
};

  const findGreet = () => {
    const hours = new Date().getHours();

    if (hours === 0 || hours < 12) return setGreet('dia');
    if (hours === 1 || hours < 18) return setGreet('tarde');
    setGreet('Noite');
};

  const handleChangeText = (text, valueFor) => {
    if (valueFor === 'peso') setPeso(text);
    if (valueFor === 'altura') setAltura(text);
  }
  const IMC = (peso / (altura * altura))

  const findIMC = () => {
    var results = result.toFixed(2)
    if (results === 18 || results < 18) return setTextResult('Magro(a)');
    if (results === 18.1 || results < 24.9) return setTextResult ('com Peso Normal');
    if (results === 25 || results < 30.1) return setTextResult ('Sobrepeso');
    return setTextResult ('Obeso(a)');

  } 
  useEffect(() => {
    findIMC();
    findGreet();
    findGood();
}, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerMessage}>{`${good} ${greet} ${user.name}`}</Text>
      <View style={styles.headerTitle}>
      <Text style={styles.textTitle}>IMC - Calculadora do Índice de Massa Corporal</Text>
      </View>
      <View>
        <View style={styles.inputText}>
          <Text style={styles.textInput}>Altura</Text>
          <Icon name="human-male"
          size={30}/>
          <TextInput 
          onChangeText={(text) => handleChangeText(text, 'altura')}
          style={{fontSize: 30, borderBottomWidth: 1, width: 150, color: colors.WHITE, textAlign: 'right'}}
          placeholder=""
          keyboardType="numeric"
          maxLength={5}
          />
        </View>

        <View style={styles.inputText}>
          <Text style={styles.textInput}>Peso</Text>
          <Icon name="weight-kilogram"
          size={30}/>
          <TextInput
          onChangeText={(text) => handleChangeText(text, 'peso')}
          style={{fontSize: 30, borderBottomWidth: 1, width: 150, color: colors.WHITE, textAlign: 'right'}}
          placeholder=""
          keyboardType="numeric"
          maxLength={3}
          />
        </View>
      </View>
      <TouchableOpacity 
        style={styles.buttonCalc}
        onPressIn={() => setResult(IMC, findIMC())}
      >
        <Text style={styles.textCalc}>Calcular IMC</Text>

      </TouchableOpacity>

      <View style={styles.headerCalc}>

        {result.toFixed(2) > 0.1 ? 
        (<Text style={styles.headerNumberResults}>Seu IMC é {result.toFixed(2)}</Text>): null}

        {result.toFixed(2) > 0.5 ?
        (<Text style={styles.headerTextResults}> Você está {textResult} </Text>): null}

      </View>
    </View>
  )
}


export default Home;