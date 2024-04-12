import { StyleSheet } from "react-native";
import { tlh, tlr } from "../contants/dimension";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textPayment:{
        color:'black',
        fontSize:16,
        fontStyle:'normal',
        fontWeight:'500',
        lineHeight:22*tlh,
        paddingBottom:4.41*tlh,
        borderBottomColor:"#7D7B7B",
        borderBottomWidth:1,
        marginBottom:15*tlh
    },
    inforContainer:{
        paddingHorizontal:48*tlr,
        paddingTop:15*tlh
    },
    texttip:{
        color:'gray',
        fontSize:14,
        fontStyle:'normal',
        fontWeight:'400',
        borderBottomColor:"#ABABAB",
        borderBottomWidth:1,
    },
    btn:{
        width:'100%',
        height:40*tlh,
        flexDirection:'row',
        borderBottomColor:'#7D7B7B',
        borderBottomWidth:1,
        marginBottom:15*tlh
    },
    text:{
        color:'#221F1F',
        fontSize:14,
        fontStyle:"normal",
        fontWeight:'400',
        lineHeight:20*tlh,
        paddingVertical:5
    },
    text1:{
        color:'#7D7B7B',
        fontSize:14,
        fontStyle:"normal",
        fontWeight:'400',
        lineHeight:20*tlh,
    },
    tipContainer:{
        borderBottomWidth:1,
        borderColor:"#ABABAB",
    }
})


export default styles