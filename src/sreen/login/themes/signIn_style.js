import { StyleSheet } from "react-native";
import { tlr,tlh } from "../../../contants/dimension";
console.log(312.09*tlh)

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    background: {
        height: 312.09 * tlh,
        width:'100%'
    },
    text: {
        fontWeight: '700',
        fontSize: 30,
        color: 'black',
        fontStyle: 'normal'
    },
    contend: {
        paddingHorizontal: 30*tlr,
        alignItems: 'center'
    },
    flex: {
        marginBottom: 24*tlh,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    flex1: {
        flexDirection: 'row'
    },
    flex2: {
        flexDirection: 'row',
        marginTop: 35*tlh,
    },
    google: {
        marginRight: 15*tlr,
        width:32*tlr,
        height:32*tlh
    },
    facebook: {
        marginStart: 15*tlr,
        width:33,
        height:33
    },
    dn: {
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '400',
        marginBottom: 20*tlh
    },
    text2: {
        marginHorizontal: 8,
        color: 'black',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '500'
    },
    flex4: {
        marginTop: 21*tlh,
        flexDirection: 'row',
        alignItems: 'center'
    },
    remember:{
        marginEnd:5*tlr,
        width:22*tlr,
        height:22*tlh,
    },
    nhotaikhoan:{
        marginTop:4,
        fontSize:11,
        fontStyle:'normal',
        fontWeight:'500',
        color:'#949090'
    },
    flex5:{
        flexDirection:'row',
        marginTop:15*tlh
    },
    texttao:{
        color:'#009245',
        fontSize:12,
        fontStyle:'normal',
        fontWeight:'400',
        opacity:0.75
    },
    text7:{
        fontSize:12,
        fontStyle:'normal',
        fontWeight:'400',
        color:'black'
    },
    backct:{
        backgroundColor:'#F8EEC0',
        width:33,
        height:33,
        borderRadius:16,
        marginTop:36*tlh,
        marginStart:21*tlr,
        justifyContent:'center',
        alignItems:'center'
    },
    errtext:{
        color:'red',
        fontSize:11,
        fontWeight:'600',
        fontStyle:'normal'
    }
})

export default styles