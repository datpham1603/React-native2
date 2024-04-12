import { StyleSheet } from "react-native";
import { tlh, tlr } from "../../contants/dimension";
const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      alignItems:'center'
    },
    textInput: {
        width: '100%',
        height: 46 * tlr,
        justifyContent: 'space-evenly',
        borderColor: '#8B8B8B',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10 * tlh,
        paddingStart: 14 * tlr
    },
    focusedInput: {
        borderColor: '#009245'
    },
    icon:{
        position:'absolute',
        end:15
    }

})

export default styles