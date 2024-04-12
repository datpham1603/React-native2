import { Text, TouchableOpacity } from "react-native"
import styles from '../themes/customButton_style'
import LinearGradient from 'react-native-linear-gradient';


const CustomButton = (props) => {
    const { title ,onPress } = props
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#007537', '#4CAF50']} style={styles.btn}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.text}> {title}</Text>
            </TouchableOpacity>
        </LinearGradient>

    )
}

export default CustomButton