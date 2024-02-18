import { Text, StyleSheet } from "react-native";
import Colors from "../const/colors";

export default function Instruction({children, style}) {
    return (
       <Text  style={[styles.instructions, style]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    instructions: {
            fontFamily: 'open-sans',
            fontSize: 24,
            color: Colors.accent500
    }
});