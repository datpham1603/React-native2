import { Text, View } from "react-native"
import styles from "../themes/buttonAddRemove.style"
const ButtonAddRemove = ({ title, width, height }) => {
    return (
        <View style={[styles.buttonContainer, { width: { width }, height: { height } }]}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default ButtonAddRemove