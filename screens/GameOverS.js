import { View, Text, StyleSheet, Image } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import Colors from '../const/colors';

export default function GameOverS({roundsNumber, userNumber, onRestart}) {
    return (
        <View style={styles.screen}>
         <Title>Game Over!</Title>
         <View  style={styles.imageCNT} > 
            <Image  style={styles.image} source={require('../assets/success.png')} />
         </View>
         <View>
            <Text style={styles.summaryText}>You needed <Text style={styles.hilight}>{roundsNumber}</Text> rounds to guess the number {''} <Text style={styles.hilight}>{userNumber}</Text>. </Text>
         </View>
         <PrimaryButton onPress={onRestart}> Start New Game</PrimaryButton>
        </View>
    );
    }

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    imageCNT:{
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24
    },
    summaryText: {
       fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    hilight: {
        color: Colors.primary500,
        fontFamily: 'open-sans-bold'}
});