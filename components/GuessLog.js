import { View, Text, StyleSheet} from "react-native";
import Colors from "../const/colors";

export default function GuessLog({rounds, userNumber}) {
    return (
        <View style={styles.listContainer}>
            <Text style={styles.itemText}># {rounds}</Text>
            <Text style={styles.itemText}>Opponent's Guess: {userNumber}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
   listContainer: {
       borderColor: Colors.primary800,
       borderWidth: 1,
       borderRadius: 1,
       padding: 12,
       marginVertical: 8,
       backgroundColor: Colors.accent500,
       flexDirection: 'row',
       justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 3,
        shadowOpacity: 0.25
   },
   itemText:{
    fontFamily: 'open-sans',
   }
});