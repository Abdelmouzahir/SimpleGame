import { View, StyleSheet } from "react-native";
import Colors from "../const/colors";

export default function Card({children}) {
    return <View style={styles.card}>{children}</View>;
    }

const styles = StyleSheet.create({
    card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: 100,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    //ios shadow
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26

    }
});
