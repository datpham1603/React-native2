import { StyleSheet } from "react-native";
import { tlr, tlh } from "../contants/dimension";
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    categoryContainer: {
        height: 58 * tlh,
        width: '100%',
        paddingStart: 40 * tlr,
    },
    price: {
        marginStart: 40 * tlr,
        width: 279 * tlr,
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 34,
        color: '#007537'
    },
    detailContainer: {
        width: "100%",
        height: 173.41379 * tlh,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    detail: {
        width: 279 * tlr,
        height: 22 * tlh,
        borderBottomColor: '#ABABAB',
        borderBottomWidth: 1
    },
    generalContainer: {
        width: '100%',
        alignItems: 'center'
    },
    selected: {
        width: 327 * tlr,
        height: 22,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    selectedContainer: {
        width: 150 * tlr,
        height: 30 * tlh,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    imgf: {
        height: 268 * tlh,
    },
    view: {
        width:'100%',
        paddingStart:48,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginBottom:10,
    },
    selectedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue', // Màu nền của button
        marginRight: 10, // Khoảng cách giữa các button
    },
    buttonText: {
        fontSize: 20, // Kích thước chữ trong button
        fontWeight: 'bold', // Độ đậm của chữ
        color: 'white', // Màu chữ
    },
    kcc:{
        paddingHorizontal:48,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between'
    }
})


export default styles