import { Image, KeyboardAvoidingView, TextInput, View } from "react-native"
import styles from '../textinput/textinput_style'
import { useState } from "react"

const CustomTextInput = (props) => {
    const { placeholder, onChangeText, value ,image } = props
    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleBlur = () => {
        setIsFocused(false)
    }
    return (
        <KeyboardAvoidingView>
            <View style={styles.container}>
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    style={[styles.textInput, isFocused && styles.focusedInput]}
                    onFocus={handleFocus}
                    onBlur={handleBlur} >
                </TextInput>
                <Image style={styles.icon} source={image}/>
            </View>
        </KeyboardAvoidingView>
    )
}

export default CustomTextInput