import { StyleSheet } from "react-native";
import { tlr,tlh } from "../../contants/dimension";
const styles = StyleSheet.create({
    headerContainer:{
        // marginTop:15*tlh,
        width:'100%',
        height:55*tlh,
        paddingHorizontal:24,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    title:{
        fontSize:16,
        fontWeight:'500',
        fontStyle:'normal',
        color:'black'
    },
    img:{
        width:24*tlr,
        height:24*tlh
    },
    imgcontainer:{
        width:24*tlr,
        height:24*tlh
    }
    
})

export default styles