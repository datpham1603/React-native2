import { StyleSheet } from "react-native";
import { tlh,tlr } from "../../../contants/dimension";
const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    header: {
        height:209*tlh,
    },
    contend: {
        alignItems: 'center',
        flex: 0.7498975,
        paddingHorizontal: 30
    },
    img: {
        flex: 1,
        resizeMode: 'cover'
    },
    text: {
        position: 'relative',
        top:-20,
        fontSize: 30,
        fontWeight: '700',
        fontStyle: 'normal',
        color: 'black'
    },
    text1: {
        fontSize: 18,
        fontStyle: 'normal'
    },
    textinputContainer: {
        marginTop: 12*tlh,
        width: '100%'
    },
    flex: {
        marginTop: 21,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text2: {
        marginHorizontal: 8,
        color: 'black',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '500'
    },
    policy: {
        alignItems: 'center',
        marginVertical: 20*tlh,
        justifyContent:'center',
        width:'100%'
    },
    flex2: {
        flexDirection: 'row',
        marginTop: 35,
    },
    google: {
        marginRight: 15*tlr
    },
    facebook: {
        marginStart: 15*tlr
    },
    flex3: {
        marginTop: 20*tlh,
        flexDirection: 'row'
    },
    texttaotaikhoan: {
        color: '#009245',
        fontSize:12,
        fontWeight:'400',
        fontStyle:'normal'
    },
    focusedInput:{
        borderColor:'#009245'
    }
})

export default styles