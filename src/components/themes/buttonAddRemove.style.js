import { StyleSheet } from "react-native";
import { tlh,tlr } from "../../contants/dimension";
const styles = StyleSheet.create({
    buttonContainer:{
        width:30*tlr,
        height:30*tlh,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6,
        borderColor:'black',
        borderWidth:1
    },
    text:{
        color:'black',
        fontSize:20,
        fontStyle:'normal'
    }
})

export default styles