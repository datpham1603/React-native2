import { StyleSheet } from "react-native";
import { tlh,tlr } from "../../contants/dimension";

const styles = StyleSheet.create({
    flextop: {
        height: 274 * tlh,
        backgroundColor: '#F6F6F6'

    },
    imagecontainer: {
        width: 48,
        height: 48,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        position: 'absolute',
        top: 24 * tlh,
        right: 25 * tlr
    },
    imageBackground: {
        position: 'absolute',
        bottom: 0,
        height: 205,
        width: '100%',
        backgroundColor: 'white',

    },
    title: {
        position: 'absolute',
        bottom: 166 * tlh,
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: "500",
        color: 'black',
        marginStart: 20 * tlr,
        lineHeight: 37 * tlh
    },
    textdetail: {
        position: 'absolute',
        bottom: 135 * tlh,
        left: 20 * tlr,
        color: '#007537',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500'
    },
    red:{
        width:'100%',
        height:250,
        backgroundColor:'red'
    }
})

export default styles