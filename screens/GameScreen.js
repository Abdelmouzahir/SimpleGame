import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert,FlatList } from 'react-native';
import Title from '../components/Title';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/Card';
import Instruction from '../components/Instruction';
import GuessLog from '../components/GuessLog';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}
let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userChoice, onGameOver}) {
    const initialGuess = generateRandomBetween(1, 100, userChoice); // Generate a random number between 1 and 100 that is not the user's choice
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [rounds, setRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userChoice) {
            // Game over
            onGameOver(rounds.length);
        }
    }, [currentGuess, userChoice, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);


    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < userChoice) ||
            (direction === 'greater' && currentGuess > userChoice)
        ) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [
                { text: 'Sorry!', style: 'cancel' },
            ]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds((currentRounds) => [nextNumber, ...currentRounds]);
    }
    const guessRoundLenght = rounds.length;

    return (
        <View  style={styles.screen}>
           <View  style={styles.upper} >
             <Title>Opponent's Guess</Title>
             <NumberContainer>{currentGuess}</NumberContainer>
           </View>
              <Card> 
                <Instruction style={styles.instText}>higher or lower?</Instruction>
                <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>LOWER</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>GREATER</PrimaryButton>
                </View>
                </View>
             </Card>
             <View  style={styles.lstContainer}>
                {/*rounds.map(rounds => <Text key={rounds}>{rounds}</Text>)*/}
                <FlatList 
                    keyExtractor={item => item.toString()}
                    data={rounds}
                    renderItem={itemData => <GuessLog  rounds={guessRoundLenght - itemData.index} userNumber={itemData.item}/> }  /> 
             </View>
        </View>
    );
}

const styles = StyleSheet.create({
    upper:{
        marginTop: 50
    },
    screen: {
        flex: 1,
        padding: 12
    },
    instText:{
        marginBottom: 12
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    },
    lstContainer:{
        flex:1,
        padding:24
    }


    
});