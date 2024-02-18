import { useState } from "react";
import { TextInput , View, StyleSheet,Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from '../const/colors';
import Title from "../components/Title";
import Card from "../components/Card";
import Instruction from "../components/Instruction";

export default function StartGameS({onPickNm}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function resetInput(){
        setEnteredNumber('');
    }

    function numberInput(entredText) {
        setEnteredNumber(entredText);
    }
    function ConfirmInput(){
     const chosenNumber = parseInt(enteredNumber); 
      if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
        Alert.alert('Invalid number!','Number has to be between 1 and 99.', [{text: 'Okay', style: 'destructive', onPress: resetInput}]
        );
        return;
      };
      onPickNm(chosenNumber);
    }
    
    return (
      <View  style={styles.rootContainer}>
        <Title>Guess My Number Game</Title>
        <Card>
        <Instruction>Enter a Number</Instruction>
        <TextInput 
         style={styles.numberInput}
         maxLength={2}
         keyboardType="number-pad" //number pad only
         autoCapitalize="none"
         autoCorrect={false}
         value={enteredNumber}
        onChangeText={numberInput}
         />
        <View style={styles.buttonsContainer}>
         <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={ConfirmInput}>Confirm</PrimaryButton>
        </View>
        </View>
        </Card>
      </View>
    );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },
  
  
  numberInput: {
   height: 50,
   width: 50,
   fontSize: 32,
   borderBottomColor: Colors.accent500,
   borderBottomWidth: 2,
   color: Colors.accent500,
   marginVertical: 8,
   fontWeight: 'bold',
   textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  }
});