import { StyleSheet } from "react-native";
import { tlh, tlr } from "../contants/dimension";

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    flexrow:{
        flexDirection:'row'
    },
    footerContainer:{
        width:326*tlr,
        height:43*tlh,
        justifyContent:'space-between',
        alignItems:'center'
    },
    btn:{
        width:326*tlr,
        height:50*tlh,
        backgroundColor:'#007537',
        justifyContent:'space-around',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:8
    },
    text:{
        color:'white',
        fontSize:16,
        fontStyle:'normal',
        fontWeight:'500',
        lineHeight:22
    },
    footer:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:21
    }
})

export default styles