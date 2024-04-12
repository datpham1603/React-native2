import { StyleSheet, View } from "react-native"

const HorizontoLine = ({ height, color ,width}) => {
    return (
        <View style={{
            height: height,
            width:width,
            backgroundColor:color
        }} />
    )
}

export default HorizontoLine

