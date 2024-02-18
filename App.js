import { useState } from 'react';
import {useFonts} from 'expo-font';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameS from './screens/StartGameS';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './const/colors';
import GameOverS from './screens/GameOverS';
import AppLoading from 'expo-app-loading';

export default function App() {
   const [userNumber, setUserNumber] = useState();
   const [gameOver , setGameOver] = useState(true);
   const [roundsNumber, setRoundsNumber] = useState(0);


   const [fontsLoaded] = useFonts({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
  if(!fontsLoaded) return <AppLoading />; // If fonts are not loaded yet, return AppLoading component

   function pickedNumber(pnumber){
      setUserNumber(pnumber);
      setGameOver(false);
   }

   function gameOverHandler(numberOfRounds){
      setGameOver(true);
      setRoundsNumber(numberOfRounds);
    }

    function startNwGame(){
      setRoundsNumber(0);
      setUserNumber(null);
    }

  let screen = <StartGameS onPickNm ={pickedNumber}/>;
  if (userNumber){
        screen = <GameScreen  userChoice={userNumber} onGameOver={gameOverHandler} />;
  }
  if (gameOver && userNumber){
    screen = <GameOverS userNumber={userNumber} roundsNumber={roundsNumber} onRestart={startNwGame}/>;
  }
  
  return (
       <LinearGradient  colors= {[Colors.primary700,Colors.accent500]} style={styles.rootScreen}>
        <ImageBackground source={require('./assets/game.jpg')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
       <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>   
        </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
