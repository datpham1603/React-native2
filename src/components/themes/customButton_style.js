import { StyleSheet } from "react-native";
import { tlr,tlh } from "../../contants/dimension";
const styles = StyleSheet.create({

    btn:{
        paddingVertical:10,
        width:327*tlr,
        height:50*tlh,
        borderColor:'#4CAF50',
        backgroundColor:'#4CAF50',
        borderWidth:1,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:'white',
        fontSize:20,
        fontStyle:'normal',
        fontWeight:'700'
    }
})

export default styles