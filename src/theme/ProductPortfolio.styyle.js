import { StyleSheet } from "react-native";
import { create } from "react-test-renderer";
import { Dimensions } from "react-native";
import { tlh } from "../contants/dimension";


const styles = StyleSheet.create({
    textCategory:{
        fontSize:14,
        fontWeight:"400",
        lineHeight:20,
        fontStyle:'normal',
        color:'#7D7B7B'
    },
    category: {
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        paddingHorizontal:8,
        paddingVertical:4,
        height: 34,
        marginRight:8,
        flexDirection: 'row'
    },
    categoryContainer: {
        height: 64 * tlh,
        paddingHorizontal: 24,
        paddingVertical: 15
    }
})

export default styles